from django.utils import timezone
from accounts.models import User
from base.models.base import BaseEntity
from base.utils import AddressType, OrderStatus
from django.db import models
from django.db.models.signals import post_save
from restaurant.models.inventory import Inventory
from restaurant.models.restaurants import Restaurant
from restaurant.models.outlets import Outlet
from restaurant.models.location import Location


class OrderItem(BaseEntity):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="order_item")
    item = models.ForeignKey(
        Inventory, on_delete=models.CASCADE, related_name="order_item"
    )
    quantity = models.IntegerField(default=1)
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.quantity} of {self.item.title}"

    def get_total_item_price(self):
        return self.quantity * self.item.price

    def get_total_discount_item_price(self):
        return self.quantity * self.item.discount_price

    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_total_discount_item_price()

    def get_final_price(self):
        if self.item.discount_price:
            return self.get_total_discount_item_price()
        return self.get_total_item_price()


class Order(models.Model):
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, related_name="order"
    )
    outlet = models.ForeignKey(
        Outlet, on_delete=models.CASCADE, related_name="order_outlet"
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="order", null=True, blank=True
    )
    location = models.ForeignKey(
        Location, on_delete=models.CASCADE, related_name="order"
    )
    ref_code = models.CharField(max_length=20, null=True, blank=True)
    items = models.ManyToManyField(OrderItem, related_name="order")
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    billing_address = models.ForeignKey(
        "Address",
        related_name="billing_address",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    shipping_address = models.ForeignKey(
        "Address",
        related_name="shipping_address",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    payment = models.ForeignKey(
        "Payment", on_delete=models.SET_NULL, blank=True, null=True
    )
    coupon = models.ForeignKey(
        "Coupon", on_delete=models.SET_NULL, blank=True, null=True
    )
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    order_date = models.DateField(auto_now_add=True)
    order_time = models.TimeField(auto_now_add=True)
    order_status = models.CharField(
        max_length=31,
        choices=OrderStatus.choices,
        default=OrderStatus.ORDER_CREATED,
    )

    def __str__(self):
        return str(self.user)

    def get_total(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_final_price()
        if self.coupon:
            total -= self.coupon.amount
        return total


# class LiveOrder(models.Model):
#     order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, related_name='live_order')
#     order_status = models.CharField(max_length=31, choices=LiveOrderStatus.choices, default=LiveOrderStatus.ORDER_PLACED)
#     def __str__(self):
#         return self.order.user.username
# def create_live_order(sender, **kwargs):
#     if kwargs['created']:
#         LiveOrder.objects.create(order=kwargs['instance'])
# post_save.connect(create_live_order, sender=Order)


# class PauseOrder(models.Model):
#     order = models.OneToOneField(
#         Order, on_delete=models.CASCADE, null=True, related_name="pause_order"
#     )
#     delivery = models.BooleanField(default=False)
#     def __str__(self):
#         return self.order.user.username
# def create_pause_order(sender, **kwargs):
#     if kwargs["created"]:
#         PauseOrder.objects.create(order=kwargs["instance"])
# post_save.connect(create_pause_order, sender=Order)


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=100)
    apartment_address = models.CharField(max_length=100)
    zip = models.CharField(max_length=100)
    address_type = models.CharField(max_length=50, choices=AddressType.choices)
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = "Addresses"


class Payment(models.Model):
    amar_pay_charge_id = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    amount = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class Coupon(models.Model):
    code = models.CharField(max_length=15)
    amount = models.FloatField()

    def __str__(self):
        return self.code
