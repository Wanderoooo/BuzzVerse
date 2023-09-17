from django.contrib.auth.models import User
from servers_channels.models import Server
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    servers = models.ManyToManyField(Server, related_name='user_profiles')

    def __str__(self):
        return self.user.username
