**[Abstract]{.smallcaps}**

Ever since the increase in the rate of data collection in various
fields, the machine learning community has built new methods, tools and
services. Needless to say many of the popular tools available for
machine learning such as the TensorFlow, Pytorch are open sourced, some
state of the art services provided by tech giants such as Google,
Amazon, Microsoft are primarily commercialized. The research primarily
focuses on providing an open sourced state of the art machine learning
platform. The platform is expected to be designed for continuous
development and exploit the use of GUI and the cloud to train neural
networks. Hence enabling the machine learning community with another set
of tools for fast experimentation of data-sets. For the purposes of
simplicity the scope of the research and implementation remains to
neural network based algorithms and how to best simplify the training
process of any given data-sets in the tabular form. In theory the
solution could be extended to other machine learning algorithms.

Introduction
============

Artificial Neural Networks
--------------------------

Artificial Neural Network(ANN) is a stepped-down mathematical
implementation of the working of a biological human brain. Hence, it is
essential to understand how most biological brains works to understand
how ANN are modelled.

Ideally, a biological brain consists of numerous components but ANN are
primarily inspired by a small part of its understanding on how neurons
contribute in the process of thinking and processing. Neurons are
biological cells which is one the fundamental building blocks of any
organism's nervous system. A human brain consists of approximately
hundred billion neuron cells and each with at least ten thousand
connections to other neurons making approximately a thousand trillion
connections in the brain. The connections could ideally be a memory or a
thought in process [@humanmemory].

Typically, a neuron consists of 3 parts such as the cell body or Soma,
Axon and Dendrites. Each of these are with specific functionality. The
cell body contains the genetic information to produce required proteins
for the neuron to sustain. Around the cell body exists hair like
structures called dendrites and long thread like structure called axon.
The dendrites and axon together help in communicating with other
neurons. This communication happens through a connection called synaptic
connection. This connection typically consists of one end of a neuron's
axon to the dendrite of another neuron. The figure
[bio_neuron](images/bio_neuron){reference-type="ref"
reference="bio_neuron") shows a typical biological neuron with the
parts as described above [@neuronworking].

[bio_neuron](images/bio_neuron)

Each neuron creates a voltage difference around itself by having
different chemical combinations of ions. Perhaps, this is the most
interesting part of a neuron since it is the fundamental functionality
based on which ANN are modelled. If there is right and a significant
change in the voltage around the neuron's cell membrane, the neuron is
triggered or activated and creates something called as nerve impulse. As
each neuron is connected to thousand other neurons, this impulse is then
transmitted through the synaptic connection to other connected neurons
[@synapse].

With a fair understanding about the working of a biological brain,
psychologists and mathematicians together introduced artificial neural
networks mimicking the working of the neurons. Similar to a biological
neuron an ANN too consists the cell body, axon, and dendrites. The cell
body can be visualized as a node which is a mathematical function. The
axon could be visualized as the output which comes through a node's
mathematical function. And the dendrites could be visualized as the
input to the node itself either directly or from another neuron. The
process of connecting one node's output as input to another neuron could
be visualized as the synaptic connection. The fig
[ann](images/ann){reference-type="ref" reference="ann") shows
the similarities between the biological neuron and a neuron in ANN.

With the structure of ANN ready, the model needs a learning mechanism.
Going back to how a biological brain learns, it is evident that a
synaptic connection to another neuron gets stronger, the more number of
times it is triggered. And hence, when a similar event occurs in the
real world the strongest connections are fired, which is a fundamental
process in learning. This could be achieved for ANN in various
approaches. The most popular approach, however, is to incorporate
weights along with the inputs to every node. Every time the ANN model
outputs something, it is verified with what is expected. If there is an
error, the weights are corrected in small amounts to reduce the error.
This process is repeated until the model is said to be trained. A
trained model simply means that it has adjusted its weights well enough
to predict the result with high accuracy when a set of inputs is given
similar to the ones used for learning but disjoint
[@historyneuralnetworks].

Research Topic
--------------

ANN took time to be recognized although it was introduced in the late
1950s. Even after recognition there has been multiple attempts for
applications of ANN and mostly has not been practical enough. The
reasons for the failure being lack of enough data and also computing
power. There has been continuous growth and advancements in computers.
With the introduction of software solutions across many domains,
collection of data has increased exponentially and it is now easier to
train machine learning algorithms to derive some peculiar insights.

Apart from the advantages of computing power and availability of large
real world data-sets, there are also numerous machine learning libraries
which have been optimized over the years and fairly easy to use.
In-spite of having considerable advancements, training data-sets still
requires the data scientist to have knowledge of the programming
language and the library used.

Needless to say, the process of finding the right machine learning
algorithm for any given data set is still time consuming and a tedious
process. It includes testing your data set against multiple algorithms,
variations of the same algorithm and finally comparing the results for
the best outcome. If the above mentioned process is streamlined, machine
learning analysts or scientists could find a right algorithm to extract
useful information soon enough. Since the aim is to streamline the
process it makes it is even easier for the users if the solution is on a
cloud based platform. For the sake of simplicity and to reduce the
timescale of research, the scope of this research will remain only to
Neural Network based algorithms.

Problem Statement
-----------------

In order to understand the problem this thesis is trying to address, it
is necessary to go through an example process of finding a suitable ANN
model to train data-set. For training data-sets we use **Back
Propagation** algorithm as it is most popularly used algorithm in deep
learning. Back Propagation is used to compute gradients and correct the
weights during the data learning process.

### A Typical Neural Network Algorithm With Back Propagation {#a-typical-neural-network-algorithm-with-back-propagation .unnumbered}

Consider: $$\begin{aligned}
    inputs = [ x_1, x_2, x_3, ...., x_n ]\end{aligned}$$

Each input in the input set has to go through every connected neuron as
a product of the neuron's weights. And each neuron consumes these input
and throws an output as a function of the inputs. $$\begin{aligned}
    f = \sum_{i} w_{i}x_{i} + b\end{aligned}$$

The output of each neuron has to continue to an activation function to
be used as an input to the other connected neurons. $$\begin{aligned}
    sigmoid = \frac{1}{1 + e^-x}\end{aligned}$$

When the inputs flow through all the layers of the network until the
output, the output is then compared with expected output to compute the
loss. The loss is again computed by a function of the output and the
expected output. $$\begin{aligned}
    loss =  \frac{1}{2} \sum (target_i - output_i)^2\end{aligned}$$

Once the loss is computed, the gradients are computed using one of the
many optimization techniques available such as **Gradient Descent**.

The algorithm described above is the most basic form of ANN. Typically,
a data scientist has to work with different data-sets. The process of
training each data-set itself is a process of trial and error as there
are number of components of the algorithm that are subject to change
depending on the data-set.

From equation 1.2, the weights w~i~ has to be initialized randomly.
Equation 1.3 and 1.4 has to be adapted or changed depending on the
data-set. For the optimization process the data scientist also has to
set a learning constant. More parameters might be required depending on
what optimization algorithms are used. With numerous changing factors
and considering the time each learning process takes, it can be imagined
how tedious the process could get.

Apart from the training process, it is also necessary that the data-set
is ready for training. When working with different data-sets, it may
occur that the data-set needs to be manipulated to suit the training
requirements. This process is called data pre-processing. The
manipulation of data-set is totally a responsibility of a data scientist
depending on the data size and its complexity. These are either done
programmatically or with the help of some existing tools. Even though
there are tools existing, there always remains some integration or data
transformation to be done depending on the training libraries to be
used. As the pre-processing of data-set is a time consuming process, it
is essential to have a platform that could streamline the above
mentioned processes and let data scientists focus on more critical
tasks.

Research Goal
-------------

The most fundamental expectation of this research is to help the machine
learning community by providing a useful toolkit in their research and
development which enables the community to fasten the understanding of
their data sets without having to go through the hassle of implementing
every suitable algorithm.

Some of the things that can be expected as a bare minimal solution or a
prototype are as follows:

1.  A web interface to upload the data set in a particular format (at
    least in one format such as CSV or TSV)

2.  A set of data pre-processing tools to transform data, scale data
    etc.

3.  A form or dialog to choose multiple factors such as the activation
    functions, number of neurons, hidden layers etc. And finally a view
    to compare the results.

