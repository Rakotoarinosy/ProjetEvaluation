import json
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import check_password

from .models import Classe, Compte, Prof, User

from .serializers import ClassSerializer, CompteSerializer, ProfSerializer, UserSerializer

# Create your views here.
@api_view(['POST'])
def classe(request):
    if request.method == 'POST':
        data = request.data
        serializer = ClassSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

@api_view(['GET'])
def classes(request):
    if request.method == 'GET':
        queryset = Classe.objects.all()  # Replace YourModel with your actual model
        serializer = ClassSerializer(queryset, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def prof(request):
    if request.method == 'POST':
        data = request.data
        serializer = ProfSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

@api_view(['GET'])
def profs(request):
    if request.method == 'GET':
        queryset = Prof.objects.all()  
        serializer = ProfSerializer(queryset, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def user(request):
    if request.method == 'POST':
        data = request.data
        serializer = UserSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        queryset = User.objects.all()  
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def createCompte(request):
    if request.method == 'POST':
        data = request.data
        serializer = CompteSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
def post(self, request):
    label = request.data.get('label')
    mot_de_passe = request.data.get('mot_de_passe')

    # Authentification de l'utilisateur
    user = authenticate(request, label=label, mot_de_passe=mot_de_passe)

    if user is not None:
        # Utilisateur authentifié avec succès
        # Vous pouvez renvoyer des données supplémentaires ici si nécessaire
        return Response({'message': 'Authentification réussie', 'user_id': user.id}, status=status.HTTP_200_OK) # type: ignore
    else:
        # Échec de l'authentification
        return Response({'error': 'Identifiant ou mot de passe incorrect'}, status=status.HTTP_401_UNAUTHORIZED)

        
    
    
        