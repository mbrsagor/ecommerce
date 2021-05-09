from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from restaurant.models.restaurants import Restaurant
from accounts.models import User
from restaurant.models.outlets import Day, OrderDelivery, OrderPickUp, Outlet
from restaurant.serializers.outlet_serializer import (DaySerializer,
                                                      OrderDeliverySerializer,
                                                      OrderPickUpSerializer,
                                                      OutletSerializer,
                                                      OrderOutletGraphSerializer)


class OutletViewSet(ModelViewSet):
    queryset = Outlet.objects.all()
    serializer_class = OutletSerializer

    def perform_create(self, serializer):
        serializer.save(restaurant_id=self.request.user.restaurant.id)

    def get_queryset(self):
        if not self.request.user.is_superuser:
            outlet_instance = Outlet.objects.filter(restaurant_id=self.request.user.restaurant.id)
        else:
            outlet_instance = Outlet.objects.all()
        return outlet_instance


class OrderDeliveryViewSet(ModelViewSet):
    queryset = OrderDelivery.objects.all()
    serializer_class = OrderDeliverySerializer

    def perform_create(self, serializer):
        serializer.save(outlet_id=self.request.user.id)

    def get_queryset(self):
        if not self.request.user.is_superuser:
            order_delivery = OrderDelivery.objects.filter(outlet=self.request.user.id)
        else:
            order_delivery = OrderDelivery.objects.all()
        return order_delivery


class OrderPickUpViewSet(ModelViewSet):
    queryset = OrderPickUp.objects.all()
    serializer_class = OrderPickUpSerializer

    def get_queryset(self):
        if not self.request.user.is_superuser:
            order_pickup = OrderPickUp.objects.filter(outlet=self.request.user.id)
        else:
            order_pickup = OrderPickUp.objects.all()
        return order_pickup


class DayViewSet(ModelViewSet):
    queryset = Day.objects.all()
    serializer_class = DaySerializer


class OrderOutletGraphAPIView(APIView):
    def get(self, request):
        user = User.objects.get(id=self.request.user.id)
        restaurant = Restaurant.objects.get(owner=user)
        outlet = restaurant.restaurant_outlet.all()
        serializer = OrderOutletGraphSerializer(outlet, many=True)
        return Response(serializer.data)
