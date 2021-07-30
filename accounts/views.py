from django.contrib.auth.models import User
from rest_framework import views, status, permissions
from rest_framework.response import Response

from .models import UserProfile
from .serializers import UserProfileSerializer, UserSerializer


class ProfileAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    status_code = status.HTTP_200_OK

    def get(self, request):
        user_id = self.request.user.id
        try:
            user_profile = UserProfile.objects.get(id=user_id)
            serializer = UserProfileSerializer(user_profile)
            return Response(serializer.data, status=self.status_code)

        except Exception as e:
            user = User.objects.get(id=user_id)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=self.status_code)

    def put(self, request, pk):
        pass
