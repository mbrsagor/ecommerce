from django.db import models

from post.models.base import BaseEntity
from post.models.note import Note
from post.models.likable import Likable
from post.models.post import Post


class Comment(Note, Likable, BaseEntity):
    parent = models.ForeignKey(Post, null=True, on_delete=models.CASCADE, related_name='post_comments')

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        self.url = self.get_wall().profile.url + '#comment_{}'.format(self.id)
        return super().save(force_insert=force_insert, force_update=force_update, using=using,
                            update_fields=update_fields)

    def get_wall(self):
        return self.parent.get_wall()
