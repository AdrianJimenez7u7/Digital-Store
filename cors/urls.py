from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    #path('api/cart/', include('apps.cart.urls')),
    #path('api/inventory/', include('apps.inventory.urls')),
    #path('api/payment/', include('apps.payment.urls')),
    path('api/category/', include('apps.category.urls')),
    path('api/product/', include('apps.product.urls')),
    #path('api/search/', include('apps.search.urls')),
    #path('api/security/', include('apps.security.urls')),
    #path('api/statistic/', include('apps.statistic.urls')),
    #path('api/user/', include('apps.user.urls')),
    
    
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]