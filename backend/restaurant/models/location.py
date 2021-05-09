from base.models.base import BaseEntity
from django.db import models


class Location(BaseEntity):
    name = models.CharField(max_length=120)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name='child')
    is_active = models.BooleanField(default=True)
    avatar = models.ImageField(upload_to='location', null=True, blank=True)

    def __str__(self):
        return self.name[:30]
