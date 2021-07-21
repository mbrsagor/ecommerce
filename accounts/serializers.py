from rest_framework import serializers
from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'id', 'user', 'birthday', 'bio', 'town', 'relationship', 'relation_user', 'visible_name', 'url', 'friends',
            'friend_requests', 'profile_picture', 'cover_picture', 'created'
        ]
        read_only_fields = ('user',)
