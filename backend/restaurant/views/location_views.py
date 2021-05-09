from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from restaurant.models.location import Location
from restaurant.serializers.location_serializer import LocationSerializer


class LocationViewSet(ModelViewSet):
    queryset = Location.objects.filter(parent=None)
    serializer_class = LocationSerializer
