from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from restaurant.models.location import Location


class LocationChildSerializer(ModelSerializer):
    class Meta:
        model = Location
        fields = (
            'id', 'name'
        )


class LocationSerializer(ModelSerializer):
    parent = serializers.SerializerMethodField()
    child = serializers.SerializerMethodField()

    class Meta:
        model = Location
        fields = (
            'id', 'name', 'parent', 'child'
        )

    def get_parent(self, obj):
        if obj.parent:
            return obj.parent.name
        else:
            return ''

    def get_child(self, obj):
        return LocationChildSerializer(Location.objects.filter(parent=obj), many=True).data
