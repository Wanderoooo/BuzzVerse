from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServerViewSet, ChannelViewSet

router = DefaultRouter()
router.register(r'servers', ServerViewSet)
router.register(r'channels', ChannelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]