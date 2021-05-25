from django.db import models

from post.models.base import BaseEntity
from accounts.models import UserProfile


class Likable(BaseEntity):
    likes = models.ManyToManyField(UserProfile, blank=True, related_name='likes_%(class)s')

    class Meta:
        abstract = True

    def like(self, user_profile):
        self.likes.add(user_profile)
        return self.likes.count()

    def unlike(self, user_profile):
        self.likes.remove(user_profile)
        return self.likes.count()
