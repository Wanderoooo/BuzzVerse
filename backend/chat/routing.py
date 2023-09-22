# chat/routing.py

# ensures the chat app routes everything to the correct consumers


from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    # the use of ws to distinguish is a good practice, although we can change it to match the style
    re_path(r"ws/chat/(?P<room_name>\w+)/$", consumers.ChatConsumer.as_asgi()),
]