# Create your tasks here
from __future__ import absolute_import, unicode_literals
from app import celery_app

import os, json
import tensorflow as tf
import tensorflow.contrib.eager as tfe

tf.enable_eager_execution()


@celery_app.task
def train_network(filePath, **kwargs):
    optimizers = {
        "GradientDescentOptimizer": tf.train.GradientDescentOptimizer,
        "MomentumOptimizer": tf.train.MomentumOptimizer ,
        "AdagradOptimizer": tf.train.AdagradOptimizer,
    }

    no_of_features = len(kwargs["selectedFeatures"])

    train_dataset = tf.data.TextLineDataset(filePath)
    header_set = train_dataset.take(1).make_one_shot_iterator().next()
    headers = header_set.numpy().split(",")
    features_index = []
    class_index = headers.index(kwargs["classColumn"]) 

    for header in kwargs["selectedFeatures"]:
        features_index.append(headers.index(header))

    def parse_csv(line):
        record_defaults = [[0.]]*len(headers)
        record_defaults[class_index] = [0]
        parsed_line = tf.decode_csv(line, record_defaults)
        feature_tensors = []
        for i in features_index:
            feature_tensors.append(parsed_line[i])

        features = tf.reshape(feature_tensors, shape=(len(feature_tensors),))
        label = tf.reshape(parsed_line[class_index], shape=())
        return features, label

    def loss(model, x, y):
        y_ = model(x)

        one_hot = None
        if kwargs["lossFunction"] == "SigmoidCrossEntropy" or kwargs["lossFunction"] == "SoftmaxCrossEntropy":
            classes_list = []
            for i in y:
                classes_list.append(i.numpy())
            classes = set(classes_list)
            one_hot = tf.one_hot(y, len(classes))

        if kwargs["lossFunction"] == "SigmoidCrossEntropy":
            return tf.losses.sigmoid_cross_entropy(multi_class_labels=one_hot,logits=y_)
        elif kwargs["lossFunction"] == "SoftmaxCrossEntropy":
            return tf.losses.softmax_cross_entropy(onehot_labels=one_hot, logits=y_)
        elif kwargs["lossFunction"] == "SparseSoftmaxCrossEntropy":
            return tf.losses.sparse_softmax_cross_entropy(labels=y, logits=y_)


    def grad(model, inputs, targets):
        with tf.GradientTape() as tape:
            loss_value = loss(model, inputs, targets)
        return tape.gradient(loss_value, model.variables)


    train_dataset = train_dataset.skip(1)
    train_dataset = train_dataset.map(parse_csv)
    if kwargs["shouldShuffle"]:
        train_dataset = train_dataset.shuffle(buffer_size=float(kwargs["bufferSize"]))
    train_dataset = train_dataset.batch(float(kwargs["batchSize"]))


    layers = []
    layers_keys = kwargs["hiddenLayersValues"].keys()
    for layer_no in range(1, len(layers_keys)+1):
        layer_no = str(layer_no)
        if layer_no == "1":
            layers.append(
                tf.keras.layers.Dense(
                    int(kwargs["hiddenLayersValues"][layer_no]["neuronsCount"]),
                    activation=kwargs["hiddenLayersValues"][layer_no]["activationFunc"],
                    input_shape=(len(features_index),)))
        elif int(layer_no) == len(layers_keys):
            layers.append(
                tf.keras.layers.Dense(
                    int(kwargs["hiddenLayersValues"][layer_no]["neuronsCount"])))
        else:
            layers.append(
                tf.keras.layers.Dense(
                    int(kwargs["hiddenLayersValues"][layer_no]["neuronsCount"]),
                    activation=kwargs["hiddenLayersValues"][layer_no]["activationFunc"]))
    
    model = tf.keras.Sequential(layers)

    momentum = {}
    if kwargs["optimizer"] == "MomentumOptimizer":
        momentum = {"momentum": 0.3}
    optimizer = optimizers[kwargs["optimizer"]](learning_rate=float(kwargs["learningRate"]), **momentum)

    train_loss_results = []
    train_accuracy_results = []

    num_epochs = int(kwargs["epochs"])

    for epoch in range(num_epochs):
        epoch_loss_avg = tfe.metrics.Mean()
        epoch_accuracy = tfe.metrics.Accuracy()

        for x, y in train_dataset:
            grads = grad(model, x, y)
            optimizer.apply_gradients(zip(grads, model.variables),
                global_step=tf.train.get_or_create_global_step())

            epoch_loss_avg(loss(model, x, y))
            epoch_accuracy(tf.argmax(model(x), axis=1, output_type=tf.int32), y)

        train_loss_results.append(epoch_loss_avg.result())
        train_accuracy_results.append(epoch_accuracy.result())

        if epoch % 5 == 0:
            print "Epoch {:03d}: Loss: {:.3f}, Accuracy: {:.3%}".\
                format(epoch, epoch_loss_avg.result(), epoch_accuracy.result())