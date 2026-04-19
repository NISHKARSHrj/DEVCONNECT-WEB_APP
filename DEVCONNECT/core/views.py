from django.shortcuts import render
from django.http import JsonResponse
from .models import Post 
from .serializers import PostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(["POST"])
def posts(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)