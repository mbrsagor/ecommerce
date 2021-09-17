from rest_framework import serializers, viewsets, permissions
from eshop.models import Slider


class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = [
            'id',
            'slide_layer1',
            'slide_layer2',
            'slide_layer3',
            'slide_link',
            'slider_image',
            'create_at',
            'update_at',
        ]


class SliderViewSet(viewsets.ModelViewSet):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer
    permission_classes = [permissions.IsAdminUser, ]
