from django.urls import path
from .views import *

urlpatterns = [
    path('list', ListcategoriesViews.as_view()),
]