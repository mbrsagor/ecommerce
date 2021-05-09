from base.models.branding import Branding
from rest_framework.serializers import ModelSerializer


class BrandingSerializer(ModelSerializer):
    class Meta:
        model = Branding
        fields = ["id", "restaurant", "title", "message", "cover_photo", "base_color", "text_color"]
