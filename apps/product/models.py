from django.db import models

# Create your models here.

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    sku = models.CharField(max_length=50, unique=True)
    stock = models.IntegerField(default=0)
    status = models.CharField(choices=[('available', 'Available'), ('out_of_stock', 'Out of Stock'), ('on_sale', 'On Sale')], default='available', max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

