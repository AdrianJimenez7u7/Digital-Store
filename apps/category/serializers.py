from rest_framework import serializers
from .models import *

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=[
            'id',
            'name',
            'image',
            'slug',
            'views',
            'description',
        ]
class listCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=[
            'id',
            'name'
        ]

from rest_framework import serializers
from .models import Category

class adminCategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False, allow_null=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'parent', 'image', 'slug', 'views']

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("El nombre de la categoría es obligatorio.")
        if len(value) < 3:
            raise serializers.ValidationError("El nombre de la categoría debe tener al menos 3 caracteres.")
        return value

    def validate_description(self, value):
        if value and len(value) > 200:
            raise serializers.ValidationError("La descripción no puede exceder los 200 caracteres.")
        return value

    def validate_parent(self, value):
        if value and not Category.objects.filter(id=value.id).exists():
            raise serializers.ValidationError("La categoría padre no es válida.")
        return value

    def validate_slug(self, value):
        if not value:
            raise serializers.ValidationError("El slug es obligatorio.")
        if Category.objects.filter(slug=value).exists():
            raise serializers.ValidationError("El slug debe ser único.")
        return value
