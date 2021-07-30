from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'id', 'user', 'birthday', 'bio', 'town', 'relationship', 'relation_user', 'nick_name', 'url', 'friends',
            'full_name', 'friend_requests', 'profile_picture', 'cover_picture', 'created'
        ]
        read_only_fields = ('user',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name', 'is_superuser', 'is_active',
            'is_staff', 'last_login'
        ]
