from django.db import models

class Texts(models.Model):
  text = models.TextField()
  channel = models.ForeignKey('Channel', on_delete=models.CASCADE)
  last_modified = models.DateTimeField(auto_now=True)
  created_on=models.DateTimeField(auto_now_add=True)

class Videos(models.Model):
  video = models.FilePathField(path="static/videos")
  channel = models.ForeignKey('Channel', on_delete=models.CASCADE)
  created_on=models.DateTimeField(auto_now_add=True)
  
class Images(models.Model):
  image = models.FilePathField(path='static/img')
  channel = models.ForeignKey('Channel', on_delete=models.CASCADE)
  created_on=models.DateTimeField(auto_now_add=True)
  