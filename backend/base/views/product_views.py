from django.shortcuts import render
from django.contrib.auth.models import User
from django.db.models import Max
from decimal import *

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product
from base.products import products
from base.serializers import ProductSerializer


@api_view(["GET"])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

#  Get product with highest rating
@api_view(['GET'])
def getFeaturedProduct(request, cte):
    productList = Product.objects.filter(category=cte)
    maxRating = productList.aggregate(Max('rating'))

    querySet = Product.objects.filter(rating=maxRating["rating__max"])
    product = querySet.first()
    serializer = ProductSerializer(productList.first(), many=False)
    return Response(serializer.data)

# Get products with highest rating
@api_view(['GET'])
def getFeaturedProducts(request, cte):
    productList = Product.objects.filter(category=cte).order_by('rating').reverse()
    serializer = ProductSerializer(productList, many=True)
    return Response(serializer.data)

# Get newest products
@api_view(['GET'])
def getNewestProducts(request, cte):
    querySet = Product.objects.filter(category=cte).order_by('createdAt').reverse()
    serializer = ProductSerializer(querySet, many=True)
    return Response(serializer.data)

# Get products ordered by high price
@api_view(['GET'])
def getHighPriceProducts(request, cte):
    querySet = Product.objects.filter(category=cte).order_by('price').reverse()
    serializer = ProductSerializer(querySet, many=True)
    return Response(serializer.data)

# Get products ordered by low price
@api_view(['GET'])
def getLowPriceProducts(request, cte):
    querySet = Product.objects.filter(category=cte).order_by('price')
    serializer = ProductSerializer(querySet, many=True)
    return Response(serializer.data)