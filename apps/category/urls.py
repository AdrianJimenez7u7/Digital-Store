from django.urls import path
from .views import *

urlpatterns = [
    path('list', ListcategoriesViews.as_view()),
    path('simple-list', Listcategories.as_view()),
    path('create', adminCategory.as_view()),
]