from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.forms import UserCreationForm
from .serializer import CategoriaS
from .models import Categoria
# Create your views here.

#metodos para usuarios
#def singup(request):
#    return render(request,
#                  {
#                   'form': UserCreationForm   
#                  }
#                  )

#metodos para categoria
class cateViews(viewsets.ModelViewSet):
    serializer_class = CategoriaS
    queryset = Categoria.objects.all()