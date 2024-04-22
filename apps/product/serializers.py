from rest_framework import serializers
from .models import *
from apps.category.serializers import categorySerializer

class brandSerializer(serializers.ModelSerializer):
    class Meta:
        model=Brand
        fields=[
            'id',
            'name',
            'mail',
            'phone',
            'description',
            'image'
        ]
        
class brandPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model=Brand
        fields=[
            'id',
            'name',
            'image',
            'mail'
        ]

class productSerializer(serializers.ModelSerializer):
    category=categorySerializer()
    brand = brandSerializer()
    class Meta:
        model=Product
        fields=[
            'id',
            'name',
            'brand',
            'description',
            'price',
            'image',
            'sku',
            'stock',
            'status',
            'created_at',
            'updated_at',
            'slug',
            'views',
            'category',
        ]
        
class publicproductSerializer(serializers.ModelSerializer):
    category=categorySerializer()
    brand = brandPublicSerializer()
    class Meta:
        model=Product
        fields=[
            'id',
            'name',
            'brand',
            'description',
            'price',
            'image',
            'stock',
            'slug',
            'category',
        ]
