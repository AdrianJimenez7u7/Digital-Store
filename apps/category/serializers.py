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
