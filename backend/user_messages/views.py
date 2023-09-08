from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from .models import Text
from servers_channels.models import Channel
from .serializers import TextSerializer
from rest_framework.response import Response
from rest_framework import status

class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    
    def get(self, request):
        texts = Text.objects.all()
        serializer = TextSerializer(texts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TextsInChannelView(APIView):
    
    def get(self, request, channel_id):
        try:
            channel = Channel.objects.get(id=channel_id)
            texts = Text.objects.filter(channel_id=channel_id)
            serializer = TextSerializer(texts, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Channel.DoesNotExist:
            return Response({"error": "Channel not found"}, status=status.HTTP_404_NOT_FOUND)
          
      