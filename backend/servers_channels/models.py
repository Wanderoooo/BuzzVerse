from django.db import models

class Servers(models.Model):
  name = models.CharField(max_length=25)
  members = models.ManyToManyField('User', related_name='servers')
  description = models.TextField()
  logo = models.FilePathField(path='/img')
  
class Channels(models.Model):
  name = models.CharField(max_length=25)
  server = models.ForeignKey('Servers', on_delete=models.CASCADE)
  
  
