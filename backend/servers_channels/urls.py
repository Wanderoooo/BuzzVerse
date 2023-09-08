from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServerViewSet, ChannelViewSet, ChannelsInServerView

router = DefaultRouter()
router.register(r'servers', ServerViewSet)
router.register(r'channels', ChannelViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('channels/inserver/<int:server_id>/', ChannelsInServerView.as_view(), name='server-channels'),
]