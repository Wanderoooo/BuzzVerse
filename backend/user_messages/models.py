from django.db import models

# class Message -> 3 subclasses
# http://127.0.0.1:8000/servers_channels/servers/1/channels/1/messages/1
# postgreSQL

class Content(models.Model):
    text_content = models.TextField(null=True, blank=True)
    video_content = models.FileField(upload_to='videos/', null=True, blank=True)
    image_content = models.ImageField(upload_to='images/', null=True, blank=True)

    class Meta:
        abstract = True

class Message(Content):
    channel = models.ForeignKey('servers_channels.Channel', on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

class Text(Message):
    @property
    def content(self):
        return self.text_content

class Video(Message):
    @property
    def content(self):
        return self.video_content

class Image(Message):
    @property
    def content(self):
        return self.image_content
