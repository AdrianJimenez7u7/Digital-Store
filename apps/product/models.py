from django.db import models
from django.utils import timezone
from django.db.models import Q
from apps.category.models import Category

# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=255, null=False)
    mail = models.CharField(max_length=255, null=True)
    phone = models.CharField(max_length=13 ,null=True, blank=True)
    description = models.TextField()
    image = models.BinaryField(blank=True, null=True)
    

    def __str__(self):
        return self.name     
    


class Product(models.Model):
    
    class ProductObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(Q(status='on_sale') | Q(status='available') | Q(status='out_of_stock'))

    
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.BinaryField(blank=True, null=True)
    sku = models.CharField(max_length=50, unique=True)
    stock = models.IntegerField(default=0)
    status = models.CharField(choices=[('available', 'Available'), ('out_of_stock', 'Out of Stock'), ('on_sale', 'On Sale'), ('discontinued', 'Discontinued')], default='available', max_length=20)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=255, unique=True)
    views = models.IntegerField(default=0, blank=True)
    objects = models.Manager() # The default manager.
    productObjects = ProductObjects() #nuestro custom manager hace que no obtengamos productos descontinuados

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.name     
    
    def get_view_count(self):
        views = viewsCount.objects.filter(product=self).count()
        return views   
    
class viewsCount(models.Model):
    product = models.ForeignKey(Product, related_name='category_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.ip_address}"
    