4.  A solid architecture on which future development of the project and
    feature additions can be done effortlessly.

Thesis Structure
----------------

**[Chapter 1]{.smallcaps}** starts with an introduction to artificial
neural networks which explains how the idea of ANN is derived from the
biological neurons followed by a clear description of the research topic
and its scope. The chapter further discusses the problem statement
briefly with a basic understanding of neural networks and its changeable
components. Towards the end, the chapter describes research goal in two
parts, one as a big picture and the other specific to the
implementation.

**[Chapter 2]{.smallcaps}** is required to understand the current
affairs in the field of the machine learning. Under this chapter all the
popular tools and services are categorized and compared in depth.

**[Chapter 3]{.smallcaps}** plots the solution that the thesis proposes.
The solution itself is divided into two parts for the purpose of clear
understanding. The big picture and the functional aspects are the two
parts of the solution. The chapter finally ends with the flow of the
application with the help of a flow chart diagram.

**[Chapter 4]{.smallcaps}** describes why designing of prototype is
important to the implementation process and display all the screen shots
of the prototypes with the explanation of the process of application
usage.

**[Chapter 5]{.smallcaps}** discusses the implementation details of the
proposed solution. It starts with analyzing the wide range of
technologies available. Most importantly gives a brief overview of the
layered system architecture explaining the role and responsibilities of
each layer, the flow of data in the system, explaining the frontend
development process as it could appear a little complex to comprehend.
Also the chapter provides how to setup the project and finally some
screen shots of the application itself.

**[Chapter 6]{.smallcaps}** with a working implementation of the
solution ready, this chapter evaluates the solution by comparing against
the existing solutions. The chapter also puts forth the possible
integration and development in the future.

**[Chapter 7]{.smallcaps}** summarizes the whole thesis briefly and also
addresses any known limitations.

Current Trends
==============

