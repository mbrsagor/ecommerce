import random
import string

from django_filters import rest_framework as filters
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.db.models import Q
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
)
from rest_framework.decorators import action
from rest_framework import viewsets, mixins, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

from base.pagination import DefaultPagination
from base.utils import OrderStatus
from accounts.models import UserProfile, User
from restaurant.models.restaurants import Restaurant
from restaurant.models.location import Location
from restaurant.models.outlets import Outlet
from restaurant.models.inventory import Inventory
from restaurant.models.order_items import (
    Address,
    Coupon,
    Order,
    OrderItem,
    Payment,
)
from restaurant.serializers.inventory_serializer import InventorySerializer
from restaurant.serializers.order_item_serializer import (
    AddressSerializer,
    OrderSerializer,
    PaymentSerializer,
)


def create_ref_code():
    return "".join(random.choices(string.ascii_lowercase + string.digits, k=20))


class UserIDView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({"userID": request.user.id}, status=HTTP_200_OK)


class InventoryListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()


class InventoryDetailView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()


class OrderItemDeleteView(DestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = OrderItem.objects.all()


class RemoveFromCartView(APIView):
    def post(self, request, *args, **kwargs):
        itemID = request.data.get("itemID", None)
        if itemID is None:
            return Response({"message": "Invalid data"}, status=HTTP_400_BAD_REQUEST)
        item = get_object_or_404(Inventory, id=itemID)
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
            # check if the order item is in the order
            if order.items.filter(item__slug=item.slug).exists():
                order_item = OrderItem.objects.filter(
                    item=item, user=request.user, ordered=False
                )[0]
                if order_item.quantity > 1:
                    order_item.quantity -= 1
                    order_item.save()
                else:
                    order.items.remove(order_item)
                return Response(status=HTTP_200_OK)
            else:
                # add a message saying that order does not contain the item
                return Response(
                    {"message": "This item was not in your cart."},
                    status=HTTP_400_BAD_REQUEST,
                )
        else:
            # add a message saying the user doesn't have an order
            return Response(
                {"message": "You do not have an active order."},
                status=HTTP_400_BAD_REQUEST,
            )


class AddToCartView(APIView):
    def post(self, request, *args, **kwargs):
        outletID = request.data.get("outletID", None)
        itemID = request.data.get("itemID", None)
        subdomain = request.data.get("subdomain", None)
        locationID = request.data.get("locationID", None)
        if (
            subdomain is None
            or outletID is None
            or itemID is None
            or locationID is None
        ):
            return Response({"message": "Invalid request"}, status=HTTP_400_BAD_REQUEST)
        item = get_object_or_404(Inventory, id=itemID)
        outlet = get_object_or_404(Outlet, id=outletID)
        restaurant = get_object_or_404(Restaurant, sub_domain=subdomain)
        location = get_object_or_404(Location, id=locationID)

        order_item_qs = OrderItem.objects.filter(
            item=item, user=request.user, ordered=False
        )

        if order_item_qs.exists():
            order_item = order_item_qs.first()
            order_item.quantity += 1
            order_item.save()
        else:
            order_item = OrderItem.objects.create(
                item=item, user=request.user, ordered=False
            )

        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
            # check if the order item is in the order
            if not order.items.filter(item__id=order_item.id).exists():
                order.items.add(order_item)
            return Response(status=HTTP_200_OK)
        else:
            ordered_date = timezone.now()
            order = Order.objects.create(
                restaurant=restaurant,
                outlet=outlet,
                user=request.user,
                location=location,
                ordered_date=ordered_date,
            )
            order.items.add(order_item)
            return Response(status=HTTP_200_OK)


class OrderDetailView(RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            return order
        except ObjectDoesNotExist:
            raise Http404("You do not have an active order")
            # return Response({"message": "You do not have an active order"}, status=HTTP_400_BAD_REQUEST)


class PaymentView(APIView):
    def post(self, request, *args, **kwargs):
        order = Order.objects.get(user=self.request.user, ordered=False)
        userprofile = UserProfile.objects.get(user=self.request.user)
        token = request.data.get("amarPayToken")
        billing_address_id = request.data.get("selectedBillingAddress")
        shipping_address_id = request.data.get("selectedShippingAddress")

        billing_address = Address.objects.get(id=billing_address_id)
        shipping_address = Address.objects.get(id=shipping_address_id)

        # if userprofile.amar_pay_customer_id != '' and userprofile.amar_pay_customer_id is not None:
        #     customer = stripe.Customer.retrieve(
        #         userprofile.stripe_customer_id)
        #     customer.sources.create(source=token)
        #
        # else:
        #     customer = stripe.Customer.create(
        #         email=self.request.user.email,
        #     )
        #     customer.sources.create(source=token)
        #     userprofile.stripe_customer_id = customer['id']
        #     userprofile.one_click_purchasing = True
        #     userprofile.save()
        #
        # amount = int(order.get_total() * 100)

        # try:
        #     # we cannot charge the token more than once
        #     charge = stripe.Charge.create(
        #         amount=amount,  # cents
        #         currency="usd",
        #         customer=userprofile.stripe_customer_id
        #     )

        # # charge once off on the token
        # charge = stripe.Charge.create(
        #     amount=amount,  # cents
        #     currency="usd",
        #     source=token
        # )

        # create the payment
        #     payment = Payment()
        #     payment.stripe_charge_id = charge['id']
        #     payment.user = self.request.user
        #     payment.amount = order.get_total()
        #     payment.save()
        #
        #     # assign the payment to the order
        #
        #     order_items = order.items.all()
        #     order_items.update(ordered=True)
        #     for item in order_items:
        #         item.save()
        #
        #     order.ordered = True
        #     order.payment = payment
        #     order.billing_address = billing_address
        #     order.shipping_address = shipping_address
        #     # order.ref_code = create_ref_code()
        #     order.save()
        #
        #     return Response(status=HTTP_200_OK)
        #
        # except stripe.error.CardError as e:
        #     body = e.json_body
        #     err = body.get('error', {})
        #     return Response({"message": f"{err.get('message')}"}, status=HTTP_400_BAD_REQUEST)
        #
        # except stripe.error.RateLimitError as e:
        #     # Too many requests made to the API too quickly
        #     return Response({"message": "Rate limit error"}, status=HTTP_400_BAD_REQUEST)
        #
        # except stripe.error.InvalidRequestError as e:
        #     # Invalid parameters were supplied to Stripe's API
        #     return Response({"message": "Invalid parameters"}, status=HTTP_400_BAD_REQUEST)
        #
        # except stripe.error.AuthenticationError as e:
        #     # Authentication with Stripe's API failed
        #     # (maybe you changed API keys recently)
        #     return Response({"message": "Not authenticated"}, status=HTTP_400_BAD_REQUEST)
        #
        # except stripe.error.APIConnectionError as e:
        #     # Network communication with Stripe failed
        #     return Response({"message": "Network error"}, status=HTTP_400_BAD_REQUEST)
        #
        # except stripe.error.StripeError as e:
        #     # Display a very generic error to the user, and maybe send
        #     # yourself an email
        #     return Response({"message": "Something went wrong. You were not charged. Please try again."},
        #                     status=HTTP_400_BAD_REQUEST)
        #
        # except Exception as e:
        #     # send an email to ourselves
        #     return Response({"message": "A serious error occurred. We have been notifed."}, status=HTTP_400_BAD_REQUEST)
        #
        # return Response({"message": "Invalid data received"}, status=HTTP_400_BAD_REQUEST)


class AddCouponView(APIView):
    def post(self, request, *args, **kwargs):
        code = request.data.get("code", None)
        if code is None:
            return Response(
                {"message": "Invalid data received"}, status=HTTP_400_BAD_REQUEST
            )
        order = Order.objects.get(user=self.request.user, ordered=False)
        coupon = get_object_or_404(Coupon, code=code)
        order.coupon = coupon
        order.save()
        return Response(status=HTTP_200_OK)


class AddressListView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = AddressSerializer

    def get_queryset(self):
        address_type = self.request.query_params.get("address_type", None)
        qs = Address.objects.all()
        if address_type is None:
            return qs
        return qs.filter(user=self.request.user, address_type=address_type)


class AddressCreateView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = AddressSerializer
    queryset = Address.objects.all()


class AddressUpdateView(UpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = AddressSerializer
    queryset = Address.objects.all()


class AddressDeleteView(DestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Address.objects.all()


class PaymentListView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PaymentSerializer

    def get_queryset(self):
        return Payment.objects.filter(user=self.request.user)


class RestaurantOrder(ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [
        AllowAny,
    ]

    def get_queryset(self):
        user = User.objects.get(id=self.request.user.id)
        restaurant = Restaurant.objects.get(owner=user)
        restaurant_order = restaurant.order.all()
        # print(len(restaurant_order))
        return restaurant_order


# class LiveOrderAPIView(APIView):
#     def get(self, request, id):
#         queryset = Order.objects.filter(status=id)
#         serializer = LiveOrderSerializer(queryset, many=True)
#         return Response(serializer.data)


class CustomerAPIView(APIView):
    def get(self, request, user):
        queryset = Order.objects.get(user=user)
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data)


# class PauseOrderListView(ListAPIView):
#     permission_classes = (AllowAny,)
#     serializer_class = PauseOrderSerializer
#     queryset = PauseOrder.objects.all()


class OrderFilter(filters.FilterSet):
    order_status = filters.CharFilter(method="filter_order_status")

    def filter_order_status(self, queryset, name, value):
        if value is None:
            return queryset
        try:
            if OrderStatus.ORDER_PLACED == value:
                return queryset.exclude(
                    Q(order_status=OrderStatus.ORDER_CREATED) | Q(order_status=OrderStatus.ORDER_CANCELLED)
                )
            return queryset.filter(order_status=value)
        except Exception:
            return queryset.none()

    class Meta:
        model = Order
        fields = ["order_status"]


class OrderViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer
    queryset = Order.objects.filter()
    filterset_class = OrderFilter
    filter_backends = [filters.DjangoFilterBackend]
    pagination_class = DefaultPagination

    def get_queryset(self):
        return Order.objects.filter(restaurant=self.request.user.restaurant).exclude(
            order_status=OrderStatus.ORDER_CANCELLED
        )

    @action(detail=False, methods=["get"], permission_classes=[IsAuthenticated])
    def meta(self, *args, **kwargs):
        queryset = Order.objects.filter(restaurant=self.request.user.restaurant)
        data = [
            {
                "status": status,
                "label": label,
                "total": queryset.filter(order_status=status).count(),
            }
            for status, label in OrderStatus.choices
        ]
        return Response(status=status.HTTP_200_OK, data=data)
