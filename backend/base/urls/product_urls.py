from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path('', views.getProducts, name="products"),
    path('id/<str:pk>', views.getProduct, name="product"),
    path('featuredProduct/<str:cte>', views.getFeaturedProduct, name=""),
    path('featuredProducts/<str:cte>', views.getFeaturedProducts, name=""),

    path('newestProducts/<str:cte>', views.getNewestProducts, name=""),
    path('highPriceProducts/<str:cte>', views.getHighPriceProducts, name=""),
    path('lowPriceProducts/<str:cte>', views.getLowPriceProducts, name=""),
]
