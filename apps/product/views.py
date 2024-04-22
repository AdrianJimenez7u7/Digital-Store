from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.db.models.query_utils import Q
from .models import Product
from apps.category.models import Category
from .serializers import *
from .pagination import SmallResultsSetPagination, StandardResultsSetPagination, LargeResultsSetPagination

class productListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Product.productObjects.all().exists():
            products = Product.productObjects.all()
            pagination = SmallResultsSetPagination()
            results = pagination.paginate_queryset(products, request)
            serializer = publicproductSerializer(results, many=True)
            return pagination.get_paginated_response({'products': serializer.data})
        else:
            return Response({'Error': 'Product Not Exist'}, status=status.HTTP_204_NO_CONTENT)
        
class ListProductsByCategory(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Product.productObjects.all().exists():
            categorySlug = request.query_params.get('slug')
            products = Product.productObjects.order_by('-created_at').all()
            category = Category.objects.get(slug=categorySlug)
            #si tiene un padre, filtra solo por esa categoria y no por su padre
            if category.parent:
                products = products.filter(category=category)
            else:
            #filtrar la categoria padre y a sus hijos
                if not Category.objects.filter(parent=category).exists():
                    products = products.filter(category=category)
                else:
                    sub_categories = Category.objects.filter(parent=category)
                    filted_categories = [category]
                    for cat in  sub_categories:
                        filted_categories.append(cat)
                    filted_categories = tuple(filted_categories)
                    products = products.filter(category__in=filted_categories)
            pagination = SmallResultsSetPagination()
            results = pagination.paginate_queryset(products, request)  
            serializer = publicproductSerializer(results, many=True)
            return pagination.get_paginated_response({'products': serializer.data})
        else:
            return Response({'Error': 'Product Not Exist'}, status=status.HTTP_204_NO_CONTENT)
        
class ProductDetail(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format=None):
        if Product.productObjects.filter(slug=slug).exists():
            product = Product.productObjects.get(slug=slug)
            serializer = productSerializer(product)
            #obtenemos la vista del usuario
            address = request.META.get('HTTP_X_FORWARDER_FOR')
            print(address)
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
                
            if not viewsCount.objects.filter(product=product, ip_address=ip):
                view = viewsCount(product=product, ip_address=ip)
                view.save()
                product.views += 1
                product.save()
            return Response({'product': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Product Not Exist'}, status=status.HTTP_204_NO_CONTENT)
    
class SearchProduct(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        matches = Product.productObjects.filter(
            Q(name__icontains=search_term)|
            Q(description__icontains=search_term)|
            Q(category__name__icontains=search_term)
            )
        pagination = LargeResultsSetPagination()
        results = pagination.paginate_queryset(matches, request)
        serializer = publicproductSerializer(results, many=True)
        return pagination.get_paginated_response({'filtered_products': serializer.data})