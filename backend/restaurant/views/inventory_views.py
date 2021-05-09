from rest_framework.viewsets import ModelViewSet
from restaurant.models.inventory import Inventory, Menus, Category
from restaurant.serializers.inventory_serializer import *


class InventoryViewSet(ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

    def perform_create(self, serializer):
        serializer.save(outlet_id=self.request.user.id)

    def get_queryset(self):
        inventory = Inventory.objects.filter(outlet__restaurant=self.request.user.restaurant)
        return inventory


class MenuViewSet(ModelViewSet):
    queryset = Menus.objects.all()
    serializer_class = MenuSerializer


class CateogryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ModifierViewSet(ModelViewSet):
    queryset = Modifier.objects.all()
    serializer_class = ModifierSerializer
