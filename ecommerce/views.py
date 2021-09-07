from django.shortcuts import render, redirect, get_object_or_404, render_to_response
from django.views.decorators.http import require_POST
from eshop.models import Product, Category
from .addcart import Cart
from .models import *
from .forms import CartAddProductForm, OrderCreateForm, UserRegiser
from decimal import Decimal
# paginator
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
# login Decorators
from django.contrib.auth.decorators import login_required
# Message Framework
from django.contrib import messages
from django.views import View
# Django default user model
from django.contrib.auth.models import User


# Add to cart views
def cart_add(request, id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=id)
    cart.add(product=product, quantity=1, update_quantity=1)
    return redirect(cart_detail)



# Remove Shopping Cart views
def cart_remove(request, id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=id)
    cart.remove(product)
    return redirect(cart_detail)



# Shopping Cart views
def cart_detail(request):
    cart = Cart(request)
    for item in cart:
        item['update_quantity_form'] ={'quantity': item['quantity'], 'update': True}
    return render(request, 'design/cart.html', {'cart': cart})



# update Cart views
@require_POST
def cart_updated(request, id):
    cart = Cart(request)
    if request.method == 'POST':
        number= int(request.POST.get('number'))
    product = get_object_or_404(Product, id=id)
    cart.add(product=product, quantity=number, update_quantity=True)
    return redirect(cart_detail)



# Checkout views
def checkOutViews(request):
    cart = Cart(request)
    if request.method == 'POST':
        form = OrderCreateForm(request.POST)
        if form.is_valid():
            order = form.save()
            for item in cart:
                OrderItem.objects.create(
                    order=order,
                    product=item['product'],
                    price=item['price'],
                    quantity=item['quantity']
                )
            cart.clear()
        return render(request, 'design/wlc.html', {'order': order})
    else:
        form = OrderCreateForm()
    return render(request, 'design/checkout.html', {'form': form, 'cart':cart})



# Order list dashboard
@login_required(login_url='singup_views')
def orderListViews(request):
    order_list = OrderItem.objects.all().select_related('order').select_related('product').order_by('-id')[:6]
    context    = {
        'order_list' : order_list
    }
    template_name = 'admin/order-list.html'
    return render(request, template_name, context)



# Dashboard DraftViews views
@login_required(login_url='singup_views')
def draftViews(request):
    site_note = SiteNote.objects.all().order_by('-id')
    context   = {
        'site_note' : site_note
    }
    template_name = 'admin/note.html'
    return render(request, template_name, context)



# Dashboard compose mail views
@login_required(login_url='singup_views')
def composeMailViews(request):

    template_name = 'admin/mail/compose.html'
    return render(request, template_name)



# Product inbox mail views
@login_required(login_url='singup_views')
def inboxMailViews(request):
    inbox_obj = OrderItem.objects.all().select_related('order').select_related('product').order_by('-id')
    # # Pagination
    paginator = Paginator(inbox_obj, 7)
    page      = request.GET.get('page')
    inbox_obj = paginator.get_page(page)
    context   = {'inbox_obj': inbox_obj}
    template_name = 'admin/mail/inbox.html'
    return render(request, template_name, context)


# product message read mail
@login_required(login_url='singup_views')
def readMailViews(request, id):
    orderTable  = get_object_or_404(OrderItem, id = id)
    orderTable2 = get_object_or_404(Order, id = id)

    context     = {
        'orderTable' : orderTable,
        'orderTable2' : orderTable2
    }
    template_name = 'admin/mail/mail-read.html'
    return render(request, template_name, context)



# Trams and condtion views
class TramsConditonViews(View):
    def get(self, request):
        cart        = Cart(request)
        category    = Category.objects.all()
        context     = {
            'cart'     : cart,
            'category' : category,
        }
        template_name = 'design/terms-conditions.html'
        return render(request, template_name, context)


# Trams and condtion views
class AboutusViews(View):
    def get(self, request):
        cart        = Cart(request)
        category    = Category.objects.all()
        context     = {
            'cart'     : cart,
            'category' : category,
        }
        template_name = 'design/about.html'
        return render(request, template_name, context)



# User Register form
@login_required(login_url='singup_views')
def userRegiserView(request):
    users = User.objects.all()
    form  = UserRegiser()

    # Search query
    search_query = request.GET.get('search_item')
    if search_query:
        users = users.filter(username__icontains = search_query)

    # Pagination
    paginator = Paginator(users, 8)
    page      = request.GET.get('page')
    users     = paginator.get_page(page)
    # import pdb; pdb.set_trace()

    if request.method == 'POST':
        form = UserRegiser(request.POST)
        if form.is_valid():
            instance = form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "User Created")
            return redirect(userRegiserView)
        else:
            messages.add_message(request, messages.INFO, "User can't create. try again")
            return redirect(userRegiserView)

    context = {
        'users' : users,
        'form'  : form
    }
    template_name = 'admin/auth/user.html'
    return render(request, template_name, context)



# Update User Register
@login_required(login_url='singup_views')
def updateUserView(request, id):
    obj = get_object_or_404(User, id = id)
    if request.method == 'POST':
        form = UserRegiser(request.POST, instance = obj)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.INFO, 'User updated')
            return redirect(userRegiserView)
        else:
            messages.add_message(request, messages.INFO, 'user update invalid. try again')
    form = UserRegiser(instance = obj)
    context = {
        'form' : form
    }
    template_name = 'admin/auth/user.html'
    return render(request, template_name, context)



# User Register delete
@login_required(login_url='singup_views')
def deleteUserView(request, id):
    user_delete = get_object_or_404(User, id = id)
    user_delete.delete()
    messages.add_message(request, messages.INFO, "User Delete")
    return redirect(userRegiserView)



# 404 page
def error_404(request):
    template_name = 'design/404.html'
    return render(request, template_name)
