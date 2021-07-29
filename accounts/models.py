from django.contrib.auth.models import User
from django.db import models
from utils.enum import RelationShipStatus


class BaseModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class UserProfile(BaseModel):
    user = models.OneToOneField(User, related_name="user", on_delete=models.CASCADE)
    bio = models.CharField(max_length=120, blank=True, null=True)
    birthday = models.DateField(blank=True, default='2004-12-01')
    town = models.CharField(blank=True, max_length=120)
    relationship = models.IntegerField(RelationShipStatus.get_choices(), default=RelationShipStatus.SINGLE.value)
    relation_user = models.ManyToManyField('self', blank=True, related_name='relationship')
    visible_name = models.CharField(blank=True, max_length=128)
    url = models.CharField(blank=True, max_length=150)
    friends = models.ManyToManyField('self', blank=True, related_name='friends')
    friend_requests = models.ManyToManyField('self', blank=True, related_name='friend_requests')
    profile_picture = models.ImageField(upload_to='profile_photo', blank=True, null=True)
    cover_picture = models.ImageField(upload_to='cover_photo', blank=True, null=True)

    def __str__(self):
        return self.user.username

    def full_name(self):
        return f"{self.user.first_name} {self.user.last_name}"
