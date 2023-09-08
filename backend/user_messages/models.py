from django.db import models

class Text(models.Model):
  text = models.TextField()
  channel = models.ForeignKey('servers_channels.Channel', on_delete=models.CASCADE)
  created_on=models.DateTimeField(auto_now_add=True)

# class Videos(models.Model):
#   video = models.FilePathField(path="static/videos")
#   channel = models.ForeignKey('Channel', on_delete=models.CASCADE)
#   created_on=models.DateTimeField(auto_now_add=True)
  
# class Images(models.Model):
#   image = models.FilePathField(path='static/img')
#   channel = models.ForeignKey('Channel', on_delete=models.CASCADE)
#   created_on=models.DateTimeField(auto_now_add=True)
  