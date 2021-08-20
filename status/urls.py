from django.urls import path

from rest_framework import routers
from status.views.location_views import LocationViewSet

router = routers.SimpleRouter()
router.register('location', LocationViewSet)

urlpatterns = [

]
