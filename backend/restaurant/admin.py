from base.models.branding import Branding
from django.contrib import admin

from restaurant.models.application import ApplicationSetting
from restaurant.models.inventory import Category, Inventory, Menus, Modifier
from restaurant.models.location import Location
from restaurant.models.order_items import Address, Coupon, Order, OrderItem, Payment
from restaurant.models.outlets import Day, OrderDelivery, OrderPickUp, Outlet
from restaurant.models.restaurants import Restaurant, RestaurantUser

admin.site.register(Outlet)
admin.site.register(OrderDelivery)
admin.site.register(OrderPickUp)
admin.site.register(Day)
admin.site.register(Restaurant)
admin.site.register(RestaurantUser)
admin.site.register(Inventory)
admin.site.register(Menus)
admin.site.register(Category)
admin.site.register(Modifier)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Payment)
admin.site.register(Address)
admin.site.register(Coupon)
admin.site.register(Location)
admin.site.register(ApplicationSetting)
admin.site.register(Branding)
