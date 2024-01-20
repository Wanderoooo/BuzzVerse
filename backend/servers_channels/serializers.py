from rest_framework import serializers
from .models import Server, Channel

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ['name', 'description', 'id']
        
class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = ['name', 'server', 'channel_id']

        
        