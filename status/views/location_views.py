from rest_framework import viewsets, permissions

from status.models import Location
from status.serializers.location_serializer import LocationSerializer


class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [permissions.IsAdminUser, ]
