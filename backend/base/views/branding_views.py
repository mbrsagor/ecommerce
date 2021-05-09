from base.models.branding import Branding
from base.serializers.branding_serializer import BrandingSerializer
from rest_framework.viewsets import ModelViewSet


class BrandingViewSet(ModelViewSet):
    queryset = Branding.objects.all()
    serializer_class = BrandingSerializer

    def perform_create(self, serializer):
        serializer.save(restaurant=self.request.user.restaurant)

    def get_queryset(self):
        if not self.request.user.is_superuser:
            branding = Branding.objects.filter(restaurant=self.request.user.restaurant)
        else:
            branding = Branding.objects.all()
        return branding
