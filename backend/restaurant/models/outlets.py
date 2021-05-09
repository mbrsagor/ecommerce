import datetime

from base.models.base import BaseEntity
from base.utils import PaymentMethod
from django.db import models
from django.db.models.signals import post_save

from .restaurants import Restaurant


class Outlet(models.Model):
    name = models.CharField(max_length=120)
    address = models.CharField(max_length=300, blank=True, null=True)
    area = models.CharField(max_length=120, blank=True, null=True)
    phone = models.IntegerField()
    is_open = models.BooleanField(default=False)
    email = models.EmailField()
    tax_rate = models.FloatField(default=0.00)
    is_publish = models.BooleanField(default=False)
    is_shared = models.BooleanField(default=False)
    same_day = models.BooleanField(default=False)
    next_day = models.BooleanField(default=False)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='restaurant_outlet')
    avatar = models.ImageField(upload_to='outlet_avatar', blank=True, null=True)

    def __str__(self):
        return self.name


class OrderDelivery(BaseEntity):
    outlet = models.OneToOneField(Outlet, on_delete=models.CASCADE, null=True, related_name='order_delivery')
    is_open = models.BooleanField(default=False)
    payment_method = models.CharField(max_length=20, choices=PaymentMethod.choices, default=PaymentMethod.CASH)
    preparation = models.IntegerField(default=0)
    preparation_delivery = models.IntegerField(default=0)
    delivery_free = models.IntegerField(default=0)
    min_order_value = models.IntegerField(default=0)
    area_file = models.FileField(upload_to='delivery_area', null=True, blank=True)

    def __str__(self):
        return self.outlet.name


def create_order_delivery(sender, **kwargs):
    if kwargs['created']:
        OrderDelivery.objects.create(outlet=kwargs['instance'])


post_save.connect(create_order_delivery, sender=Outlet)


class OrderPickUp(BaseEntity):
    outlet = models.OneToOneField(Outlet, on_delete=models.CASCADE, related_name='order_pickup')
    is_open = models.BooleanField(default=False)
    payment_method = models.CharField(max_length=20, choices=PaymentMethod.choices, default=PaymentMethod.CASH)
    preparation = models.IntegerField(default=0)

    def __str__(self):
        return self.outlet.name


def create_order_pickup(sender, **kwargs):
    if kwargs['created']:
        OrderPickUp.objects.create(outlet=kwargs['instance'])


post_save.connect(create_order_pickup, sender=Outlet)


class Day(BaseEntity):
    name = models.CharField(max_length=100)
    is_open = models.BooleanField(default=True)
    start_time = models.TimeField(default=datetime.time(11, 00))
    end_time = models.TimeField(default=datetime.time(23, 00))
    order_delivery = models.ForeignKey(OrderDelivery, on_delete=models.CASCADE, related_name='opening_hours', null=True,
                                       blank=True)
    order_pickup = models.ForeignKey(OrderPickUp, on_delete=models.CASCADE, related_name='order_pickups', null=True,
                                     blank=True)

    def __str__(self):
        return self.name


days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']


def create_days_for_order_delivery(sender, **kwargs):
    if kwargs['created']:
        for day in days:
            Day.objects.create(
                name=day,
                order_delivery=kwargs['instance']
            )


post_save.connect(create_days_for_order_delivery, sender=OrderDelivery)


def create_days_for_order_pickup(sender, **kwargs):
    if kwargs['created']:
        for day in days:
            Day.objects.create(
                name=day,
                order_pickup=kwargs['instance']
            )


post_save.connect(create_days_for_order_pickup, sender=OrderPickUp)
