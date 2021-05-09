from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django.utils.text import slugify

from restaurant.models.order_items import Order
from restaurant.models.restaurants import Restaurant, RestaurantUser
from restaurant.models.inventory import Inventory
from restaurant.serializers.restaurant_serializer import (
    RestaurantOrderListSerializer,
    RestaurantSerializer,
    RestaurantUserSerializer,
    RestaurantUserCreateSerializer,
)

import random
import string


class RestaurantViewSet(ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        restaurant = serializer.save(owner=self.request.user)
        name = serializer.validated_data["name"]
        subdomain = slugify(name)
        if Restaurant.objects.filter(sub_domain=subdomain).exists():
            subdomain = (
                subdomain
                + "-"
                + "".join(random.choices(string.ascii_lowercase + string.digits, k=4))
            )
            restaurant.sub_domain = subdomain
            restaurant.save()
        else:
            restaurant.sub_domain = subdomain
            restaurant.save()

    def perform_update(self, serializer):
        restaurant = serializer.save(owner=self.request.user)
        sub_domain = serializer.validated_data["sub_domain"]
        subdomain = slugify(sub_domain)
        if len(Restaurant.objects.filter(sub_domain=subdomain)) > 1:
            subdomain = (
                subdomain
                + "-"
                + "".join(random.choices(string.ascii_lowercase + string.digits, k=4))
            )
            restaurant.sub_domain = subdomain
            restaurant.save()
        else:
            restaurant.sub_domain = subdomain
            restaurant.save()


class RestaurantUserViewSet(ModelViewSet):
    queryset = RestaurantUser.objects.all()
    serializer_class = RestaurantUserCreateSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RestaurantOrderList(ListAPIView):
    serializer_class = RestaurantOrderListSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)


class RestaurantUsers(APIView):
    def get(self, *args, **kwargs):
        subdomain = self.kwargs["subdomain"]
        restaurant = Restaurant.objects.get(sub_domain=subdomain)
        users = RestaurantUser.objects.filter(restaurant=restaurant)
        response = RestaurantUserSerializer(users, many=True).data
        return Response(response, status=status.HTTP_202_ACCEPTED)


class AddUserToRestaurant(APIView):
    def get(self, *args, **kwargs):
        subdomain = self.kwargs["subdomain"]
        restaurant = Restaurant.objects.get(sub_domain=subdomain)
        user = self.request.user
        RestaurantUser.objects.create(user=user, restaurant=restaurant)
        return Response(
            {"message": "Successfully added user"}, status=status.HTTP_202_ACCEPTED
        )


class RestaurantInventoryDiscount(APIView):
    def post(self, request, *args, **kwargs):
        subdomain = self.kwargs["subdomain"]
        discount = request.data.get("discount", None)
        if subdomain is None:
            return Response(
                {"message": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST
            )
        restaurant = Restaurant.objects.get(sub_domain=subdomain)
        items = Inventory.objects.filter(outlet__restaurant=restaurant)
        for item in items:
            item.discount_price = discount
            item.save()
        return Response(
            {"message": "Successfully added discount"}, status=status.HTTP_202_ACCEPTED
        )

    def get(self, request, *args, **kwargs):
        subdomain = self.kwargs["subdomain"]
        if subdomain is None:
            return Response(
                {"message": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST
            )
        restaurant = Restaurant.objects.get(sub_domain=subdomain)
        item = Inventory.objects.filter(outlet__restaurant=restaurant).first()
        data = {}
        if item:
            data["discount"] = item.discount_price
        return Response(
            data=data,
            status=status.HTTP_202_ACCEPTED,
        )
