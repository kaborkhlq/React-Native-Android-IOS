from django.conf import settings
from django.db import models
class Animal(models.Model):
    'Generated Model'
    name = models.CharField(null=True,blank=True,max_length=256,)
    age = models.IntegerField(null=True,blank=True,)
class Acma(models.Model):
    'Generated Model'
    asd = models.BigIntegerField()
class NewMo(models.Model):
    'Generated Model'
    aaa = models.BigIntegerField()
