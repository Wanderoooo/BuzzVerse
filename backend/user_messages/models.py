from django.db import models

# class Message -> 3 subclasses (composite pattern)
# http://127.0.0.1:8000/servers_channels/servers/1/channels/1/messages/1


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
  