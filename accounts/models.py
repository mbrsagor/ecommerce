from django.contrib.auth.models import User
from django.db import models
from django.shortcuts import reverse
from utils.enum import RELATIONSHIPSTATUS


class BaseModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class UserProfile(BaseModel):
    user = models.OneToOneField(User, related_name="user", on_delete=models.CASCADE)
    bio = models.CharField(max_length=120, blank=True, null=True)
    birthday = models.DateField(blank=True, default='2004-12-01')
    town = models.CharField(blank=True, max_length=120)
    relationship = models.IntegerField(RELATIONSHIPSTATUS.get_choices(), default=RELATIONSHIPSTATUS.SINGLE.value)
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

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        self.visible_name = self.get_visible_name()
        self.url = reverse('profile', args=[self.user.username])
        return super().save(force_insert=force_insert, force_update=force_update, using=using,
                            update_fields=update_fields)

    def send_friend_request(self, user_profile):
        self.friend_requests.add(user_profile)
        noti = Notification.objects.create(owner=self, type=Notification.FRIEND_REQUEST,
                                           sender=user_profile.user.username)
        self.notification_set.add(noti)
        return self.friend_requests.count()

    def cancel_friend_request(self, user_profile):
        self.friend_requests.remove(user_profile)
        self.notification_set.get(type=Notification.FRIEND_REQUEST, sender=user_profile.user.username).delete()
        noti = Notification.objects.create(owner=user_profile, type=Notification.DECLINED_FRIEND_REQUEST,
                                           sender=self.user.username)
        user_profile.notification_set.add(noti)
        return self.friend_requests.count()

    def add_friend(self, user_profile):
        self.friend_requests.remove(user_profile)
        self.notification_set.get(type=Notification.FRIEND_REQUEST, sender=user_profile.user.username).delete()
        self.friends.add(user_profile)
        user_profile.friends.add(self)
        noti = Notification.objects.create(owner=user_profile, type=Notification.ACCEPTED_FRIEND_REQUEST,
                                           sender=self.user.username)
        user_profile.notification_set.add(noti)
        return self.friends.count()

    def remove_friend(self, user_profile):
        self.friends.remove(user_profile)
        user_profile.friends.remove(self)
        noti = Notification.objects.create(owner=user_profile, type=Notification.REMOVED_FRIEND,
                                           sender=self.user.username)
        user_profile.notification_set.add(noti)
        return self.friends.count()

    @staticmethod
    def user_directory_path(instance, filename):
        # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
        return 'user_{0}/{1}'.format(instance.user.id, filename)


class UserWall(models.Model):
    profile = models.OneToOneField(UserProfile, related_name="user_wall", on_delete=models.CASCADE)
    url = models.CharField(blank=True, max_length=256)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        self.url = self.profile.url
        return super().save(force_insert=force_insert, force_update=force_update, using=using,
                            update_fields=update_fields)

    def add_note(self, text, author):
        return self.post_set.create(text=text, author=author)


class Notification(models.Model):
    type = models.CharField(blank=False, max_length=64)
    text = models.CharField(blank=True, max_length=128)
    url = models.CharField(blank=True, max_length=256)
    owner = models.ForeignKey(UserProfile, blank=False, on_delete=models.CASCADE)
    sender = models.CharField(blank=True, max_length=128)
    date = models.DateTimeField(auto_now_add=True)

    FRIEND_REQUEST = 'friend_request'
    _FRIEND_REQUEST_TEXT = '{} send you friend request!'
    ACCEPTED_FRIEND_REQUEST = 'accept_friend_request'
    _ACCEPTED_FRIEND_REQUEST_TEXT = '{} accepted your request. You are now friends!'
    DECLINED_FRIEND_REQUEST = 'decline_friend_request'
    _DECLINED_FRIEND_REQUEST_TEXT = '{} declined your friend request.'
    REMOVED_FRIEND = 'removed_friend'
    _REMOVED_FRIEND_TEXT = '{} removed you from friends.'

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if self.type == Notification.FRIEND_REQUEST:
            assert self.sender, 'Provide username for friend request'
            sender_user = User.objects.get(username=self.sender)
            sender_profile = UserProfile.objects.get(user=sender_user)
            self.text = self._FRIEND_REQUEST_TEXT.format(sender_profile.visible_name)
            self.url = reverse('friends', kwargs={'username': self.owner.user.username})
        elif self.type == Notification.ACCEPTED_FRIEND_REQUEST:
            assert self.sender, 'Provide username for accepted request'
            sender_user = User.objects.get(username=self.sender)
            sender_profile = UserProfile.objects.get(user=sender_user)
            self.text = self._ACCEPTED_FRIEND_REQUEST_TEXT.format(sender_profile.visible_name)
            self.url = reverse('friends', kwargs={'username': self.owner.user.username})
        elif self.type == Notification.DECLINED_FRIEND_REQUEST:
            assert self.sender, 'Provide username for declined request'
            sender_user = User.objects.get(username=self.sender)
            sender_profile = UserProfile.objects.get(user=sender_user)
            self.text = self._DECLINED_FRIEND_REQUEST_TEXT.format(sender_profile.visible_name)
            self.url = reverse('friends', kwargs={'username': self.owner.user.username})
        elif self.type == Notification.REMOVED_FRIEND:
            assert self.sender, 'Provide username of friend who removed you'
            sender_user = User.objects.get(username=self.sender)
            sender_profile = UserProfile.objects.get(user=sender_user)
            self.text = self._REMOVED_FRIEND_TEXT.format(sender_profile.visible_name)
            self.url = reverse('friends', kwargs={'username': self.owner.user.username})

        return super().save(force_insert=force_insert, force_update=force_update, using=using,
                            update_fields=update_fields)
