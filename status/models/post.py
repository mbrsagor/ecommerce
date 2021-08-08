import csv
from django.contrib.auth.models import User
from django.db import models
from django.db.models import JSONField

from accounts.models import BaseModel


class Location(BaseModel):
    area_name = models.CharField(max_length=120)
    is_active = models.BooleanField(default=True)


class Feeling(BaseModel):
    name = models.CharField(max_length=50)
    icon = models.ImageField(default=None, upload_to='feeling')

    def __str__(self):
        return self.name[:20]


class Post(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_status')
    title = models.CharField(default=None, blank=True)
    content = models.TextField()
    activity = JSONField(null=True, blank=True, default=None)
    feelings = models.ForeignKey(Feeling, on_delete=models.CASCADE, blank=True, null=True, related_name='post_feeling')
    is_publish = models.BooleanField(default=True)
    is_private = models.BooleanField(default=False)
    is_friends = models.BooleanField(default=False)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='location_area', blank=True)
    image = models.ImageField(upload_to='post', blank=True, null=True)
    tag_friends = models.ManyToManyField(User, blank=True, related_name='tag_friend')

    def __str__(self):
        return self.user.username
