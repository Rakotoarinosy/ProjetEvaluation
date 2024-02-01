# Create your tests here.
from rest_framework import serializers
from .models import Classe, Compte, Prof, User

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classe
        fields = '__all__'

class ProfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prof
        fields = '__all__'   
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'     
        

class CompteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compte
        fields = '__all__'      