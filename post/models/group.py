from django.db import models

from post.models.base import BaseEntity
from accounts.models import UserProfile


class Group(BaseEntity):
    group_name = models.CharField(max_length=150)
    group_picture = models.ImageField(upload_to='group', blank=True, null=True)
    group_cover_photo = models.ImageField(upload_to='group_cover_picture', blank=True, null=True)
    members = models.ManyToManyField(UserProfile, blank=True, related_name='group_members')

    def __str__(self):
        return self.group_name[:50]
