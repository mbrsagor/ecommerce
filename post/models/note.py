from django.db import models

from post.models.base import BaseEntity
from accounts.models import UserProfile


class Note(BaseEntity):
    text = models.CharField(blank=True, max_length=8128)
    author = models.ForeignKey(UserProfile, related_name='nodes', on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    attachment = models.FileField(upload_to=UserProfile.user_directory_path, blank=True)
    url = models.CharField(blank=True, max_length=256)

    class Meta:
        abstract = True
