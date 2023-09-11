from django.shortcuts import render
from rest_framework import viewsets
from .models import Server, Channel
from .serializers import ServerSerializer, ChannelSerializer
from rest_framework import status
from .models import Channel, Server
from rest_framework.views import APIView
from rest_framework.response import Response

class ServerViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer
    
    def get(self, request):
        servers = Server.objects.all()
        serializer = ServerSerializer(servers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ServerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ChannelViewSet(viewsets.ModelViewSet):
  queryset = Channel.objects.all()
  serializer_class = ChannelSerializer
    
  def get(self, request):
        channels = Channel.objects.all()
        serializer = ChannelSerializer(channels, many=True)
        return Response(serializer.data)

  def post(self, request):
        serializer = ChannelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ChannelsInServerView(APIView):

    def get(self, request, server_id, channel_id=None):
        try:
            server = Server.objects.get(id=server_id)
        except Server.DoesNotExist:
            return Response({"error": "Server not found"}, status=status.HTTP_404_NOT_FOUND)
        
        if channel_id is not None:
            try:
                channel = Channel.objects.get(server=server, channel_id=channel_id)
                serializer = ChannelSerializer(channel)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Channel.DoesNotExist:
                return Response({"error": "Channel not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            channels = Channel.objects.filter(server=server)
            serializer = ChannelSerializer(channels, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


