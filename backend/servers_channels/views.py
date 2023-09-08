from django.shortcuts import render
from rest_framework import viewsets
from .models import Server, Channel
from .serializers import ServerSerializer, ChannelSerializer

class ServerViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer

class ChannelViewSet(viewsets.ModelViewSet):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer