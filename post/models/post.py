from django.db import models

from post.models.base import BaseEntity
from post.models.note import Note
from post.models.likable import Likable
from accounts.models import UserWall, UserProfile


class Post(Note, Likable, BaseEntity):
    parent = models.ForeignKey(UserWall, null=True, on_delete=models.CASCADE, related_name='posts')
    shares = models.ManyToManyField(UserProfile, blank=True, related_name='post_share_user')

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        self.url = self.parent.profile.url + '#post_{}'.format(self.id)
        return super().save(force_insert=force_insert, force_update=force_update, using=using,
                            update_fields=update_fields)

    def add_note(self, text, author):
        return self.comment_set.create(text=text, author=author)

    def share(self, user_profile):
        user_profile.userwall.post_set.add(self)
        self.shares.add(user_profile)
        return self.shares.count()

    def get_wall(self):
        return self.parent
