from rest_framework import serializers
from restauranTasks.models import Categoria, Producto


class CategoriaS(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        #fields = ('id', 'nombre', 'descripcion', 'foto')
        fields = '__all__'