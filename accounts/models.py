from django.contrib.auth.models import User
from django.db import models


class BaseModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

class Profile(BaseModel):
    user = models.OneToOneField(User, related_name="user")
    nick_name = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth = models.DateTimeField(blank=True)
    profile_picture = models.ImageField(upload_to='profile_photo', blank=True, null=True)
    cover_picture = models.ImageField(upload_to='cover_photo', blank=True, null=True)

    def __str__(self):
        return self.user.username

    def full_name(self):
        return f"{self.user.first_name} {self.user.last_name}"
