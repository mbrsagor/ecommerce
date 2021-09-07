from django import forms
from .models import Order, SiteNote
from django.forms import TextInput, Textarea
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


PRODUCT_QUANTITY_CHOICES = [(i, str(i)) for i in range(1, 26)]


class CartAddProductForm(forms.Form):
    quantity = forms.TypedChoiceField(choices=PRODUCT_QUANTITY_CHOICES, coerce=int)
    update = forms.BooleanField(required=False, initial=False, widget=forms.HiddenInput)


# Order form
class OrderCreateForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['full_name', 'phn_number', 'email', 'address', 'postal_code', 'city']
        widgets = {
            'full_name'   : TextInput(attrs={'class':'form-control unicase-form-control'}),
            'phn_number'  : TextInput(attrs={'class':'form-control unicase-form-control'}),
            'email'       : TextInput(attrs={'class':'form-control unicase-form-control'}),
            'address'     : TextInput(attrs={'class':'form-control unicase-form-control'}),
            'postal_code' : TextInput(attrs={'class':'form-control unicase-form-control'}),
            'city'        : TextInput(attrs={'class':'form-control unicase-form-control'}),
        }


# dashboard site note
class SiteNoteForm(forms.ModelForm):
    class Meta:
        model = SiteNote
        fields = ['note_title', 'note_body', 'nodte_date']
        widgets = {
            'nodte_date'   : TextInput(attrs={'class':'picker_1'}),
        }


# User Register form
class UserRegiser(UserCreationForm):
    username   = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    email      = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    first_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name  = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    password1  = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password2  = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    class Meta:
        model  = User
        fields = ['username', 'email', 'first_name', 'last_name', 'password1', 'password2']
