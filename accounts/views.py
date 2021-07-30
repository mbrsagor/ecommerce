from rest_framework import views, status, permissions
from rest_framework.response import Response

from .models import UserProfile
from .serializers import UserProfileSerializer


class ProfileAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            user_profile = UserProfile.objects.get(user=request.user).first()
            status_code = status.HTTP_200_OK
            response = {
                'success': 'true',
                'status code': status_code,
                'message': 'User profile fetched successfully',
                'data': [{
                    'first_name': user_profile.user.first_name,
                    'last_name': user_profile.user.last_name,
                    'username': user_profile.user.username,
                    'email': user_profile.user.email,
                    'bio': user_profile.bio,
                    'birthday': user_profile.birthday,
                    'town': user_profile.town,
                    'relationship': user_profile.relationship,
                    'relation_user': user_profile.relation_user,
                    'nick_name': user_profile.nick_name,
                    'friends': user_profile.nick_name,
                    'friend_requests': user_profile.friend_requests,
                    'profile_picture': user_profile.profile_picture,
                    'cover_picture': user_profile.cover_picture,
                }]
            }

        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            response = {
                'success': 'false',
                'status code': status.HTTP_400_BAD_REQUEST,
                'message': 'User does not exists',
                'error': str(e)
            }
        return Response(response, status=status_code)

    def put(self, request, pk):
        pass
