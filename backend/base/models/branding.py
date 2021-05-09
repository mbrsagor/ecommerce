from django.db import models
from restaurant.models.restaurants import Restaurant

from base.models.base import BaseEntity


class Branding(models.Model):
    title = models.CharField(max_length=100, default="My site")
    restaurant = models.OneToOneField(
        Restaurant,
        on_delete=models.CASCADE,
        related_name="restaurant_branding",
        blank=True,
        null=True
    )
    message = models.TextField()
    base_color = models.CharField(max_length=20)
    text_color = models.CharField(max_length=20)
    cover_photo = models.ImageField(
        upload_to="application/% Y/% m/% d/", blank=True, null=True
    )

    def __str__(self):
        return self.title[:30]
