from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path('', views.getProducts, name="products"),
    path('id/<str:pk>', views.getProduct, name="product"),
    path('featuredProduct/<str:cte>', views.getFeaturedProduct, name="featured-product"),
]
