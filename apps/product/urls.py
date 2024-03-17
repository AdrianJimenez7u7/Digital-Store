from django.urls import path
from .views import *

urlpatterns = [
    path('list', productListView.as_view()),
    path('by_category', ListProductsByCategory.as_view()),
    path('detail/<slug>', ProductDetail.as_view()),
    path('search', SearchProduct.as_view())
]
