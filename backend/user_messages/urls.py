from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TextViewSet

router = DefaultRouter()
router.register(r'texts', TextViewSet)

urlpatterns = [
    path('', include(router.urls)),
]