from django.urls import path
from rest_framework.routers import DefaultRouter
from .slider import SliderViewSet

router = DefaultRouter()

router.register('slider', SliderViewSet)
