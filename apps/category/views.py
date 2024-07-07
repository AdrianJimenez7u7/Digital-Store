from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Category
from .serializers import *
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
                    item['image'] = category.imagen_encoded()
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
                            sub_item['image'] = sub_caregory.imagen_encoded()
                            sub_item['slug'] = sub_caregory.slug
                            sub_item['views'] = sub_caregory.views
                            item['sub_categories'].append(sub_item)
                    if not item['sub_categories']:
                        item.pop('sub_categories')
                    
                    orderCategory.append(item)       
            return Response({'categories': orderCategory}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no hay categorias'}, status=status.HTTP_404_NOT_FOUND)
class Listcategories(APIView):
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
                    item['sub_categories'] = []
                    for sub_caregory in categories:
                        sub_item = {}
                        #si la caregia tiene un parent y ese parent es igual a una categoria existente
                        if sub_caregory.parent and sub_caregory.parent.id == category.id:
                            sub_item['id'] = sub_caregory.id
                            sub_item['name'] = sub_caregory.name
                            item['sub_categories'].append(sub_item)
                    if not item['sub_categories']:
                        item.pop('sub_categories')
                    
                    orderCategory.append(item)       
            return Response({'categories': orderCategory}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no hay categorias'}, status=status.HTTP_404_NOT_FOUND)

class adminCategory(APIView):
    permission_classes = (permissions.AllowAny,)
    #permissions.IsAuthenticated: Permite el acceso solo a usuarios autenticados.
    #permissions.IsAdminUser: Permite el acceso solo a administradores.
    #permissions.IsAuthenticatedOrReadOnly: Permite el acceso de lectura a cualquier usuario, pero solo permite el acceso de escritura a usuarios autenticados.
    def post(self, request, format=None):
        serializer = adminCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)