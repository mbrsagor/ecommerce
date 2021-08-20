from django.contrib.auth.models import User
from rest_framework import serializers

from status.models import Location


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = (
            'id', 'area_name', 'is_active', 'created', 'updated'
        )
