from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.ProfileAPIView.as_view())
]
