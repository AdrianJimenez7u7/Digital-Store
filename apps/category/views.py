from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Category
from .serializer import categorySerializer

class ListcategoriesViews(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        if Category.objects.all().exists():
            categories = Category.objects.all()
            orderCategory = []
            for category in categories:
                #si es una categoria principal (parent == null)
                if not category.parent:
                    item = {}
                    item['id'] = category.id
                    item['name'] = category.name
                    item['description'] = category.description
                    item['image'] = category.image
                    item['slug'] = category.slug
                    item['views'] = category.views
                    item['sub_categories'] = []
                    for sub_caregory in categories:
                        sub_item = {}
                        #si la caregia tiene un parent y ese parent es igual a una categoria existente
                        if sub_caregory.parent and sub_caregory.parent.id == category.id:
                            sub_item['id'] = sub_caregory.id
                            sub_item['name'] = sub_caregory.name
                            sub_item['description'] = sub_caregory.description
                            sub_item['image'] = sub_caregory.image
                            sub_item['slug'] = sub_caregory.slug
                            sub_item['views'] = sub_caregory.views
                            item['sub_categories'].append(sub_item)
                    if not item['sub_categories']:
                        item.pop('sub_categories')
                    
                    orderCategory.append(item)       
            return Response({'Categories': orderCategory}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no hay categorias'}, status=status.HTTP_404_NOT_FOUND)
