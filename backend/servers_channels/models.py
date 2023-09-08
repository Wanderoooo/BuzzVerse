from django.db import models

class Server(models.Model):
  name = models.CharField(max_length=25)
  # members = models.ManyToManyField('User', related_name='servers')
  description = models.TextField()
  # logo = models.FilePathField(path='/img')
  
class Channel(models.Model):
  name = models.CharField(max_length=25)
  server = models.ForeignKey('Server', on_delete=models.CASCADE)
  
  
