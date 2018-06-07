import os, json, tempfile
from django.shortcuts import HttpResponse, render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core.files.base import ContentFile
from django.conf import settings
from models import RootUser

from sklearn import preprocessing
import numpy as np

from tasks import train_network


@csrf_exempt
def base(request):
	if request.method == 'GET':
		return render(request, 'sidebar.html')


def logout_view(request):
	if request.method == 'GET':
		logout(request)
	return redirect("/login")


@csrf_exempt
def login_view(request):
	if request.method == 'GET':
		if request.user.is_authenticated():
			return redirect("/upload_csv/")
		return render(request, 'login.html')
	if request.method == 'POST':
		user = authenticate(username=request.POST['username'], password=request.POST['password'])
		if user:
			login(request, user)
			return redirect("/upload_csv/")
		return HttpResponse(status=401)


@csrf_exempt
@login_required
def upload_csv(request):
	if request.method == 'GET':
		return render(request, 'upload_csv.html')
	if request.method == 'POST':
		csv_file = request.FILES['csv_file']
		try:
			request.user.update_csvfile(csv_file)
		except Exception as e:
			print str(e)
			return JsonResponse({"message": 'Unsuccessful'})
		return redirect("/data_pre_process/")


@csrf_exempt
@login_required
def get_csv_data(request):
	if request.method == 'GET':
		csv_file = request.user.csvfile
		return JsonResponse({'data': csv_file.read().strip().split("\n")[:100]})


@csrf_exempt
@login_required
def data_pre_process(request):
	if request.method == 'GET':
		return render(request, 'data_pre_process.html')


@csrf_exempt
@login_required
def add_column(request):
	if request.method == 'POST':
		post_data = json.loads(request.POST['data'])
		method = post_data['python_method']
		argumentss = post_data['arguments']
		column_name = post_data['column_name']

		try:
			with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as tp:
				csv = request.user.csvfile.read().strip().split("\n")
				header = csv[0].strip().split(",")

				
				for i, line in enumerate(csv):
					function_call = '\nvalue = add_column('+ "%s,"*len(argumentss)+')'

					if i == 0:
						tp.write(line+','+column_name+'\n')
					elif line != '':
						line_list = line.split(",")
						params = []
						for key, arg in argumentss.items():
							value = line_list[header.index(arg)]
							if value:
								params.append(value)
							else:
								params.append("'NA'")


						function_call = function_call % tuple(params)
						exec_method = method + function_call

						exec(exec_method)
						tp.write(line+','+str(value)+'\n')

				tp.flush()
				tp.seek(0)
				request.user.csvfile.delete()
				request.user.csvfile.save('csvfile.csv', ContentFile(tp.read()))

		except Exception as e:
			return JsonResponse({"status": "failed", "message": str(e)})

		return JsonResponse({"status": 'success'})


@csrf_exempt
@login_required
def delete_columns(request):
	if request.method == 'POST':
		post_data = json.loads(request.POST['data'])		
		columns_to_delete = post_data['cols_to_delete']

		try:
			with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as tp:
				csv = request.user.csvfile.read().strip().split("\n")
				header = csv[0].strip().split(",")
				print header
				cols_indices = []
				
				for col in columns_to_delete:
					cols_indices.append(header.index(col))

				cols_indices.sort(reverse=True)
				
				for i, line in enumerate(csv):
					line_list = line.split(",")
					for ci in cols_indices:
						del line_list[ci]
				
					tp.write(','.join(line_list)+'\n')

				tp.flush()
				tp.seek(0)
				request.user.csvfile.delete()
				request.user.csvfile.save('csvfile.csv', ContentFile(tp.read()))

		except Exception as e:
			print str(e)
			return JsonResponse({"status": "failed", "message": str(e)})

		return JsonResponse({"status": 'success'})


@csrf_exempt
@login_required
def get_cols_by_string(request, search_term="default"):
	if request.method == 'GET':
		search_term = '' if search_term == "empty" else search_term

		csv = request.user.csvfile.read().strip().split("\n")
		null_columns = []
		header = csv[0].strip().split(",")
		for line in csv:
			line_list = line.split(",")
			if search_term in line_list:
				null_col_indices = [i for i, x in enumerate(line_list) if x == search_term]

				for i in null_col_indices:
					if header[i] not in null_columns:
						null_columns.append(header[i])

		return JsonResponse({"data": null_columns})
 


@csrf_exempt
@login_required
def transform_columns(request):
	if request.method == 'POST':
		post_data = json.loads(request.POST['data'])		
		columns_to_transform = post_data['cols_to_delete']

		try:
			enc = preprocessing.LabelEncoder()
			with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as tp:
				csv = request.user.csvfile.read().strip().split("\n")
				header = csv[0].strip().split(",")

				tp.write(','.join(header)+'\n')

				cols_indices = []
				csv.pop(0)
				for col in columns_to_transform:
					cols_indices.append(header.index(col))

				lines_list = []
				for line in csv:
					lines_list.append(line.split(","))

				transform_column_values = []
				for i in cols_indices:
					temp = []
					for line in lines_list:
						temp.append(line[i])
					transform_column_values.append(temp)

				transformed_column_values = []

				for t_c_value in transform_column_values:
					enc.fit(t_c_value)
					transformed_column_values.append(list(enc.transform(t_c_value)))

				for i, line in enumerate(lines_list):
					for j, k in enumerate(cols_indices):
						line[k] = str(transformed_column_values[j][i])

					tp.write(','.join(line)+'\n')

				tp.flush()
				tp.seek(0)
				request.user.csvfile.delete()
				request.user.csvfile.save('csvfile.csv', ContentFile(tp.read()))

		except Exception as e:
			print str(e)
			return JsonResponse({"status": "failed", "message": str(e)})

		return JsonResponse({"status": 'success'})



