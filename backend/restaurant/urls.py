from base.views.branding_views import BrandingViewSet
from django.urls import path
from rest_framework.routers import DefaultRouter

from restaurant.views.inventory_views import *
from restaurant.views.location_views import LocationViewSet
from restaurant.views.order_item_views import *
from restaurant.views.outlet_views import *
from restaurant.views.restaurant_views import *

router = DefaultRouter()
router.register("my-restaurant", RestaurantViewSet)
router.register("restaurant-user", RestaurantUserViewSet)
router.register("inventory", InventoryViewSet)
router.register("outlet", OutletViewSet)
router.register("order-delivery", OrderDeliveryViewSet)
router.register("order-pickup", OrderPickUpViewSet)
router.register("day", DayViewSet)
router.register("location", LocationViewSet)
router.register("menus", MenuViewSet)
router.register("category", CateogryViewSet)
router.register("modifier", ModifierViewSet)
router.register("branding", BrandingViewSet)
router.register("order", OrderViewSet)

urlpatterns = [
    path("user-id/", UserIDView.as_view(), name="user-id"),
    path("items/", InventoryListView.as_view(), name="item-list"),
    path("items/<pk>/", InventoryDetailView.as_view(), name="item-detail"),
    path(
        "order-item/<pk>/delete/",
        OrderItemDeleteView.as_view(),
        name="order-item-delete",
    ),
    path("order-item/update/", RemoveFromCartView.as_view(), name="order-item-update"),
    path("add-to-cart/", AddToCartView.as_view(), name="add-to-cart"),
    path("order-summary/", OrderDetailView.as_view(), name="order-summary"),
    path("checkout/", PaymentView.as_view(), name="checkout"),
    path("add-coupon/", AddCouponView.as_view(), name="add-coupon"),
    path("addresses/", AddressListView.as_view(), name="address-list"),
    path("addresses/create/", AddressCreateView.as_view(), name="address-create"),
    path("addresses/<pk>/update/", AddressUpdateView.as_view(), name="address-update"),
    path("addresses/<pk>/delete/", AddressDeleteView.as_view(), name="address-delete"),
    path("payments/", PaymentListView.as_view(), name="payment-list"),
    path("restaurant-order/", RestaurantOrder.as_view(), name="restaurant_order"),
    path(
        "order-outlet-graph/",
        OrderOutletGraphAPIView.as_view(),
        name="order_outlet_graph",
    ),
    # path("live-order/<int:id>/", LiveOrderAPIView.as_view(), name="live_order"),
    path(
        "restaurant-users/<subdomain>/",
        RestaurantUsers.as_view(),
        name="restaurant_users",
    ),
    path(
        "restaurant-discount/<subdomain>/",
        RestaurantInventoryDiscount.as_view(),
        name="restaurant_discount",
    ),
    path("add-user-restaurant/<subdomain>/", AddUserToRestaurant.as_view(), name="add_user_restaurant"),
    # path("pause-order/", PauseOrderListView.as_view(), name="pause_order_list"),
] + router.urls
