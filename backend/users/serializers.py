from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile
from servers_channels.serializers import ServerSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    servers = ServerSerializer(many=True, read_only=True)
    
    class Meta:
        model = UserProfile
        fields = '__all__'
