from accounts.models import User
from base.models.base import BaseEntity
from django.db import models


class Restaurant(BaseEntity):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='restaurant')
    name = models.CharField(max_length=120)
    sub_domain = models.CharField(max_length=180, blank=True, null=True)
    avatar = models.ImageField(upload_to='restaurant_avatar', blank=True, null=True)

    def __str__(self):
        return self.name


class RestaurantUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_restaurant', null=True, blank=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='restaurant_users')

    def __str__(self):
        return self.user.email