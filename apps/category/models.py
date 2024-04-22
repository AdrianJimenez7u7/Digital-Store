from django.db import models

# Create your models here.
class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'categories'
        
    name = models.CharField(max_length=255, unique=True)
    image = models.BinaryField(blank=True, null=True)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField(null=True)
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)
    
    views = models.IntegerField(default=0, blank=True)
    def __str__(self):
        return self.name
    
    def get_view_count(self):
        views = viewsCount.objects.filter(category=self).count()
        return views
    
    def imagen_encoded(self):
        from base64 import b64encode
        if self.image:
            return b64encode(self.image).decode('utf8')
        return None
    
class viewsCount(models.Model):
    category = models.ForeignKey(Category, related_name='category_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.ip_address}"
    

