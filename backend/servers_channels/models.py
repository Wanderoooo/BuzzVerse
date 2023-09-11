from django.db import models

class Server(models.Model):
    name = models.CharField(max_length=25)
    description = models.TextField()

class Channel(models.Model):
    name = models.CharField(max_length=25)
    server = models.ForeignKey('Server', on_delete=models.CASCADE)
    channel_id = models.IntegerField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.channel_id:
            # Find the maximum channel_id in the current server and add 1 to it
            max_channel_id = Channel.objects.filter(server=self.server).aggregate(models.Max('channel_id'))['channel_id__max']
            if max_channel_id is None:
                max_channel_id = 0
            self.channel_id = max_channel_id + 1
        
        super().save(*args, **kwargs)

  
  
