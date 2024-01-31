# Create your tests here.
from rest_framework import serializers
from .models import Classe, Prof

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classe
        fields = '__all__'

class ProfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prof
        fields = '__all__'        