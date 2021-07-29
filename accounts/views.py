from rest_framework import views, status, permissions
from rest_framework.response import Response

from .models import UserProfile
from .serializers import UserProfileSerializer


class ProfileAPIView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        profile = UserProfile.objects.get(id=pk).first()
        serializer = UserProfileSerializer(profile, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        pass
