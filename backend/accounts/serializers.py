import datetime

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.utils import datetime_to_epoch

from .models import User
from restaurant.models.restaurants import RestaurantUser

UserModel = User

SUPERUSER_LIFETIME = datetime.timedelta(minutes=30)


# User registration serializer
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    tokens = serializers.SerializerMethodField()

    def create(self, validated_data):
        user = UserModel.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            phone_number=validated_data['phone_number'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            partner_name=validated_data['partner_name'],
            select_brand=validated_data['select_brand'],
            password=validated_data['password'],
            is_owner=validated_data['is_owner']
        )

        return user

    class Meta:
        model = User
        fields = [
            'id', 'tokens', 'username', 'email', 'phone_number', 'first_name', 'last_name', 'partner_name',
            'select_brand', 'password', 'is_owner', 'is_staff', 'is_manager', 'is_verified'
        ]

    # When user registration automatically `refresh` and `access token return`
    def get_tokens(self, user):
        tokens = RefreshToken.for_user(user)
        refresh = str(tokens)
        access = str(tokens.access_token)
        data = {
            "refresh": refresh,
            "access": access
        }
        return data


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name')


class UserOtpCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('otp_code', 'is_verified')


# User login serializer
class CustomJwtLoginSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(CustomJwtLoginSerializer, cls).get_token(user)
        token['user_id'] = user.id
        token['name'] = user.username
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['is_active'] = user.is_active
        token['is_owner'] = user.is_owner
        token['is_verified'] = user.is_verified
        token['phone_number'] = user.phone_number

        try:
            token['sub_domain'] = user.restaurant.sub_domain
            token['restaurant_id'] = user.restaurant.id
        except:
            restaurant_user = RestaurantUser.objects.get(user=user)
            token['sub_domain'] = restaurant_user.restaurant.sub_domain
            token['restaurant_id'] = restaurant_user.restaurant.id

        if user:
            token.payload['exp'] = datetime_to_epoch(token.current_time + SUPERUSER_LIFETIME)
            return token


# User password rest serializer
class ResetPasswordSerializer(serializers.Serializer):
    pass


# Change password
class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()
        return instance
