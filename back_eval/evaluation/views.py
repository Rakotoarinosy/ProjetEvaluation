<<<<<<< HEAD
from django.shortcuts import render

# Create your views here.
=======
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from .models import Classe, Prof

from .serializers import ClassSerializer, ProfSerializer

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
        queryset = Prof.objects.all()  # Replace YourModel with your actual model
        serializer = ProfSerializer(queryset, many=True)
        return Response(serializer.data)
>>>>>>> 4e63dfd76e57794d081717828e1f305f2c102dce
