from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServerViewSet, ChannelViewSet, ChannelsInServerView

router = DefaultRouter()
router.register(r'servers', ServerViewSet)
router.register(r'channels', ChannelViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('servers/<int:server_id>/channels/', ChannelsInServerView.as_view(), name='channels-in-server'),
    path('servers/<int:server_id>/channels/<int:channel_id>/', ChannelsInServerView.as_view(), name='specific-channel-in-server'),
    path('', include('users.urls'))
]
