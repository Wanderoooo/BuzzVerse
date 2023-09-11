from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TextViewSet
from .views import TextsInChannelView

router = DefaultRouter()
router.register(r'texts', TextViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('servers/<int:server_id>/channels/<int:channel_id>/texts', TextsInChannelView.as_view(), name='channel-texts')
]