from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import TextInput, Textarea, Select, RadioSelect, DateInput
from .models import *


# Adding Product form
class AddNewProduct(forms.ModelForm):
    class Meta:
        model   = Product
        fields  = '__all__'
        widgets = {
            'name'           : TextInput(attrs={'class':'add-product-form-group'}),
            'brand_name'     : Select(attrs={'class':'selectpicker-product select-pro'}),
            'product_model'  : TextInput(attrs={'class':'add-product-form-group'}),
            'product_serials': TextInput(attrs={'class':'add-product-form-group'}),
            'product_price'  : TextInput(attrs={'class':'add-product-form-group'}),
            'discount_price' : TextInput(attrs={'class':'add-product-form-group'}),
            'purchase_price' : TextInput(attrs={'class':'add-product-form-group'}),
            'product_image'  : TextInput(attrs={'class':'add-product-form-group'}),
            'gallery_image1' : TextInput(attrs={'class':'add-product-form-group'}),
            'gallery_image2' : TextInput(attrs={'class':'add-product-form-group'}),
            'gallery_image3' : TextInput(attrs={'class':'add-product-form-group'}),
            'gallery_image4' : TextInput(attrs={'class':'add-product-form-group'}),
            'gallery_image5' : TextInput(attrs={'class':'add-product-form-group'}),
            'category'       : Select(attrs={'class':'selectpicker-product select-pro'}),
            'product_size'   : Select(attrs={'class':'selectpicker-product select-pro'}),
            'avaiableable'   : Select(attrs={'class':'selectpicker-product select-pro'}),
            'product_color'  : Select(attrs={'class':'selectpicker-product select-pro'}),
            'product_warranty' : Select(attrs={'class':'selectpicker-product select-pro'}),
            'product_dalivery' : Select(attrs={'class':'selectpicker-product select-pro'}),
            'description'    : Textarea(attrs={'class':'add-product-form-group'}),
        }



# Category form
class AddCategory(forms.ModelForm):
    class Meta:
        model   = Category
        fields  = '__all__'
        widgets = {
            'name'           : TextInput(attrs={'class':'form-control'}),
            'category_title' : TextInput(attrs={'class':'form-control'}),
            'category_image' : TextInput(attrs={'class':'form-control'}),
        }



# Color form
class AddColor(forms.ModelForm):
    class Meta:
        model   = Color
        fields  = '__all__'
        widgets = {
            'color' : TextInput(attrs={'class':'form-control'})
        }



# Brand form
class AddBrand(forms.ModelForm):
    class Meta:
        model   = Brand
        fields  = '__all__'
        widgets = {
            'brand' : TextInput(attrs={'class':'form-control'})
        }



# Size form
class AddSize(forms.ModelForm):
    class Meta:
        model   = Size
        fields  = '__all__'
        widgets = {
            'size' : TextInput(attrs={'class':'form-control'})
        }



# Warranty form
class AddWarranty(forms.ModelForm):
    class Meta:
        model   = Warranty
        fields  = '__all__'
        widgets = {
            'warranty' : TextInput(attrs={'class':'form-control'})
        }



# Availability form
class AddAvailability(forms.ModelForm):
    class Meta:
        model   = Availability
        fields  = '__all__'
        widgets = {
            'availability' : TextInput(attrs={'class':'form-control'})


        }
# Dalivery form
class AddDalivery(forms.ModelForm):
    class Meta:
        model   = Dalivery
        fields  = '__all__'
        widgets = {
            'dalivery' : TextInput(attrs={'class':'form-control'})
        }



# Slider bottom boxText form
class AddBoxText(forms.ModelForm):
    class Meta:
        model   = BoxText
        fields  = '__all__'
        widgets = {
            'box_title' : TextInput(attrs={'class':'form-control'}),
            'box_body'  : TextInput(attrs={'class':'form-control'})
        }


# Slider form
class AddSlider(forms.ModelForm):
    class Meta:
        model   = Slider
        fields  = '__all__'
        widgets = {
            'slide_layer1' : TextInput(attrs={'class':'form-control'}),
            'slide_layer2' : TextInput(attrs={'class':'form-control'}),
            'slide_layer3' : TextInput(attrs={'class':'form-control'}),
            'slide_link'   : TextInput(attrs={'class':'form-control'}),
            'slider_image' : TextInput(attrs={'class':'form-control'}),
        }



# Slider section ads form
class AddSliderAds(forms.ModelForm):
    class Meta:
        model   = SectionAds1
        fields  = '__all__'
        widgets = {
            'title' : TextInput(attrs={'class':'form-control'}),
            'image' : TextInput(attrs={'class':'form-control'}),
        }



# Homepage middle ads
class AddSHomeAds(forms.ModelForm):
    class Meta:
        model   = HomepageAds
        fields  = '__all__'
        widgets = {
            'title' : TextInput(attrs={'class':'form-control'}),
            'subTitle' : TextInput(attrs={'class':'form-control'}),
            'image' : TextInput(attrs={'class':'form-control'}),
        }




# Contact form
class ConactForm(forms.Form):
    name       = forms.CharField(required = True, widget = forms.TextInput(attrs = {'class': 'form-control unicase-form-control text-input'}))
    email_form = forms.EmailField(required = True, widget = forms.TextInput(attrs = {'class': 'form-control unicase-form-control text-input'}))
    subject    = forms.CharField(required = True, widget = forms.TextInput(attrs = {'class': 'form-control unicase-form-control text-input'}))
    message    = forms.CharField(required = True, widget = forms.Textarea(attrs = {'class': 'form-control unicase-form-control'}))
