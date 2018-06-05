# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser



class RootUser(AbstractUser):
	csvfile = models.FileField(null=True, blank=True, upload_to="csv")

	def update_csvfile(self, csvfile):
		self.csvfile = csvfile
		self.save()