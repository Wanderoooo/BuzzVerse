from django.shortcuts import render
from rest_framework import viewsets
from .models import Server, Channel
from .serializers import ServerSerializer, ChannelSerializer
from rest_framework import status
from .models import Channel, Server
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.decorators import api_view, permission_classes
from users.models import UserProfile
from django.core.exceptions import PermissionDenied

class ServerViewSet(viewsets.ModelViewSet):
    serializer_class = ServerSerializer
    queryset = Server.objects.all()
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            user_profile = UserProfile.objects.get(user=self.request.user)
            return Server.objects.filter(user_profiles=user_profile)
        else:
            return Server.objects.all()  # Return an empty queryset if user is not authenticated

    def list(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            queryset = self.get_queryset()
            serializer = ServerSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            queryset = self.get_queryset()
            serializer = ServerSerializer(queryset, many=True)
            return Response(serializer.data)
        # Response({"error": "User not authenticated"}, status=status.HTTP_403_FORBIDDEN)
    
def create(self, request, *args, **kwargs):
    if request.user.is_authenticated:
        user_profile = UserProfile.objects.get(user=request.user)
        serializer = ServerSerializer(data=request.data)
        if serializer.is_valid():
            server = serializer.save()
            server.user_profiles.add(user_profile)  # Automatically add the user's profile
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({"error": "User not authenticated"}, status=status.HTTP_403_FORBIDDEN)



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


