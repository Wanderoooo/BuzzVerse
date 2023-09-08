from rest_framework import serializers
from .models import Server, Channel

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ['name', 'description']
        
class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = ['name', 'server']
        
        