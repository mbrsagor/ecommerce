from rest_framework import serializers
from restaurant.models.inventory import Inventory, Menus, Category, Modifier


class InventorySerializer(serializers.ModelSerializer):
    parent = serializers.SerializerMethodField()

    class Meta:
        model = Inventory
        fields = [
            'id', 'title', 'parent', 'is_active', 'price', 'discount_price', 'description', 'feature', 'outlet',
            'avatar', 'created_at'
        ]
        read_only_fields = ['outlet']

    def get_parent(self, instance):
        if instance.parent:
            return instance.parent.title
        else:
            return None


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menus
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    menus = MenuSerializer()
    items = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = (
            'id', 'name', 'menus', 'items'
        )

    def get_items(self, instance):
        return InventorySerializer(instance.items.all(), many=True).data


class ModifierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modifier
        fields = (
            'id', 'outlet', 'name', 'display_name', 'min', 'max', 'modifier_type', 'items', 'created_at'
        )
        depth = 1