[current_trends]{#current_trends) The past
decade has seen a significant and rapid growth in the field of machine
learning. With rapid expansion, there has been many tools and services
built in order to make the learning process simple and easy to use. Each
tool specializes in only certain areas of machine learning. Many of
these tools and services are open source projects but there are also
some proprietary services available for very specific use cases. In
subsequent sections we will come across some of the most popular and
widely used machine learning tools and services described in brief.

Overview
--------

Before starting with an in depth analysis of all the available tools and
services, it is necessary to categorize all the trending tools and
services based on how the tools can be used and to what part of the
machine learning process it can be applied to. There is a necessity to
classify tools and services since the tools are the one on which Machine
Learning solutions are built on. Machine Learning services are optional
and can be considered as peripheral.

Machine Learning tools can be just a library with optimized algorithms
offering flexibility for customization, a Graphical User Interface (GUI)
based software for training or a software to integrate machine learning
application with other applications. The base for categorization are
plenty. But with the scope of this thesis aiming at simplification of
the machine learning process, it is best to categorize tools into GUI
based tools, command line based tools or programming library.

Categorizing the tools as described gives a platform to learn about the
different tools with the perspective of usage and hence gives a road map
in understanding the differences, advantages, limitations of each
approach and its ease of use.

Machine Learning Services on the other hand are different from tools.
While tools can be considered as building blocks of machine learning
solutions, machine learning services mostly provides a platform for
these machine learning solutions for production systems. Sometimes,
machine learning services can also be a trained model for public access.

Machine Learning Tools {#ml_tools}
----------------------

[classification_tools](images/classification_tools)

Figure
[classification_tools](images/classification_tools){reference-type="ref"
reference="classification_tools") shows a broad classification of
Machine Learning Tools. Each tool has been described briefly with
various features offered by each of them in the subsequent sections.

### WEKA

**WEKA** is a standalone data mining application and a machine learning
workbench built using Java. It contains a collection of machine learning
algorithms, tools for data pre-processing and visualization. Weka
emphasizes more on providing a good working environment to domain
specialist than experts. It is mainly built for three purposes :

1.  To derive insights of a data-set using existing learning methods

2.  To make predictions from an existing trained model

3.  To compare different learning models suitable for a given data-set

From figure
[classification_tools](images/classification_tools){reference-type="ref"
reference="classification_tools"), Weka is classified under GUI
which means that Weka is mainly used through a GUI. Weka offers four
different interfaces with different use cases. Additionally, it also
provides a command line interface. The figure
[weka_gui](images/weka_gui){reference-type="ref"
reference="weka_gui") shows the Weka dialog offering the different
interfaces.

[weka_gui](images/weka_gui)

#### Explorer

Explorer offers all the features through menus and forms. For instance,
starting with a data file and an algorithm, one can configure all the
options and initialization through forms and menus.

#### Knowledge Flow

Knowledge Flow offers streaming for data pre-processing of large data
sets. This is required since the Explorer User Interface loads the
data-set into the memory and hence it is limited to small data sets. In
practice, machine learning is applied to large data-sets which will
never fit into the memory. Hence, Knowledge Flow offers streaming large
data into the process.

#### Experimenter

[weka_experimenter](images/weka_experimenter)

Weka Experimenter, perhaps, is the most interesting part of Weka as it
addresses the same issue which this thesis is addressing to.
Experimenter helps data scientists to find the right methods and
parameters for a given data set. Weka also provides the capability of
running the training process in a distributed environment. Figure
[weka_experimenter](images/weka_experimenter){reference-type="ref"
reference="weka_experimenter") is a screenshot from the Weka
Experimenter GUI [@TheWekaWorkbench].

#### Workbench

Workbench is a combination of all the features from the stated
interfaces in one place. This provides a highly configurable platform to
the users.

### Microsoft Machine Learning Studio {#MLStudio}

**Microsoft's Machine Learning (ML) Studio** is an interactive
predictive analysis tool which uses the drag and drop approach for
creating, training and testing a model for any given data-set. It is a
service from Microsoft which is not just a platform but a specific way
to handle the whole learning process through GUI and drag and drop.
Thus, it is fair to compare this service with other machine learning
tools.

[ML_studio](images/ML_studio)

Microsoft's ML Studio offers a complete solution. By complete it means
that the (ML) studio covers all the machine learning processes within
the platform with enough flexibility. This involves loading data-sets
from various sources such as CSV, TSV, databases. The ML studio also
allows users to pre-process data, data transformation, test, train and
save trained models for making prediction. The ML Studio comprises of
hundreds of packages and algorithms.

A close inspection at the figure
[ML_studio](images/ML_studio){reference-type="ref"
reference="ML_studio") reveals the GUI is designed to be very
intuitive. The GUI enforces the data scientist to make a flow diagram
with their data-set as the starting point and consequently
pre-processing functions and so on until the model is trained and saved.

For more flexibility Microsoft ML studio also allows user to create
modules. This is required if data scientist comes across a specific
scenario that has to be dealt differently from the one available from
standard learning methods. These modules could either be implemented in
Python programming language or the R programming language. A trained
model in the end can also be hosted in Microsoft Azure platform to be
used as a web service [@azureMLStudio].

### Tensor Flow

**Tensor Flow** is an open source high performance framework for
numerical computation started by Google LLC. Its main advantage is in
the ease of deployment across many platforms such as desktop, CPUs,
GPUs, mobile etc.

Tensor Flow APIs are available in multiple languages, although the most
stable at the moment is python. Other language supports are C++, Java,
Go and Swift. Tensor Flow offers both high level APIs for ease of use on
simple data-sets and also low level APIs for much more granular control
in the process of building a model. The high level APIs are called
pre-made Estimators and are very simple to use. Custom Estimator or
Models can be implemented by Extending the base Estimator class. Tensor
Flow also has many inbuilt functions to help generate
visualization.Google has built a dedicated integrated circuit for
processing of the tensors (building blocks of models in tensor flow) and
is called as Tensor Processing Unit (TPU). Needless to say, tensor flow
models can also be executed on these processing units [@tensorflow].

### Scikit-Learn

**Scikit-Learn** is another open source library for data mining, data
analysis and machine learning. It is built on other open source
technologies such as Numpy, Scipy and Matplotlib.

Scikit-learn has many data pre-processing tools as it is built on
libraries that are made for scientific computation. It supports
classification problems, regression, clustering etc. An important point
to note is that this library is supported only by python [@scikitlearn].

### Torch

**Torch** is yet another open source framework for scientific computing.
Its focus is primarily on running machine learning algorithms on GPUs
easily. It uses the Lua programming language. And for the GPU processing
it uses the CUDA interface [@torch].

#### CUDA

**CUDA** is a platform developed by Nvidia for providing computing
capabilities on the Nvidia GPU. Since python as a language is well
matured and has built a large community, especially in the scientific
community, Facebook has built a framework based on torch with a strong
integration of python called Pytorch.

#### Pytorch

**Pytorch** is an open source library supported by the Facebook. Its two
main features are numerical computations and neural networks [@pytorch].

### Miscellaneous ML Tools

Apart from the mainstream tools that help directly by simplifying the
training process, there are many other interesting tools that help the
process in other areas such as integration with other applications,
visualization, etc.

#### Jupyter

Machine Learning is mostly a process of understanding data and its
manipulation. As the whole process deals with understanding data, it is
important to express how data scientist apply their skill on the
data-set. This will help people in the community or organization for
better understanding and will can eventually help in their research with
broader perspective. Jupyter excels in this aspect by allowing
developers write code and documentation together as one and also
provides the feature of demonstrating the same with the live execution
of code with documentation and visualization. Jupyter is also open
source software which is primarily built for python [@jupyter].

#### Anaconda

**Anaconda** is a cloud sharing platform and dedicated package manager
for machine learning projects built by combination of technologies such
as Python, R programming language, Jupyter. Typically, the role of
Anaconda is to eliminate the time consuming tasks of getting started for
machine learning projects [@anaconda].

Machine Learning Services {#ML_services}
-------------------------

Ever since the world realized the scope of machine learning and reached
the required computational power, several corporations have been working
for years in an attempt to become the pioneers in the field of machine
learning. Some of the major corporation with significant focus on
machine learning services are Amazon, Facebook, Google and Microsoft.
Most of these corporations have been working on machine learning
directly or indirectly on at-least one of their own products. For
instance, Facebook for face recognition, Amazon for alexa, etc. As most
of the popular machine learning services come from Amazon, Google and
Microsoft, it is fair to classify each services based on the provider.

[ML_services](images/ML_services)

The figure [ML_services](images/ML_services){reference-type="ref"
reference="ML_services") displays a broad classification of modern
machine learning services based on their providers. There are more
services available from these providers but only a few popular and
relevant services have been chosen for analysis. Each service has been
described briefly in the subsequent sections.

### Amazon ML services

#### Amazon Sage Maker

**Amazon Sage Maker** is a cloud based platform built for data
scientists to build, train and deploy machine learning solutions. A
developer can use this platform to deploy the solutions and also scale
the application to a large extent.

Amazon Sagemaker supports Jupyter notebooks which means the solution
could be built on Jupyter and loaded into Amazon S3 directly. It also
provides easy to deploy process for the trained models. It promises to
deliver both high performance and availability. Sage maker is also
optimized to use the latest libraries such as TensorFlow, MXNet and
support for CUDA to run on Nvidia GPUs [@sagemaker].

#### AWS Machine Learning

**Amazon Web Services (AWS) Machine Learning** is a web based service
from Amazon for developers which requires very little knowledge on
machine learning. It has an interactive UI beginning from loading the
data set till the deployment. Throughout the process the service asks
series of questions on the data-set and show visualization and tips to
the developer to help understand the process as well as the data-set.
Currently, AWS machine learning supports multi-class classification and
regression algorithms [@aml].

### Microsoft Machine Learning Services

#### Azure Machine Learning

Microsoft provides two main services for machine learning. The first
service is the Microsoft Machine Learning Studio which we discussed in
section [2.2.2](#MLStudio){reference-type="ref" reference="MLStudio")
considering it as a tool. The second service is the Azure Machine
Learning.

Azure Machine Learning (AML) is a combination of multiple small services
together providing a complete cloud-based solution for machine learning
data scientists. The AML comprises of smaller services like Azure ML
Workbench, Azure ML Experimentation Service, Azure ML Model Management
Service and Azure ML Packages.

#### Azure ML Workbench

**Azure ML Workbench** is a desktop or standalone application which
helps a data scientist throughout the process of model building and
deployment. The application is supported for Mac OS and the Windows OS.
It also offers command line tools for extra support.

#### Azure ML Experimentation Service

**Azure ML Experimentation Service** handles the execution process of
the training and building processes with the help of creating docker
containers. This makes cloud deployment easier.

#### Azure ML Model Management Service

**Azure ML Model Management Service** helps in deploying a trained model
for using it in an application for prediction. It offers deployment
locally, on cloud, on premise and even IOT devices [@azureML].

#### Azure ML Packages

**Azure ML Packages** provides locally installable packages which are
built by Microsoft that has simplified the machine learning process for
each specific use case. For instance, package for computer vision, text
analysis, forecasting, etc. Once the data scientist has completed
building a model, the service also facilitates in deploying the same
[@pythonPackageAzureML].

### Google ML Services

#### Cloud Auto ML

**Cloud Auto ML** provides a neat platform to data scientist with little
understanding on machine learning since the platform is powered by
technology called Neural Architecture Search which figures out the best
possible neural network model for a given data-set.

#### Cloud TPU

**Cloud TPU**, still under beta stage, could be the next best thing as
Google boasts about having 180 teraflops per second of computational
power.

#### Cloud ML Engine

**Cloud ML Engine** is a production ready service providing data
scientist to train, and deploy models for prediction.

Comparison of Machine Learning Tools
------------------------------------

After discussing various machine learning tools and services by
different providers, it is necessary to summarize all of them so that we
can have clear idea about what features are provided by which tools.
This will make it easier to further analyze and select a suitable set of
tools and ideas which will be relevant to the requirements of data
scientist and researchers. Table
[table:compare_mltools](#table:compare_mltools){reference-type="ref"
reference="table:compare_mltools") gives a complete summary of all the
machine learning tools with their respective feature support.

[table:compare_mltools]{#table:compare_mltools)

  ------------------ ------------------------------- ------------------------------- ------------------------------------- ------------------------------- -------------------------------
  Language Support   Java                            python, R                       python , R, Java, Swift, Javascript   python                          Lua, python
  Provider           University of Waikato           Microsoft                       Google                                Scikit-learn.org                Torch.ch
  Use cases          preprocess, train, experiment   preprocess, train, experiment   preprocess, train, experiment         preprocess, train, experiment   preprocess, train, experiment
  User Interface     GUI                             GUI                             Programming Interface                 Programming Interface           Programming Interface
  Platforms          Local, distributed              cloud                           local, cloud, mobile                  local, cloud                    local, cloud
  GPU                No                              No                              Yes, also TPU                         No                              Yes
  ------------------ ------------------------------- ------------------------------- ------------------------------------- ------------------------------- -------------------------------

Proposed Solution {#proposed_solution}
=================

From Chapter [current_trends](#current_trends){reference-type="ref"
reference="current_trends") it is clear that the tools that help in
building neural network models are mostly open source with the exception
of Microsoft ML Studio described in section
[2.2.2](#MLStudio){reference-type="ref" reference="MLStudio"). Most of
the machine learning services allows the use of open source solution
with their services. The services themselves are closed source and the
usage is mostly chargeable.

While the modern machine learning tools are fundamental in today's
machine learning community, the modern machine learning services
described in section [2.3](#ML_services){reference-type="ref"
reference="ML_services") provide state of the art solutions with easy to
use environments. This can help to get the model building processes even
faster than by using ML tools alone. As these services are proprietary,
it is must to provide such state of the art solutions which are open
sourced. Providing open source solution being the primary intention, we
go forward into making this achievable.

Proposed Solution {#proposed-solution}
-----------------

The proposed solution aims at providing an open source cloud-based
platform with GUI which can help not only data scientist and researches,
but also people who are interested in the field of machine learning with
little knowledge in programming to get started. The solution can be
conceived in two parts describing the whole ecosystem of the application
offering minimum functionality. The solution is open source as the
technology stack consists of open source technologies which will make it
easier for future developments.

1.  **[The Big Picture]{.smallcaps}**: This section explains the need of
    flexible and open source platform for continuous development and
    feature integration in the field of machine learning which most of
    the proprietary applications lack.

2.  **[Functional Aspects]{.smallcaps}**: This section covers the main
    development components of the application and the functionalities
    which will be provided by the application in order to start working
    with machine learning data-sets with application working flow.

### The Big Picture {#big_picture}

After inspecting section [2.2.2](#MLStudio){reference-type="ref"
reference="MLStudio") and section
[2.3](#ML_services){reference-type="ref" reference="ML_services")
closely almost all services lack something. For instance, the ML studio
does not offer automatic modelling based on the data available but
Google's Cloud Auto ML offer that feature. Google's Cloud Auto ML lacks
flexibility in terms of support for adding custom modules. With clear
speculation, the reason to this is not because of any technical
challenges rather is a side effect of business models and processes.
Since the solution is being open sourced, there is virtually no limiting
factor into packing multiple features into one.

The big picture here is an existing cloud platform where all the state
of the art services could be implemented for use under one platform.
This will provide a road-map for continuous development of future
feature additions and smooth integration without compromising on either
flexibility or ease of use.

Limiting the solution either as a standalone or just as cloud-based is
against the idea of non-compromising flexibility. Managing multiple
applications for example, one for the desktop and the other on the
cloud, is not realistic. Coincidentally, the web has spread its root
deep into many areas. This means if the development architecture is
given a little restructuring, it is possible to have one solution on the
cloud or as a standalone application, with one code base. The
possibilities with the specified approach are enormous. A few of the
possibilities can be:

-   To create multiple entry points for data such as CSV, TSV, a
    database, a blob on the cloud, etc.

-   To integrate all the features provided by each popular open sourced
    machine learning tools.

-   To support distributed processing across multiple platforms such as
    the Nvidia GPU, Google TPU etc.

-   To add flexibility at each and every layer of the neural network
    modelling process.

-   To extend the idea across many other machine learning algorithms.

### Functional Aspects {#functional_aspects}

#### Development Components {#development_components}

As the current idea is to develop an application which is cloud-based
which can be further extended to be made as a desktop application, the
project will contain the following development components:

-   **Backend** takes care of all the requests from the web and handles
    all the functionality such as pre-processing, creating a model,
    training a model, etc.

-   **Frontend** contains all the GUI components which will take care of
    user interaction.

-   **Frontend Bundler** can be used to bundle the frontend application
    for cloud or as a standalone application.

#### Application Specific Functionality {#application_specific}

The application will contain minimum functionalities which will be easy
to understand and use to help user to get started with the application.

-   Login page to maintain sessions for user.

-   A portal to upload data-set in the from of CSV file.

-   A set of data pre-processing tools.

-   A flexible option to find a suitable neural network model
    automatically or configure manually.

-   If the neural network is configured manually, appropriate form to
    configure parameters to build a neural network and start training.

-   A set of visualization for understanding the network model.

Application Flow
----------------

Before we go ahead with the prototype and implementation of the
application, it is very important to understand how the data flows
through the application which will help the users to understand the
working of the application. The application flow can be best explained
with the help of flowchart.

Flowcharts are tools for visual or graphical representation of a
programming process which represents each step in the process to reach
to the desired output. They are very important to the programmers
because a programmer will know what is to be expected at each level of
the program and it will also help to improve the design functionality.
There are many authors who explains the idea of flowcharting in
different ways.

According to Farina, the author of book Flowcharting, flowcharting is an
art which requires considerable practice and has to be developed before
a programmer starts coding. In Flowcharting Techniques, author Bohl
states that flowcharting helps to differntiate between the procedure and
the syntactical details of the written program. Bohl understands that
the flowchart is an essential tool in to solve a problem and states that
,,The person who cannot flowchart cannot anticipate a problem, analyze
the problem, plan the solution, or solve the problem,, [@Flowcharts].

With the help of above brief explanation about how important a flowchart
can be, we will now discuss the proposed flow chart for the application
in figure
[application_flow](images/application_flow){reference-type="ref"
reference="application_flow"). Each step represents individual
component along with the flow of the application.

![Source: Author,
2018](images/application_flow.png){width="\textwidth")

[application_flow](images/application_flow)

#### 1. Upload CSV

**Upload CSV** is a web portal where the user gets to upload the
data-set in the CSV format. The UI is simple to use which is a standard
browser based upload dialog. The data-set is uploaded to the server as a
multipart formdata encoding type.

#### 2. Data Pre-processing

After the upload step, the user is redirected to the data pre-processing
page. This page displays the data uploaded as CSV file in a tabular
format. Towards the right side of the page the user will find set of
data pre-processing tools such as:

-   **Add Column** - Takes a function as input to create new columns.

-   **Delete Column** - To delete unnecessary columns.

-   Transform Data - To convert categorical features into numerical.

-   **Handle Null** - To find null entries in the data-set and fill them
    appropriately.

-   **Scale Date** - To scale data column wise so as to enhance the
    training process.

#### 3. Auto Suggest Model

After the data pre-processing is complete, the user should be prompted
to choose between whether the application should start finding the
suitable model for the given data automatically. If the user chooses
yes, the user should be notified that the process has started and should
redirect the user to a visualization page where the user can monitor
real time analysis of the multiple training processes and its
comparisons. When the processes are complete the user can choose a model
based on the analysis available.

#### 4. Network Modelling

If the user chooses not to get an auto suggested model and instead
choose to configure manually, the user should be redirected to the
network modelling page. This page should take the user interactively
with smart forms to configure the network. Following are the components
of the network modelling that is supported for the minimum solution
requirement.

-   **Choose Feature Column** - To choose columns from the training
    process.

-   **Create Hidden layers** - To allow user to create multiple hidden
    layers with the flexibility to choose the number of neurons in each
    layer and the activation function for each of those.

-   **Choose Loss Function** - To allow user to choose from widely
    available standard loss functions or create a custom loss function.

-   **Initialization** - Depending on the model the user create, the
    initialization of every component will be configurable. For example,
    the learning constant, momentum constant, shuffle buffer size, etc.

-   **Choose Optimization Method** - To allow user to select standard
    gradient descent optimization methods from the dropdown.

#### 5. Visualization

As soon as the user submits the network configuration, the networks
starts training as a separate process and the user is redirected to the
visualization where the user can visualize the process in real time.

Prototype
=========

According to Technopedia, ,,A prototype is an original model, form or an
instance that serves as a basis for other processes. In software
technology, the term prototype is a working example through which a new
model or a new version of an existing product can be derived,,
[@Technopedia:Prototype].

As the platforms processes are initiated by the user through the browser
based GUI components, it makes it easier to visualize or create a
road-map to build all the functionality of the platform from the
perspective of the end user. Under section
[3.1.2](#functional_aspects){reference-type="ref"
reference="functional_aspects") the minimum features and functionality
that has to be offered is realized, but they are just description by
words and sentences. Hence, creating a prototype which takes into
account of these functionalities, will be beneficial during the
implementation process. Building prototypes help developers to get
better user experience and also to fix error immediately. Prototypes are
also useful while coding because this will help developers to have a
broader picture of the indented results. ,,A prototype is an early
sample, model, or release of a product built to test a concept or
process or to act as a thing to be replicated or learned from,,
[@BlackwellAmyHackneyandElizabethManar.2015].

There are many ways a prototype can be built. Some of the most popular
approaches are as follows:

-   Using paper and pencil one could draw the layouts required.

-   Since HTML and CSS are one of the easiest tools, it could be used to
    build a prototype by focusing only on the UI and not on the backend
    functionality.

-   Online tools which make use of the web technologies to speed up the
    process of prototyping. These tools includes all the basic and
    essential elements required for most prototyping.

From the above mentioned approaches, the third one is interesting since
its the easiest way possible to build prototypes with a realistic
design. One of the tool that is available on the internet is 'Proto.io'.

List of Prototypes
------------------

### Data Pre-processing

**Data Pre-processing** view is to visualize the data-set while
transforming it simultaneously. It contains tools for data
pre-processing such as **Add Column**, **Delete Column**, **Scale
Data**, **Handle Null** and **Transform Data**.

[data_preprocessing](images/data_preprocessing)

The figure
[data_preprocessing](images/data_preprocessing){reference-type="ref"
reference="data_preprocessing") display the complete view of the
page after the user is logged in and has navigated to the data
pre-processing page. The leftmost vertical bar is used for navigation
between different view and the top bar is used for actions such as
logout. The two components - left side bar and the top bar remain the
same through out the application and the rest is modified for different
views. With respect to data pre-processing view, the user gets to
visualize the data-set in the form of a table and on the right side of
the view, the data pre-processing tool menu can be found. Clicking on
any of these will result in opening the specific menu for further
control and customization.

[add_column](images/add_column)

From Figure
[data_preprocessing](images/data_preprocessing){reference-type="ref"
reference="data_preprocessing"), if the user clicks on *Add Column*
menu then the menu would disappear and the *Add Column* view from figure
[add_column](images/add_column){reference-type="ref"
reference="add_column") will be shown. If the user click on *Delete
Column* then the menu view transforms into the *Delete Column* view from
the figure [add_column](images/add_column){reference-type="ref"
reference="add_column"). If the user clicks on *Scale Data* or
*Handle Null* then the menu view transforms into *Scale Data* or *Handle
Null* respectively from the figure
[scale_column](images/scale_column){reference-type="ref"
reference="scale_column").

[scale_column](images/scale_column)

### Build Network

**Build Network** view allows the user to build a neural network. This
process comprises of several small configurations such as choosing
**Feature Column**, building **Hidden Layers**, choosing a **Loss
Function** and choosing an **Optimization Method**.

Figure
[feature_columns](images/feature_columns){reference-type="ref"
reference="feature_columns") is the default view when the user
navigates to data pre-processing page. This view lets the user to select
the feature columns and set other initialization. Figure
[build_layers](images/build_layers){reference-type="ref"
reference="build_layers") allows the user to create multiple hidden
layers with flexibility to choose the number of neurons and activation
function for each layer. Figure
[loss_function](images/loss_function){reference-type="ref"
reference="loss_function") lets the user select a loss function
through a simple drop-down menu. Figure
[optimizer](images/optimizer){reference-type="ref"
reference="optimizer") allows the user to select an optimization
function and also input the learning constant.

[feature_columns](images/feature_columns)

[build_layers](images/build_layers)

[loss_function](images/loss_function)

### Visualization

This view provides the user with the visualization of the training
process.

Figure [visualization](images/visualization){reference-type="ref"
reference="visualization") shows how the visualization page is
expected to look like. Ideally the graphs shown in this figure should be
generated dynamically and in real-time while the training process is
running.

Implementation
==============

Even though Chapter [3](#proposed_solution){reference-type="ref"
reference="proposed_solution") provides a promising solution, it is just
an unrealized concept. The final solution primarily depends on the
implementation details of the proposed platform from section
[3.1.2.1](#development_components){reference-type="ref"
reference="development_components") and secondarily the technology stack
used for achieving the functionalities proposed in section
[3.1.2.2](#application_specific){reference-type="ref"
reference="application_specific"). However, the proposed platform from
[3.1.2.1](#development_components){reference-type="ref"
reference="development_components") should ideally provide an easy to
adapt environment which will remain agnostic to any change in the
implementation details of section
[3.1.2.2](#application_specific){reference-type="ref"
reference="application_specific") unless the tools remain mostly to
python based implementations. This ensures that the solution remains
flexible.

Chapter [4](#prototype){reference-type="ref" reference="prototype")
provides a prototype only to the UI part of the proposed solution. It
only proves its significant assistance in simplifying the thought
process of design during the implementation process but not as prototype
to the solution itself. Since the implementation details is a major part
of the proposed solution, this chapter goes through an in depth analysis
of each aspect during the entire development process.

Technology Stack
----------------

Unlike decades ago when every use case had a specific set of tools and
standards to work with, choosing a technology stack today is no more
straight forward or as simple. The modern day development community
comes with various tools for similar tasks each of which is slightly
specific to a small section of use cases. It takes a close analysis at
the use case and weigh all the options with advantages and
disadvantages.

### Programming Languages {#programming_language}

As the proposed solution is a web-based application, there are many
frameworks based on high level languages such as Java, Python, Ruby,
JavaScript, etc. These frameworks are well matured and powerful enough
to cater all the needs of modern day web development. When it comes to
web development one programming language remains constant that is
JavaScript for the client side programming. Hence, the programming
language used in this solution is **JavaScript**.

The backend is the other half of any modern day web application. The
choice of programming language doesn't necessarily have to be
JavaScript, and could be anything from those mentioned in the previous
paragraph. But this depends on various factors such as, if there is a
good framework available, whether the language itself has good support
and community, whether there are enough tools and support for machine
learning.

#### Comparison of Programming Languages

-   **Java** is one of the most popular languages supported by Oracle
    corporation and comes with a strong set of frameworks. Although
    there are machine learning tools available, it has limited support
    as the machine learning community needs a language which is more
    readily available and Java being compiled and strictly object
    oriented enforces the machine learning community to learn the
    concepts of Java itself and that is an overhead to the community
    [@java].

-   **Python** is another high level language. Although Python was
    released before Java, it has gained popularity in the recent years
    with the language being adopted by many software giants such as
    Google. Python's easy to learn syntax, concepts and good consistency
    in support, performance and its interpreted nature has gained a lot
    of interest in the machine learning community. Some of the best
    machine learning tools are readily available for python and
    sometimes only supported for python [@python].

-   **R Programming Language** is a language built specifically for
    statistical computing and visualization. Although R has good support
    from the machine learning community, due to its specific use case it
    is not ideal to build a web application [@r].

-   **JavaScript** has recently gained popularity in backend development
    with the introduction of NodeJS. Due to its new entry into the
    backend development, the support to libraries are limited even
    though there are plenty of libraries available and developing
    faster. JavaScript with NodeJS could be a solution for lesser
    complex applications, but other languages such as Java, Python have
    better ecosystem for backend development [@javascript].

### Frameworks

In all form of state of the art development, frameworks are an essential
part. Programming languages alone are not enough as there are numerous
components that make up a modern day application. Most of which are
standardized over the year and mature frameworks have come into
existence which speed up the process of building an application. The
modern web development community offer frameworks to backend, frontend,
build automation etc.

#### Frontend Frameworks

In the recent years, the frontend development has evolved from using
Vanilla JavaScript and Jquery to using many different frameworks such as
AngualarJS, ReactJS, MeteorJS, etc. These frameworks take away the
overhead of templating from the backend and moves it to the frontend.
This allows a neat user interaction without loading the page for every
interaction and letting the backend focus on more important aspects.

#### Comparison of Frontend Frameworks

-   **AngularJS** developed by Google LLC is one of the best frontend
    frameworks available. It has very good support and fast development
    but there has been concern regarding major incompatibility in the
    subsequent versions of its own. Since it also provides a complete
    solution from two way data binding to routing and templating, it is
    fairly complex and has a big learning curve [@angular].

-   **ReactJS** developed by Facebook is a leading example in the
    frontend development community with its component based approach and
    simplicity. Since ReactJS is more like a library than a framework,
    there is a lot of room for customization and easy to learn [@react].

-   **MeteorJS** is a web framework whose features are ranging from the
    backend, frontend to databases. This framework could be of choice if
    the application can afford to use the libraries available from the
    NodeJS ecosystem and also looking for an easy integration of NoSQL
    database like MongoDB [@meteor].

#### Backend Frameworks

Since the choice of programming language for backend was decided as
python under the section
[5.1.1](#programming_language){reference-type="ref"
reference="programming_language"), the frameworks discussed in this
section are based on python with one exception of nodeJS. Some of the
most powerful web frameworks for python are Django, Flask, Tornado etc.

#### Comparison of Backend Frameworks

-   **Django** is a free open sourced web framework supported by the
    Django software foundation. It follows a model-view-template
    architecture. It has a solid architecture which reduces the
    confusion in the process of building huge web applications. Its
    Object-Relation-Mapper(ORM) is easy to use and well advanced and
    equipped to handle large scale applications [@django].

-   **Flask** is another open sourced micro web framework. Unlike
    Django, Flask does not come with a pre-decided architecture. It
    comes with a very minimal functionality and the rest is left to the
    developer to decide upon. Flask provides almost all the
    functionalities that Django provides as plugins [@flask].

-   **Tornado** is an asynchronous web framework. The main feature of
    this framework is that it handles all the web requests in a non
    blocking manner enabling the application to scale in the order of
    ten thousand connections as it is. But tornado falls short in terms
    of support from the community and the rate of development when
    compared to Django [@tornado].

-   **Celery** is an asynchronous distributed task queue. It accepts
    tasks asynchronously and provides the capability of running the
    tasks in a distributed environment and also in real-time. It also
    offers scheduling tasks. The latest versions of Celery also supports
    integration to Django out of the box. This gives Django a clear
    opportunity to cover its inability to handle asynchronous tasks by
    itself [@celery].

-   **NodeJS** provides a cross platform JavaScript runtime environment
    which enables the use of JavaScript at the server side. As already
    discussed in the section
    [5.1.1](#programming_language){reference-type="ref"
    reference="programming_language"), NodeJS is relatively new to other
    options available. It can be very helpful and easier to implement
    web socket servers in NodeJS [@nodejs].

### Databases

The current implementation of the proposed solution does not require
much interactions with the database. All the data manipulations will
currently be done directly over the data-set. No information regarding
the data-set will be saved in the database except for the reference to
the data-set itself for a particular user. Since the implementation
makes use of sessions, a few session information and user information is
also stored. Maybe in the future for providing more features such as
historical references more usage of the database might be required. Some
of the popular databases are as below.

#### Comparison of Databases

-   **SQLite** is a server-less self contained database engine. This
    reduces the overhead of installing and setting up the database
    server [@sqlite].

-   **MySQL** is a traditional open source relational database aimed at
    enterprise scale solution. This database might be of relevant to the
    project in the future.

-   **MongoDB** is a NoSQL database which follows a JSON like structure
    for storing data. In other words, MongoDB uses the key-value pairs
    approach to store data. This could also be an interesting option for
    the implementation as MongoDB can handle unstructured data
    [@mongodb].

-   **Redis** is an in memory database structure which is most popularly
    used as either a caching layer or as a message passing broker or
    queue. It supports various data structures for storing information
    [@redis].

### Build and Development Tools

The application development will happen in Linux based operating system,
**Ubuntu**. **PIP** is the python package manager which is used to
install and manage python based libraries. **NPM** is node package
manager which is used to manage libraries for node based applications in
both the frontend and the backend.

From section [3.1.1](#big_picture){reference-type="ref"
reference="big_picture") in chapter
[3](#proposed_solution){reference-type="ref"
reference="proposed_solution"), part of the solution is to make the
solution available for different platform. To achieve this for a web
application the only part of the application that can be distributed for
different platforms is the client application. A JavaScript bundler
called **Webpack** enables the client application to be complied into
many forms. As a single page application, multi page application etc.
Webpack is also required to compile ReactJS application into ECMAScript
5 compatible code.

### Conclusion

From section [5.1.1](#programming_language){reference-type="ref"
reference="programming_language"), **Python** clearly stands out from
the rest for backend programming. With its strong community from both
machine learning and web development it is certain that the
implementation process gets fairly simple. **JavaScript** remains the
choice of the client side programming indefinitely.

From section [5.1.2](#frameworks){reference-type="ref"
reference="frameworks") under subsection **Frontend Frameworks**,
**ReactJS** is the choice of frontend framework. The reason behind this
choice is the flexibility that ReactJS provides over the other two
frameworks.

From section [5.1.2](#frameworks){reference-type="ref"
reference="frameworks") under subsection **Backend Frameworks**,
**Django** is the best framework of choice due to its huge support from
the community and its simplicity in maintaining large projects. Since
Django is not asynchronous, and some tasks during the training processes
or data pre-processing are time consuming, Django alone cannot handle
it. Hence, **Celery** can be used along with Django for executing any
time consuming tasks.

From section [5.1.3](#databases){reference-type="ref"
reference="databases"), even though the default option appears to be
MySQl as it provides all the features for most database requirements and
also easily scalable, **SQLite** provides a very simple solution as the
initial implementation requires very little database interaction.

With respect to the libraries that are to be used for neural network
training and data pre-processing, section
[2.2](#ml_tools){reference-type="ref" reference="ml_tools") from chapter
[current_trends](#current_trends){reference-type="ref"
reference="current_trends") discusses all the state of the art tools
available for machine learning purposes. Some of them such as WEKA, ML
Studio from Microsoft are not suitable for integration in the project.
The other option left are TensorFlow, Pytorch, Scikit Learn etc.
Although it is possible to use all these libraries to integrate each of
their features, it is sufficient to choose just one or two for the
purposes of keeping this prototype implementation simple. Since
Tensorflow offers a wide range of tools specific to neural networks and
the ability to train in modern environments such as TPUs, GPUs in fairly
easier manner than others, this implementation will use **TensorFlow**
and **Scikit learn** for data preprocessing.

Finally some of the technologies not mentioned are **HTML**, **CSS** for
designing the client side are default.

#### List of Technologies Used

-   **Frontend**

    1.  HTML and CSS

    2.  ReactJS

-   **Backend**

    1.  Django / Python

    2.  Celery distributed task queues

    3.  Websockets / NodeJS

-   **ML libraries**

    1.  TensorFlow

    2.  Scikit-Learn

-   **Build / Development Tools**

    1.  PIP, python package manager.

    2.  NPM, node package manager.

    3.  Webpack, JavaScript bundler and build automation.

System Architecture
-------------------

[system_architecture](images/system_architecture)

Figure
[system_architecture](images/system_architecture){reference-type="ref"
reference="system_architecture") shows a three layered client-server
architecture. The first layer is the end user or the client. The middle
layer consists of the HTTP server and a Websocket server. The last layer
or the third layer consists of the database and an asynchronous
distributed task server. A closer look at the figure will reveal two
more components, one of which is a message passing queue and the other
is publish subscribe messaging system. Each layer is explained in detail
in the subsequent sections.

### First Layer - Client

The client is usually the end user. The end user could be a data
scientist or a researcher who will use the GUI of the application. The
client uses a web browser to load the client application. The client
application itself consists of several technologies such as HTML, CSS
and JavaScript code for user interaction primarily developed using the
ReactJS framework.

### Second Layer - Web Servers

The second layer consists of two web servers, one is a HTTP based web
server and the other is a Websocket server. The second layer provides
the client with a direct point of communication. All the interactions by
the user is primarily handled by this layer.

#### HTTP server

The HTTP server is built using the Django web framework and python. Its
primary task is to consume all the web requests from the client which
carry tasks such as login, receiving configuration for data
pre-processing and training neural networks, etc.

#### WebSocket Server

The Websocket server is used only for one task. As some of the tasks are
being process intensive and time consuming such as the training process,
using Django application server would result in a bad user experience as
Django is synchronous. Hence, these tasks are handled by another
framework. Meanwhile, the client can connect to the websocket server to
receive continuous updates on the time consuming tasks.

### Third Layer - Database and Distributed Tasks

This layer is where the data is stored and also some of the time
consuming tasks are executed. This layer consists of SQLite database and
Celery distributed task manager. When the HTTP server receives a task
which could be time consuming, Django creates a task in the Rabbit
Message Queue and Celery picks up the task as soon as it is available
for taking tasks. While the task is being processed Celery outputs the
results periodically to the database and also publishes them to a
channel in the Redis Database.

### Data Flow in the System

Using the figure
[system_architecture](images/system_architecture){reference-type="ref"
reference="system_architecture") the flow of the process in this
architecture is explained with an example action of an end user clicking
on the start training button on the client side. This particular example
is chosen as this process involves the entire system and hence the flow
could be explained in its entirely.

1.  **Train Network** - The end user configures all the parameters for
    training a neural network and initiates the training process by
    clicking on the start training button.

2.  **Database interaction** - Once the request is received, Django
    verifies the request with the session information stored in the
    database.

3.  **Create Task** - As soon as the session is verified, Django creates
    a task_id which is used to keep track of the task that is about to
    be created.

4.  **Executing Task** - After the tasks has been assigned to Celery by
    Django, Django also returns the task_id to the client.

5.  **Request Task Status** - Once the client receives the task_id from
    the Django HTTP server the client makes a websocket connection to
    the websocket server. Once the connection is established the client
    sends the task_id asking for updates on the task.

6.  **Task Results** - While client makes the connection with the
    websocket server, Celery would have started the training process and
    at every iteration of the training process, it outputs the results
    into the database and also publishes it to the redis channel named
    with the task_id.

7.  **Receiving Results** - As and when celery outputs the results to
    the redis channel, the websocket server picks up the messages and
    passes it to the client. The client can then use this data to build
    visualization.

Frontend Development and Build Process
--------------------------------------

[build_architecture](images/build_architecture)

Due to the use of ReactJS for the client side application and also to
provide the feature of bundling the client side application in different
forms as described in section [3.1.1](#big_picture){reference-type="ref"
reference="big_picture"), this implementation uses a build automation
framework called Webpack. Figure
[build_architecture](images/build_architecture){reference-type="ref"
reference="build_architecture") depicts an in depth view of the
development and build process. Since Django's architecture follows
dividing application into smaller application based on the
functionality, it only makes more sense to keep source files of the
respective frontend code to their backend applications.

In figure
[build_architecture](images/build_architecture){reference-type="ref"
reference="build_architecture") one can notice two react
directories. One of the react directory stays in the same level as
Django applications and the other react directory in inside every Django
application. The outer react directory consists of different Webpack
configuration on how to bundle the frontend code for different
environment.

During the development process of the frontend application, the
developer can change the frontend source files inside each of Django
directory which will automatically be compiled and output to the static
directory of the respective Django application.

Project Setup Guide
-------------------

The project setup guide explains a set of instructions on how to setup
the project locally. This is important as the application deals with
multiple technologies and it may be tedious if the setup is not
explained correctly. For the purpose of explaining the setup process
some assumptions has to be made. The assumptions are as follows:

-   The operating system used is Ubuntu and preferably the version
    16.04.

-   The source code is available or downloaded from github using this
    link <https://github.com/manjunath-satyamurthy/Neural-Networks-GUI>

-   Tools such as PIP, NPM, NodeJS are pre-installed. If not please find
    the instruction on the internet forums.

-   A valid internet connection.

### Project Structure {#project_structure}

Before jump starting into the setup process it is also essential to get
an understanding of project structure as it can seem complex.

for tree= font=, grow'=0, child anchor=west, parent anchor=south,
anchor=west, calign=first, inner xsep=7pt, edge path= (!u.south west)
+(7.5pt,0) \|- (.child anchor) pic folder ; , file/.style=edge path=
(!u.south west) +(7.5pt,0) \|- (.child anchor) ;, inner xsep=2pt,font= ,
before typesetting nodes= if n=1 insert before=,phantom , fit=band,
before computing xy=l=14pt, [thesis [app]{style="color: orange"),)
[app]{style="color: orange"), label=right:[...Django and Celery
Configuration Directory]{style="color: green")
[celery.py]{style="color: purple"),file
[settings.py]{style="color: purple"),file
[urls.py]{style="color: purple"),file
[wsgi.py]{style="color: purple"),file 
[main]{style="color: orange"), label=right:[...Django Main
App]{style="color: green") [react]{style="color: orange")
[css]{style="color: orange"), label=right:[...Frontend development
files reside here]{style="color: green")
[main.css]{style="color: red"),file  [js]{style="color: orange")
[base.js]{style="color: blue"),file
[components]{style="color: orange")
[actions.js]{style="color: blue"),file   
[static]{style="color: orange"), label=right:[...Frontend compiled
files reside here]{style="color: green") [main]{style="color: orange")
[scripts]{style="color: orange")
[base.bundle.js]{style="color: blue"),file 
[styles]{style="color: orange")
[main.css]{style="color: red"),file   
[templates]{style="color: orange"), label=right:[...Skeleton HTML
files for each page]{style="color: green")
[base.html]{style="color: red"),file 
[migrations]{style="color: orange"), label=right: [...Database
migration scripts]{style="color: green")
[0001_initial.py]{style="color: purple"),file 
[admin.py]{style="color: purple"),file
[apps.py]{style="color: purple"),file
[models.py]{style="color: purple"),file
[tasks.py]{style="color: purple"),file
[tests.py]{style="color: purple"),file
[urls.py]{style="color: purple"),file
[views.py]{style="color: purple"),file 
[react]{style="color: orange"),label=right:[...Webpack configuration
files with start and build scripts]{style="color: green")
[config]{style="color: orange")
[webpack.config.js]{style="color: blue"),file 
[polyfills.js]{style="color: blue"),file
[scripts]{style="color: orange")
[build.js]{style="color: blue"),file
[start.js]{style="color: blue"),file 
[tests]{style="color: orange") 
[socket_app]{style="color: orange"), label=right:[...Socket server
app]{style="color: green") [node_modules]{style="color: orange"),)
[package.json]{style="color: red"),file
[package-lock.json]{style="color: red"),file
[server.js]{style="color: blue"),file 
[media]{style="color: orange") [csv]{style="color: orange") 
[node_modules]{style="color: orange"), label=right:[...Frontend and
reactJS dependency library]{style="color: green")
[package.json]{style="color: red"),file
[package-lock.json]{style="color: red"),file
[requirements.txt]{style="color: red"),file
[manage.py]{style="color: purple"),file, label=right:[...Django
management script]{style="color: green")
[db.sqlite3]{style="color: red"),file, label=right:[...SQLite database
file]{style="color: green") [static]{style="color: orange") 
[env]{style="color: orange"), label=right:[...python library
directory]{style="color: green") ]{.smallcaps}

### Setup Guide

As project involves multiple components the setup process requires to
setup every component and it is easier to understand if the setup
processes are divided accordingly. Hence, the setup guide can be further
divided into **Django/Python** setup, **Celery workers** setup,
**Websocket Server** setup, **Frontend Development** setup.

#### Django / Python Setup

Part of Django setup process also suffices the requirements to the
celery worker setup process.

**Step 1:** Open the terminal and change directory into the project root
directory mentioned in section
[5.4.1](#project_structure){reference-type="ref"
reference="project_structure").

``` {.bash language="bash")
    $ cd ~/Neural-Networks-GUI/app/
```

**Step 2:** Create a virtual environment for the python based
applications. Creating a virtual environment ensures that all the
packages required for the project reside at one place and does not
disturb the system packages.

``` {.bash language="bash")
    $ pip install virtualenv
    $ virtualenv ../env
```

**Step 3:** Activate the virtual environment. This means setting the
linux shell to use the virtual environment as source for python binaries
and libraries.

``` {.bash language="bash")
    $ . ../env/bin/activate
```

**Step 4:** Install python based dependencies of the project. All the
dependencies are stored in the **requirements.txt**. This step has to be
done only after enabling the virtual environment.

``` {.bash language="bash")
    (env)$ pip install -r requirements.txt
```

**Step 5:** Database Migration is required to create all the necessary
database tables.

``` {.bash language="bash")
    (env)$ python manage.py migrate
```

**Step 6:** Start Server. After the migrations are complete, start the
Django web server by the command

``` {.bash language="bash")
    (env)$ python manage.py runserver
```

#### Celery Workers Setup

Before starting the celery workers, RabbitMQ message queue has to be
installed and configured.\
**Step 1:** Install RabbitMQ server.

``` {.bash language="bash")
    $ sudo apt-get install rabbitmq-server
```

**Step 2:** Configure the RabbitMQ server as mentioned below.

``` {.bash language="bash")
    $ sudo rabbitmqctl add_user thesis shrink
    $ sudo rabbitmqctl add_vhost thesishost
    $ sudo rabbitmqctl set_user_tags thesis thesistag
    $ sudo rabbitmqctl set_permissions -p thesishost 
    thesis "\.*" "\.*" "\.*"
```

**Step 3:** Activate Virtual Environment. Follow Step 3 from the Django
setup guide to activate the environment.

Start the Celery worker process.

``` {.bash language="bash")
    (env)$ celery -A app.celery_app worker -l info
```

#### Websocket Server Setup

Before starting the socket server, make sure to install Redis server.

**Step 1:** Install Redis server. Open terminal in the home folder.

``` {.bash language="bash")
    $ wget http://download.redis.io/releases/redis-4.0.10.tar.gz
    $ tar xzf redis-4.0.10.tar.gz
    $ cd redis-4.0.10
    $ make
    $ src/redis-server
```

**Step 2:** Install the NodeJS dependencies. Open a new terminal and
change directory to the project root.

``` {.bash language="bash")
    $ cd socket_app
    $ npm install
```

**Step 3:** Start socket server.

``` {.bash language="bash")
    $ npm start
```

#### Frontend Development Setup

**Step 1:** To install the frontend dependencies, open the terminal and
change directory to project root.

``` {.bash language="bash")
    $ npm install
```

**Step 2:** Start the webpack server to listen to changes in the source
files.

``` {.bash language="bash")
    $ npm start
```

Application Screenshots
-----------------------

[ss_login](images/ss_login)

[ss_upload_csv](images/ss_upload_csv)

[ss_data_preprocessing](images/ss_data_preprocessing)

[ss_add_delete_transform_column](images/ss_add_delete_transform_column)

[ss_handle_null_scale_data](images/ss_handle_null_scale_data)

[ss_feature_columns](images/ss_feature_columns)

[ss_build_layers](images/ss_build_layers)

[ss_loss_function](images/ss_loss_function)

[ss_optimizer](images/ss_optimizer)

[ss_visualization](images/ss_visualization)

Evaluation
==========

The thesis suggests an open sourced platform and not a replacement to
any of the existing tools to empower the machine learning community with
state of the art solutions. Since most of the features are only
discussed but yet to be implemented in the future, it will not be fair
to compare the current implementation with the existing tools and
services in its entirety. Although its possible to compare some of the
basic functionalities, the current implementation supports and also
compares the big picture discussed in section
[3.1.1](#big_picture){reference-type="ref" reference="big_picture") with
the existing state of the art machine learning tools and services.

Evaluation By Comparison
------------------------

In order to compare the minimal functionality the current implementation
offers, the evaluation method chosen is quantitative as the solution is
aiming at reducing the effort of a data scientist trying to train a
neural network model. Some of the existing tools chosen to be compared
with the current implementation are **Weka**, **Microsoft ML Studio**,
**TensorFlow**.

A data set is required for the purpose of evaluation . One of the simple
and most recognized data-set suitable for the evaluation appears to be
the iris data-set from the UCI Machine Learning Repository originally
published in the Fisher's paper. The data-set contains three classes
which represent each type of an iris plant
[@doi:10.1111/j.1469-1809.1936.tb02137.x].

### Weka

Assuming that the Weka application is installed with all its
dependencies such as the Java Runtime Environment, the steps involving
the training process is as follows.

**Step 1:** Load the weka application\
**Step 2:** Choose one of the application, for instance the Explorer
GUI.\
**Step 3:** Load the data-set with the help of the open file dialog.\
**Step 4:** Click on the classify section and select the Multiperceptron
function for training and also choose the class column.\
**Step 5:** Click on the start button to start the training process.

[weka_training_results](images/weka_training_results)

#### Results

The time taken from the start till the model being trained is
approximately **5 minutes**. From the figure
[weka_training_results](images/weka_training_results){reference-type="ref"
reference="weka_training_results"), the time taken just for training
the network is **0.13 seconds**.

With Weka, the total time taken to train the data-set is very less. But
the efficiency is limited to the performance of the computer being used.
Since the iris data-set is ready for training, there was no lag in the
training process. With a data-set that requires pre-processing, it could
have taken more time considering that Weka lacks good data
pre-processing tools by default.

### TensorFlow

Training the iris data-set with TensorFlow directly involves
programming. This could easily take nearly **30 - 40 minutes**.
Depending on the type of data-set (if pre-processed or not) and the size
of data-set it could take significantly longer.

### Microsoft's ML Studio

[ML_studio_training](images/ML_studio_training)

Since Microsoft's ML studio is using the drag and drop approach to build
a training model, it requires some learning time. The overall time taken
to train the model is approximately **30 minutes**. From figure
[ML_studio_results](images/ML_studio_results){reference-type="ref"
reference="ML_studio_results") the training process itself took
nearly **30 seconds**.

[ML_studio_results](images/ML_studio_results)

### Current Implementation

The overall time taken using the current implementation from uploading
the data-set to the visualization of the training process is
approximately **2 minutes**. The time taken for the training process
itself is nearly **5 seconds**. When compared to using TensorFlow
directly or using Microsoft's ML Studio, the current implementation
certainly has better performance in terms of the overall time taken to
reach the results.

While the Weka is just as simple to the current implementation and takes
even lesser time for the training process, the current implementation
has an advantage in the availability of multiple pre-processing tools
and the possibility of support for GPU and TPU in the future.

Future Scope and Conclusion
===========================

Future Scope
------------

Section [3.1.1](#big_picture){reference-type="ref"
reference="big_picture") describes the proposed solution as a big
picture. The solution is a platform that has the potential to be under
continuous development, adapting to the changing needs and adding new
features. The current implementation with the choice of technologies
used, can be imagined as a road-map to achieve many features that will
enable the solution as one stop shop for all machine learning needs.

### Cloud Deployment

The current implementation is run locally on a local web server. To make
it available for a vast number of users, it is required to be available
on the cloud. Some of the leading cloud based service providers such as
Amazon, Google and Microsoft provide machine learning specific cloud
based deployment solutions.

It is possible to host the Django backend on a less powered cloud
infrastructure, meanwhile the training process part of the application
can take advantage of the cloud based GPU units provided by many leading
providers mentioned.

### Extending ML Functions

The current implementation uses Scikit-Learn for data pre-processing
purposes and TensorFlow for the training process. Although only a
fraction of the tool's functions are integrated to application, it is
possible to make many more integration from multiple libraries. To do
this, the frontend design may have to be redesigned to accommodate the
use of numerous functions.

### Multiple Dataset Entry Points

Currently, the implemented application takes the input data-sets in just
one format which is CSV. It is possible to let the users load their
data-sets in multiple forms and through multiple entry points such as,

-   **Local:** To allow user to upload data-sets in multiple formats
    such as CSV, TSV, which is available locally on the user\"s
    computer.

-   **Databases :** To allow users to use the data available in
    databases either locally or on cloud by using the connection
    information.

-   **Cloud :** There are many cloud based services which provide
    storage solutions such as the Amazon S3, Google drive, Dropbox etc.
    It is possible to let the users access data from any of these cloud
    based storage systems.

### Support for GPU Locally

The primary toolkit used in the current implementation for training
process is TensorFlow. TensorFlow has very good support for training
using the GPU locally.

### Auto Suggest Model

One of the fundamental functionality the solution promised to offer is
to auto suggest a model based on the data-set. This has been moved to
future work. But the platform makes it easy to integrate the feature as
it only requires to randomly initialize the parameters and train on a
distributed environment and parallel processing. This can be achieved by
taking advantage of a combination of parallel processing features
offered by TensorFlow and the distributed nature of Celery task queue.

Conclusion
----------

It is certain that world is collecting data faster than ever and across
all fields. There is a generation of new products and solution emerging
out of the application of machine learning on these datasets. After a
detailed study of the existing solutions and trends in the machine
learning community, it is understood that a wide variety of solutions
exist in the market today. Starting from a simple open sourced library
to cloud based services promising to cater for all machine learning
needs.

Realizing that most state of the art solutions such as the Microsoft's
Machine Learning Studio and the Google's Cloud AutoML are mostly
available only for commercial purposes, it is necessary to provide such
solutions on the open source community. If the solution is adopted by
the community, it has the potential to perform similar to the existing
solutions or probably even better in terms of features and flexibility.

With respect to performance, there are some which are better in
performance. But the key focus of this thesis is to equip the machine
learning community with a platform that is a one stop solution for many
use cases, if not all. Since it is open sourced, it has the potential to
incorporate almost any feature that is required. The implementation also
proves that it is achievable and provides the platform to build and
develop continuously.

List of Abbreviations {#list-of-abbreviations .unnumbered}
=====================
