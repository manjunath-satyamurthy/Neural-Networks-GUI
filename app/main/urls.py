from django.conf.urls import url

from main import views

urlpatterns = [
	url(r'^login/$', views.login_view, name='login'),
	url(r'^logout/$', views.logout_view, name='logout'),
	url(r'^upload_csv/$', views.upload_csv, name='upload_csv'),
	url(r'^get_csv_data/$', views.get_csv_data, name='get_csv_data'),
	url(r'^data_pre_process/$', views.data_pre_process, name='data_pre_process'),
	url(r'^add_column/$', views.add_column, name='add_column'),
	url(r'^delete_columns/$', views.delete_columns, name='delete_columns'),
	url(r'^transform_columns/$', views.transform_columns, name='transform_columns'),
	url(r'^scale_columns/$', views.scale_columns, name='scale_columns'),
	url(r'^fill_null_columns/$', views.fill_null_columns, name='fil_null_columns'),

	url(r'^get_empty_cols_by_string/(?P<search_term>[a-z A-Z 0-9]+)/$', 
		views.get_cols_by_string, name="get_cols_by_string"),
	url(r'^build_network/$', views.build_model, name='build_model'),
	url(r'^train_network/$', views.train_model, name='train_model'),
	url(r'^visualization/$', views.visualization, name='visualization'),
]