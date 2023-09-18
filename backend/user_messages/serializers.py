from rest_framework import serializers
from .models import Text, Message, Image, Video

class MessageSerializer(serializers.ModelSerializer):
    content = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ['id', 'channel', 'created_on', 'content']

    def get_content(self, obj):
        if isinstance(obj, Text):
            return obj.text_content
        elif isinstance(obj, Video):
            return obj.video_content
        elif isinstance(obj, Image):
            return obj.image_content
        else:
            return None

class TextSerializer(MessageSerializer):
    class Meta:
        model = Text
        fields = '__all__'
        
class VideoSerializer(MessageSerializer):
    class Meta:
        model = Video
        fields = '__all__'
        
class ImageSerializer(MessageSerializer):
    class Meta:
        model = Image
        fields = '__all__'