from accounts.serializers import UserSerializer
from rest_framework import serializers
from restaurant.models.order_items import Order
from restaurant.models.restaurants import Restaurant, RestaurantUser


class RestaurantUserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    is_owner = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()
    phone_number = serializers.SerializerMethodField()
    total_order = serializers.SerializerMethodField()
    total_revenue = serializers.SerializerMethodField()

    class Meta:
        model = RestaurantUser
        fields = (
            'id', 'name', 'is_owner', 'email', 'phone_number', 'total_order', 'total_revenue'
        )

    def get_name(self, obj):
        return obj.user.first_name + " " + obj.user.last_name

    def get_is_owner(self, obj):
        return obj.user.is_owner

    def get_email(self, obj):
        return obj.user.email

    def get_phone_number(self, obj):
        return obj.user.phone_number

    def get_total_order(self, obj):
        total_order = len(obj.user.order.all())
        return total_order

    def get_total_revenue(self, obj):
        total_revenue = 0
        for order in obj.user.order.all():
            total_revenue += order.get_total
        return total_revenue


class RestaurantUserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = RestaurantUser
        fields = (
            'id', 'user', 'restaurant'
        )


class RestaurantSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=False)

    class Meta:
        model = Restaurant
        fields = (
            'id', 'name', 'owner', 'sub_domain', 'avatar'
        )
        read_only_fields = ['owner']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['owner'] = UserSerializer(instance.owner).data
        return response


class RestaurantOrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['customer', 'order']
