from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TextViewSet
from .views import TextsInChannelView

router = DefaultRouter()
router.register(r'texts', TextViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('texts/inchannel/<int:channel_id>/', TextsInChannelView.as_view(), name='channel-texts')
]