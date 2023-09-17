from django.urls import path
from .views import UserCreateView, UserLoginView, UserProfileView

urlpatterns = [
    path('signup/', UserCreateView.as_view(), name='user-signup'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
]
