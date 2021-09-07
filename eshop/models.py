from django.db import models
from django.contrib.auth.models import User


# Create Slider models
class Slider(models.Model):
    slide_layer1 = models.CharField(max_length=15)
    slide_layer2 = models.CharField(max_length=25)
    slide_layer3 = models.CharField(max_length=35)
    slide_link = models.CharField(max_length=200)
    slider_image = models.CharField(max_length=200)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.slide_layer1


# Product Category
class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)
    category_title = models.CharField(max_length=50, blank=True, null=True)
    category_image = models.CharField(max_length=100, blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.TimeField(auto_now=True)

    def __str__(self):
        return self.name


# Product Sub Category
# class SubCategory(models.Model):
#     subcategory     = models.ForeignKey(Category, on_delete = models.CASCADE)
#     create_at       = models.DateTimeField(auto_now_add = True)
#     update_at       = models.DateTimeField(auto_now = True)
#
#     def __str__(self):
#         return self.subcategory.category


# Product Size
class Size(models.Model):
    size = models.CharField(max_length=30, unique=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.size


# Product Brand
class Brand(models.Model):
    brand = models.CharField(max_length=30, unique=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.brand


# Product availability
class Availability(models.Model):
    availability = models.CharField(max_length=20)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.availability


# Product Color
class Color(models.Model):
    color = models.CharField(max_length=20, unique=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.color


# Product Warranty
class Warranty(models.Model):
    warranty = models.CharField(max_length=50)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.warranty


# Dalivery System
class Dalivery(models.Model):
    dalivery = models.CharField(max_length=50)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.dalivery


# Product/Item
class Product(models.Model):
    name = models.CharField(max_length=70)
    product_model = models.CharField(max_length=40, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_size = models.ForeignKey(Size, on_delete=models.CASCADE)
    brand_name = models.ForeignKey(Brand, on_delete=models.CASCADE)
    avaiableable = models.ForeignKey(Availability, on_delete=models.CASCADE)
    product_color = models.ForeignKey(Color, on_delete=models.CASCADE)
    product_warranty = models.ForeignKey(Warranty, on_delete=models.CASCADE)
    product_dalivery = models.ForeignKey(Dalivery, on_delete=models.CASCADE)
    product_serials = models.CharField(max_length=100, blank=True, null=True)
    product_price = models.IntegerField()
    discount_price = models.IntegerField()
    purchase_price = models.IntegerField()
    product_image = models.CharField(max_length=120)
    gallery_image1 = models.CharField(max_length=120, blank=True, null=True)
    gallery_image2 = models.CharField(max_length=120, blank=True, null=True)
    gallery_image3 = models.CharField(max_length=120, blank=True, null=True)
    gallery_image4 = models.CharField(max_length=120, blank=True, null=True)
    gallery_image5 = models.CharField(max_length=120, blank=True, null=True)
    description = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    create_at_item = models.DateField(auto_now=True)

    def __str__(self):
        return self.name


# Section slider bottom ads
class SectionAds1(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)
    image = models.CharField(max_length=200)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# Section second ads
class SectionAds2(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)
    image = models.CharField(max_length=200)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# Homepage ads section
class HomepageAds(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    subTitle = models.CharField(max_length=50, blank=True, null=True)
    image = models.CharField(max_length=200)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# Header slider box
class BoxText(models.Model):
    box_title = models.CharField(max_length=22)
    box_body = models.CharField(max_length=50)

    def __str__(self):
        return self.box_title


# sidebar widget
class Sidebar(models.Model):
    ads_title = models.CharField(max_length=30, blank=True, null=True)
    ads_image = models.URLField(max_length=200)

    def __str__(self):
        return self.ads_title