@csrf_exempt
@login_required
def fill_null_columns(request):
	if request.method == 'POST':
		post_data = json.loads(request.POST['data'])		
		columns_to_fill = post_data['cols_to_fill']
		strategy = post_data["strategy"]

		try:
			enc = preprocessing.LabelEncoder()
			with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as tp:
				csv = request.user.csvfile.read().strip().split("\n")
				header = csv[0].split(",")

				tp.write(','.join(header)+'\n')

				cols_indices = []
				csv.pop(0)

				search_terms = []
				for search_term, cols in columns_to_fill.items():
					for col in cols:
						cols_indices.append(header.index(col))
					if search_term == "empty":
						search_term = ""
					search_terms.append(search_term)

				lines_list = []
				null_list = []
				for line in csv:
					line_list = line.split(",")
					lines_list.append(line_list)
					
					null_list_temp = []
					for ci in cols_indices:
						if line_list[ci] in search_terms:
							null_list_temp.append(np.nan)
						else:
							null_list_temp.append(line_list[ci])
					null_list.append(null_list_temp)

				enc = preprocessing.Imputer(missing_values='NaN', strategy=strategy)
				imputed_list = list(enc.fit_transform(null_list))


				for i, value in enumerate(imputed_list):
					for j, c_value in enumerate(value):
						lines_list[i][cols_indices[j]] = str(c_value)


				for i, line in enumerate(lines_list):
					tp.write(','.join(line)+'\n')

				tp.flush()
				tp.seek(0)
				request.user.csvfile.delete()
				request.user.csvfile.save('csvfile.csv', ContentFile(tp.read()))

		except Exception as e:
			print e
			return JsonResponse({"status": "failed", "message": str(e)})

		return JsonResponse({"status": 'success'})


@csrf_exempt
@login_required
def scale_columns(request):
	if request.method == 'POST':
		post_data = json.loads(request.POST['data'])		
		columns_to_scale = post_data['cols_to_scale']
		scale_function = post_data['scale_function']
		min_max_range = post_data["min_max_range"]
		if not min_max_range:
			min_max_range = [0, 1]
		else:
			min_max_range = [int(min_max_range[0]), int(min_max_range[1])]

		print min_max_range, scale_function, columns_to_scale

		try:
			with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as tp:
				csv = request.user.csvfile.read().strip().split("\n")
				header = csv[0].split(",")

				tp.write(','.join(header)+'\n')

				cols_indices = []
				csv.pop(0)

				for col in columns_to_scale:
					cols_indices.append(header.index(col))

				lines_list = []
				scale_list = []
				for line in csv:
					line_list = line.split(",")
					lines_list.append(line_list)
					
					scale_list_temp = []
					for ci in cols_indices:
						scale_list_temp.append(line_list[ci])

					scale_list.append(scale_list_temp)

				scaled_list = None
				if scale_function == 'standard':
					scalar = preprocessing.StandardScaler()
					scaled_list = list(scalar.fit_transform(scale_list))
				elif scale_function == 'minmax':
					scalar = preprocessing.MinMaxScaler(feature_range=tuple(min_max_range))
					scaled_list = list(scalar.fit_transform(scale_list))


				for i, value in enumerate(scaled_list):
					for j, c_value in enumerate(value):
						lines_list[i][cols_indices[j]] = str(c_value)


				for i, line in enumerate(lines_list):
					tp.write(','.join(line)+'\n')

				tp.flush()
				tp.seek(0)
				request.user.csvfile.delete()
				request.user.csvfile.save('csvfile.csv', ContentFile(tp.read()))

		except Exception as e:
			print e
			return JsonResponse({"status": "failed", "message": str(e)})

		return JsonResponse({"status": 'success'})


@csrf_exempt
@login_required
def visualization(request):
	if request.method == 'GET':
		return redirect("/login")


@csrf_exempt
@login_required
def build_model(request):
	if request.method == 'GET':
		return render(request, 'build_model.html')


@csrf_exempt
@login_required
def train_model(request):
	if request.method == 'POST':
		post_data = json.loads(request.POST['data'])	
		error_messsage = None

 		try:
 			if post_data["shouldShuffle"]:
 				float(post_data["bufferSize"])
 			float(post_data["batchSize"])
 			float(post_data["epochs"])
 			float(post_data["learningRate"])
 			for k , v in post_data["hiddenLayersValues"].items():
 				float(v["neuronsCount"])
 		except Exception, e:
 			print str(e)
 			error_messsage = "plese check all the input values to be numbers only"

 		if not error_messsage:
 			csv_path = request.user.csvfile.url.split("/")
 			csv_path.pop(0)
 			file_path = os.path.join(settings.BASE_DIR, "/".join(csv_path))
 			train_network.delay(file_path, **post_data)
 			# return JsonResponse({"status": 'success'})
 		else:
 			# return JsonResponse({"status": 'failed', "message": error_messsage})
 			pass