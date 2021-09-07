from django.shortcuts import render, redirect, get_object_or_404, render_to_response
from django.views import View
from .models import *
from ecommerce.models import *
from ecommerce.views import userRegiserView
from ecommerce.forms import SiteNoteForm
from .forms import *
from django.contrib.auth import authenticate, login, logout
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
# login Decorators
from django.contrib.auth.decorators import login_required
# Message Framework
from django.contrib import messages
 # Send Mail
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from ecommerce.addcart import Cart



# homepage views
class HomepageViews(View):
    def get(self, request):
        slider_obj  = Slider.objects.all().order_by('-id')
        woman_cat   = Product.objects.filter(category__id = 3).order_by('-id')[:10]
        man_cat     = Product.objects.filter(category__id = 6).order_by('-id')[:10]
        food_cat    = Product.objects.filter(category__id = 5).order_by('-id')[:10]
        tech_cat    = Product.objects.filter(category__id = 1).order_by('-id')[:10]
        other_cat   = Product.objects.filter(category__id = 4).order_by('-id')[:10]
        books_cat   = Product.objects.filter(category__id = 7).order_by('-id')[:10]
        ads1        = SectionAds1.objects.all()[:3]
        ads2        = SectionAds1.objects.all()[:2]
        homepageAds = HomepageAds.objects.all()[:1]
        box_text    = BoxText.objects.all()[:3]
        cart        = Cart(request)
        category    = Category.objects.all()

        context = {
            'slider_obj'  : slider_obj,
            'woman_cat'   : woman_cat,
            'man_cat'     : man_cat,
            'food_cat'    : food_cat,
            'tech_cat'    : tech_cat,
            'other_cat'   : other_cat,
            'books_cat'   : books_cat,
            'ads1'        : ads1,
            'ads2'        : ads2,
            'homepageAds' : homepageAds,
            'box_text'    : box_text,
            'cart'        : cart,
            'category'    : category,
        }
        template_name = 'design/home.html'
        return render(request, template_name, context)



# product details views
class ProductDetails_views(View):
    def get(self ,request, name):
        product_details = get_object_or_404(Product, name = name)
        related_product = Product.objects.filter(category = product_details.category).exclude(name = name)[:10]
        sidebar_obj     = Sidebar.objects.all()
        product_hotdeal = Product.objects.all().order_by('-id')
        special_offer   = Product.objects.filter(category__id = 5).order_by('-id')
        cart        = Cart(request)
        category    = Category.objects.all()

        context = {
            'product_details' : product_details,
            'related_product' : related_product,
            'sidebar_obj'     : sidebar_obj,
            'product_hotdeal' : product_hotdeal,
            'special_offer'   : special_offer,
            'cart'            : cart,
            'category'        : category,
        }
        template_name = 'design/detail.html'
        return render(request, template_name, context)



# product cateogry views
class CategoryViews(View):
    def get(self, request, name):
        category_product = Product.objects.filter(category__name = name).order_by('-id')
        category_filter  = get_object_or_404(Category, name = name)
        sidebar_obj      = Sidebar.objects.all()
        product_hotdeal  = Product.objects.all().order_by('-id')
        special_offer    = Product.objects.all()[:10]
        # product pagination
        paginator        = Paginator(category_product, 20)
        page             = request.GET.get('page')
        category_product = paginator.get_page(page)
        cart             = Cart(request)
        category         = Category.objects.all()

        context = {
            'category_product' : category_product,
            'category_filter'  : category_filter,
            'sidebar_obj'      : sidebar_obj,
            'product_hotdeal'  : product_hotdeal,
            'special_offer'    : special_offer,
            'cart'             : cart,
            'category'         : category,
        }
        template_name = 'design/category.html'
        return render(request, template_name, context)



# Shop page views
class ShopViews(View):
    def get(self, request):
        shop_obj = Product.objects.all().order_by('-id')
        # pagination
        paginator = Paginator(shop_obj, 21)
        page      = request.GET.get('page')
        shop_obj  = paginator.get_page(page)
        cart      = Cart(request)
        category  = Category.objects.all()
        context   = {
            'shop_obj' : shop_obj,
            'cart'     : cart,
            'category' : category,

        }
        template_name = 'design/shop.html'
        return render(request, template_name, context)



# Searching category views
class SearchViews(View):
    def get(self, request):
        search_obj = Product.objects.all()
        cat_obj    = Category.objects.all()
        cart       = Cart(request)
        category   = Category.objects.all()
        # search product
        searching = request.GET.get('search_query')
        if searching:
            search_obj = search_obj.filter(name__icontains = searching)
        context  = {
            'search_obj' : search_obj,
            'cat_obj'    : cat_obj,
            'cart'       : cart,
            'category'   : category,
        }
        template_name = 'design/search.html'
        return render(request, template_name, context)



# Contact us views
def conactPageViews(request):
    cart      = Cart(request)
    category  = Category.objects.all()

    if request.method == 'GET':
        contactForm = ConactForm()
    else:
        contactForm = ConactForm(request.POST)
        if contactForm.is_valid():
             name       = contactForm.cleaned_data['name']
             email_form = contactForm.cleaned_data['email_form']
             subject    = contactForm.cleaned_data['subject']
             message    = contactForm.cleaned_data['message']

             try:
                 send_mail(name, "Message: "+message+"\n"+"From: "+email_form, subject, ['sales.metaphorbd@gmail.com'])
             except BadHeaderError:
                 return HttpResponse('Message Send Failed')
            # return redirect(ConactPageViews)
    context = {
        'contactForm' : contactForm,
        'cart'        : cart,
        'category'    : category,
    }
    template_name = 'design/contact.html'
    return render(request, template_name, context)



# admin user login views
def singup_views(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        auth     = authenticate(username = username, password = password)
        if auth is not None:
            login(request ,auth)
            return redirect(DashboardViews)
        else:
            messages.success(request, "Username and Password doesn't match")
    template_name = 'admin/auth/login.html'
    return render(request, template_name)



# admin user logout views
class SingoutViews(View):
    def get(self, request):
        logout(request)
        return redirect(singup_views)



# Dashboard views
@login_required(login_url='singup_views')
def DashboardViews(request):

    # site note form
    note_form = SiteNoteForm()
    if request.method == 'POST':
        note_form = SiteNoteForm(request.POST)
        if note_form.is_valid():
            instance = note_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "Message save draft")
            return redirect(DashboardViews)

    new_product   = Product.objects.all().order_by('-id')
    count_product = Product.objects.count()
    count_item    = Category.objects.count()
    order_item    = OrderItem.objects.count()
    total_customar= User.objects.count()
    order         = OrderItem.objects.all().select_related('order').select_related('product').order_by('-id')[:6]
    context       = {
        'count_product' : count_product,
        'count_item'    : count_item,
        'new_product'   : new_product,
        'order_item'    : order_item,
        'order'         : order,
        'note_form'     : note_form
    }
    template_name = 'admin/dashboard.html'
    return render(request, template_name, context)



# Dashboard all products views
class AllProductViews(View):
    def get(self, request):
        if request.user.is_authenticated:
            all_product   = Product.objects.all().order_by('-id')
            paginator = Paginator(all_product, 12)
            page = request.GET.get('page')
            all_product = paginator.get_page(page)
            count_product = Product.objects.count()
            context       = {
                'all_product'   : all_product,
                'count_product' : count_product
            }
        else:
            return redirect(SingoutViews)
        template_name = 'admin/product.html'
        return render(request, template_name, context)



# Add new Product views
@login_required(login_url='singup_views')
def addNewItemViews(request):
    product_form = AddNewProduct()
    if request.method == 'POST':
        product_form  = AddNewProduct(request.POST or request.FILES)
        if product_form.is_valid():
            instance = product_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "Item added")
            return redirect(addNewItemViews)

    context = {
        'product_form' : product_form
    }
    template_name = 'admin/add-product.html'
    return render(request, template_name, context)



# Edit Product views
@login_required(login_url='singup_views')
def editItemViews(request, name):
    product_obj = get_object_or_404(Product, name = name)
    if request.method == 'POST':
        product_form = AddNewProduct(request.POST or request.FILES, instance = product_obj)
        if product_form.is_valid():
            product_form.save()
            messages.add_message(request, messages.INFO, 'Product updated')
    product_form = AddNewProduct(instance = product_obj)
    context = {
        'product_form' : product_form
    }
    template_name = 'admin/add-product.html'
    return render(request, template_name, context)



# Delete Product views
@login_required(login_url='singup_views')
def deleteItemViews(request, id):
    product_obj = get_object_or_404(Product, id = id)
    product_obj.delete()
    messages.add_message(request, messages.INFO, 'Product Delete')
    return redirect(addNewItemViews)



# Category views
@login_required(login_url='singup_views')
def categoryViews(request):
    category_obj  = Category.objects.all()

    # searching
    search_query = request.GET.get('search_item')
    if search_query:
        category_obj = category_obj.filter(name__icontains = search_query)

    # Pagination
    paginator    = Paginator(category_obj, 8)
    page         = request.GET.get('page')
    category_obj = paginator.get_page(page)

    category_form = AddCategory()
    if request.method == 'POST':
        category_form = AddCategory(request.POST)
        if category_form.is_valid():
            instance= category_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "category added")
            return redirect(categoryViews)
    context = {
        'category_form' : category_form,
        'category_obj'  : category_obj,
    }
    template_name = 'admin/add-category.html'
    return render(request, template_name, context)



# edit Category views
@login_required(login_url='singup_views')
def editCategoryViews(request, name):
    editCategory_obj = get_object_or_404(Category, name = name)
    if request.method == 'POST':
        category_form = AddCategory(request.POST or request.FILES, instance = editCategory_obj)
        if category_form.is_valid():
            category_form.save()
            messages.add_message(request, messages.INFO, 'category updated')
            return redirect(categoryViews)
    category_form = AddCategory(instance = editCategory_obj)
    context = {
        'category_form' : category_form
    }
    tmplate_name = 'admin/add-category.html'
    return render(request, tmplate_name, context)



# delete category views
def deleteCategoryViews(request, id):
    deleteCat_obj = get_object_or_404(Category, id = id)
    deleteCat_obj.delete()
    messages.add_message(request, messages.INFO, "category delete")
    return redirect(categoryViews)



# color views
@login_required(login_url='singup_views')
def addColorViews(request):
    color_obj  = Color.objects.all()

    # searching
    search_query = request.GET.get('search_item')
    if search_query:
        color_obj = color_obj.filter(color__icontains = search_query)

    # Pagination
    paginator = Paginator(color_obj, 8)
    page      = request.GET.get('page')
    color_obj = paginator.get_page(page)
    # import pdb; pdb.set_trace()



    # Add color form
    color_form = AddColor()
    if request.method == 'POST':
        color_form    = AddColor(request.POST)
        if color_form.is_valid():
            instance= color_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "color added")
        else:
            messages.add_message(request, messages.INFO, "color already exits")
            return redirect(addColorViews)
    context = {
        'color_form' : color_form,
        'color_obj'  : color_obj,
    }
    template_name = 'admin/colors.html'
    return render(request, template_name, context)



# Edit color views
@login_required(login_url='singup_views')
def editColorViews(request, color):
    editColor_obj = get_object_or_404(Color, color = color)
    if request.method == 'POST':
        color_form    = AddColor(request.POST or None, instance = editColor_obj)
        if color_form.is_valid():
            color_form.save()
            messages.add_message(request, messages.INFO, 'Color name updated')
            return redirect(addColorViews)
    color_form = AddColor(instance = editColor_obj)
    context    = {
        'color_form' : color_form
    }
    template_name = 'admin/colors.html'
    return render(request, template_name, context)



# Delete color views
def deleteColorViews(request, id):
    delteColor_obj = get_object_or_404(Color, id = id)
    delteColor_obj.delete()
    messages.add_message(request, messages.INFO, "color delete")
    return redirect(addColorViews)


# brand views
@login_required(login_url='singup_views')
def addBrandViews(request):
    brand_obj  = Brand.objects.all()

    # searching
    search_query = request.GET.get('search_item')
    if search_query:
        brand_obj = brand_obj.filter(brand__icontains = search_query)

    # Pagination
    paginator = Paginator(brand_obj, 8)
    page      = request.GET.get('page')
    brand_obj = paginator.get_page(page)

    # Brand form
    brand_form = AddBrand()
    if request.method == 'POST':
        brand_form    = AddBrand(request.POST)
        if brand_form.is_valid():
            instance= brand_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "brand added")
            return redirect(addBrandViews)
    context = {
        'brand_form' : brand_form,
        'brand_obj'  : brand_obj,
    }
    template_name = 'admin/brands.html'
    return render(request, template_name, context)



# Edit brand views
@login_required(login_url='singup_views')
def editBrandViews(request, brand):
    editBrand_obj = get_object_or_404(Brand, brand = brand)
    if request.method == 'POST':
        brand_form    = AddBrand(request.POST or None, instance = editBrand_obj)
        if brand_form.is_valid():
            brand_form.save()
            messages.add_message(request, messages.INFO, 'Brand updated')
            return redirect(addBrandViews)
    brand_form = AddBrand(instance = editBrand_obj)
    context    = {
        'brand_form' : brand_form
    }
    template_name = 'admin/brands.html'
    return render(request, template_name, context)



# Delete Brand views
def deleteBrandViews(request, id):
    delteBrand_obj = get_object_or_404(Brand, id = id)
    delteBrand_obj.delete()
    messages.add_message(request, messages.INFO, "brand delete")
    return redirect(addBrandViews)



# Add Size views
def addSizeViews(request):
    size_obj  = Size.objects.all()

    # searching
    search_query = request.GET.get('search_item')
    if search_query:
        size_obj = size_obj.filter(size__icontains = search_query)

    # Pagination
    paginator = Paginator(size_obj, 8)
    page      = request.GET.get('page')
    size_obj  = paginator.get_page(page)

    # Size form
    size_form = AddSize()
    if request.method == 'POST':
        size_form     = AddSize(request.POST)
        if size_form.is_valid():
            instance= size_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "size added")
            return redirect(addSizeViews)
    context = {
        'size_form' : size_form,
        'size_obj'  : size_obj,
    }
    template_name = 'admin/size.html'
    return render(request, template_name, context)



# Edit size views
@login_required(login_url='singup_views')
def editSizeViews(request, size):
    editSize_obj = get_object_or_404(Size, size = size)
    if request.method == 'POST':
        size_form     = AddSize(request.POST or None, instance = editSize_obj)
        if size_form.is_valid():
            size_form.save()
            messages.add_message(request, messages.INFO, 'size updated')
            return redirect(addSizeViews)
    size_form  = AddSize(instance = editSize_obj)
    context    = {
        'editSize_obj' : editSize_obj,
        'size_form'    : size_form
    }
    template_name = 'admin/size.html'
    return render(request, template_name, context)



# Delete size views
@login_required(login_url='singup_views')
def deleteSize(request, id):
    delteBrand_obj = get_object_or_404(Size, id = id)
    delteBrand_obj.delete()
    messages.add_message(request, messages.INFO, "size delete")
    return redirect(addSizeViews)



# warranty views
@login_required(login_url='singup_views')
def addWarrantyViews(request):
    warranty_obj  = Warranty.objects.all()

    # searching
    search_query = request.GET.get('search_item')
    if search_query:
        warranty_obj = warranty_obj.filter(warranty__icontains = search_query)

    # Pagination
    paginator    = Paginator(warranty_obj, 8)
    page         = request.GET.get('page')
    warranty_obj = paginator.get_page(page)

    # Warranty Form
    warranty_form = AddWarranty()
    if request.method == 'POST':
        warranty_form = AddWarranty(request.POST)
        if warranty_form.is_valid():
            instance= warranty_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "warranty added")
            return redirect(addWarrantyViews)
    context = {
        'warranty_form' : warranty_form,
        'warranty_obj'  : warranty_obj,
    }
    template_name = 'admin/warranty.html'
    return render(request, template_name, context)



# Edit warranty views
@login_required(login_url='singup_views')
def editWarrantyViews(request, warranty):
    editWarranty_obj  = get_object_or_404(Warranty, warranty = warranty)
    if request.method == 'POST':
        warranty_form = AddWarranty(request.POST or None, instance = editWarranty_obj)
        if warranty_form.is_valid():
            warranty_form.save()
            messages.add_message(request, messages.INFO, 'warranty updated')
            return redirect(addWarrantyViews)
    warranty_form  = AddWarranty(instance = editWarranty_obj)
    context = {
        'warranty_form' : warranty_form
    }
    template_name = 'admin/warranty.html'
    return render(request, template_name, context)



# Delete warranty views
@login_required(login_url='singup_views')
def deleteWarranty(request, id):
    deltewarranty_obj = get_object_or_404(Warranty, id = id)
    deltewarranty_obj.delete()
    messages.add_message(request, messages.INFO, "warranty delete")
    return redirect(addWarrantyViews)



# Availability views
@login_required(login_url='singup_views')
def addAvailabilityViews(request):
    availability_obj  = Availability.objects.all()

    # searching
    search_query = request.GET.get('search_item')
    if search_query:
        availability_obj = availability_obj.filter(availability__icontains = search_query)

    # Pagination
    paginator = Paginator(availability_obj, 8)
    page = request.GET.get('page')
    availability_obj = paginator.get_page(page)

    # Availability form
    availability_form = AddAvailability()
    if request.method == 'POST':
        availability_form = AddAvailability(request.POST)
        if availability_form.is_valid():
            instance= availability_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "availability type added")
            return redirect(addAvailabilityViews)
    context = {
        'availability_form' : availability_form,
        'availability_obj'  : availability_obj,
    }
    template_name = 'admin/availability.html'
    return render(request, template_name, context)



# Edit Availability views
@login_required(login_url='singup_views')
def editAvailabilityViews(request, availability):
    editAvailability_obj  = get_object_or_404(Availability, availability = availability)
    if request.method     == 'POST':
        availability_form = AddAvailability(request.POST or None, instance = editAvailability_obj)
        if availability_form.is_valid():
            availability_form.save()
            messages.add_message(request, messages.INFO, 'availability updated')
            return redirect(addAvailabilityViews)
    availability_form  = AddAvailability(instance = editAvailability_obj)
    context = {
        'availability_form' : availability_form
    }
    template_name = 'admin/availability.html'
    return render(request, template_name, context)



# Delete Availability views
@login_required(login_url='singup_views')
def deleteAvailability(request, id):
    delteAvailability_obj = get_object_or_404(Availability, id = id)
    delteAvailability_obj.delete()
    messages.add_message(request, messages.INFO, "availability delete")
    return redirect(addAvailabilityViews)



# Dalivey System views
@login_required(login_url='singup_views')
def addDaliveryViews(request):
    dalivery_obj  = Dalivery.objects.all()

    # searching
    search_query = request.GET.get('search_item')
    if search_query:
        dalivery_obj = dalivery_obj.filter(dalivery__icontains = search_query)

    # Pagination
    paginator    = Paginator(dalivery_obj, 8)
    page         = request.GET.get('page')
    dalivery_obj = paginator.get_page(page)

    # Dalivey Form
    dalivery_form = AddDalivery()
    if request.method == 'POST':
        dalivery_form = AddDalivery(request.POST)
        if dalivery_form.is_valid():
            instance= dalivery_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "dalivery type added")
            return redirect(addDaliveryViews)
    context = {
        'dalivery_obj'   : dalivery_obj,
        'dalivery_form'  : dalivery_form,
    }
    template_name = 'admin/dalivery.html'
    return render(request, template_name, context)



# Edit Dalivey-System views
@login_required(login_url='singup_views')
def editDaliveyViews(request, dalivery):
    editDalivey_obj  = get_object_or_404(Dalivery, dalivery = dalivery)
    if request.method     == 'POST':
        dalivery_form = AddDalivery(request.POST or None, instance = editDalivey_obj)
        if dalivery_form.is_valid():
            dalivery_form.save()
            messages.add_message(request, messages.INFO, 'dalivery type updated')
            return redirect(addDaliveryViews)
    dalivery_form  = AddDalivery(instance = editDalivey_obj)
    context = {
        'dalivery_form' : dalivery_form
    }
    template_name = 'admin/dalivery.html'
    return render(request, template_name, context)




# Delete Dalivey-System views
@login_required(login_url='singup_views')
def deleteDalivey(request, id):
    delteDalivey_obj = get_object_or_404(Dalivery, id = id)
    delteDalivey_obj.delete()
    messages.add_message(request, messages.INFO, "dalivey system delete")
    return redirect(addDaliveryViews)



# Add Slider views
@login_required(login_url='singup_views')
def addSliderView(request):
    slider_obj  = Slider.objects.all()
    slider_form = AddSlider()
    if request.method == 'POST':
        slider_form = AddSlider(request.POST or None, request.FILES)
        if slider_form.is_valid():
            instance = slider_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, 'slider added')
            return redirect(addSliderView)
    context = {
        'slider_obj' : slider_obj,
        'slider_form': slider_form,
    }
    template_name = 'admin/add-slider.html'
    return render(request, template_name, context)



# Edit Slider views
@login_required(login_url='singup_views')
def editSliderViews(request, slide_layer1):
    editSlider_obj  = get_object_or_404(Slider, slide_layer1 = slide_layer1)
    if request.method     == 'POST':
        slider_form = AddSlider(request.POST or None, instance = editSlider_obj)
        if slider_form.is_valid():
            slider_form.save()
            messages.add_message(request, messages.INFO, 'slider updated')
            return redirect(addSliderView)
    slider_form  = AddSlider(instance = editSlider_obj)
    context = {
        'slider_form' : slider_form
    }
    template_name = 'admin/add-slider.html'
    return render(request, template_name, context)



# Delete Slider views
@login_required(login_url='singup_views')
def editDeleterViews(request, id):
    delteslide_obj = get_object_or_404(Slider, id = id)
    delteslide_obj.delete()
    messages.add_message(request, messages.INFO, "slider delete")
    return redirect(addSliderView)



# Slider Bottom box views
@login_required(login_url='singup_views')
def sliderBottomBox(request):
    box_obj  = BoxText.objects.all()
    box_form = AddBoxText()
    if request.method == 'POST':
        box_form = AddBoxText(request.POST or None)
        if box_form.is_valid():
            instance = box_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, "text added")
            return redirect(sliderBottomBox)
    context = {
        'box_form' : box_form,
        'box_obj'  : box_obj
    }
    template_name = 'admin/boxtext.html'
    return render(request, template_name, context)



# Add Slider section ads views
@login_required(login_url='singup_views')
def addSliderAdsView(request):
    ads_obj  = SectionAds1.objects.all()
    ads_form = AddSliderAds()
    if request.method == 'POST':
        ads_form = AddSlider(request.POST or None, request.FILES)
        if ads_form.is_valid():
            instance = ads_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, 'ads added')
            return redirect(addSliderAdsView)
    context = {
        'ads_obj' : ads_obj,
        'ads_form': ads_form,
    }
    template_name = 'admin/ads1.html'
    return render(request, template_name, context)




# Delete Slider bottom Ads views
@login_required(login_url='singup_views')
def deleteliderAdsView(request, id):
    delads_obj = get_object_or_404(SectionAds1, id = id)
    delads_obj.delete()
    messages.add_message(request, messages.INFO, "ads delete")
    return redirect(addSliderAdsView)




# Homepage middle ads
@login_required(login_url='singup_views')
def addHomepageView(request):
    ads_obj  = HomepageAds.objects.all()
    ads_form = AddSHomeAds()
    if request.method == 'POST':
        ads_form = AddSHomeAds(request.POST or None, request.FILES)
        if ads_form.is_valid():
            instance = ads_form.save(commit = False)
            instance.save()
            messages.add_message(request, messages.INFO, 'ads added')
            return redirect(addHomepageView)
    context = {
        'ads_obj' : ads_obj,
        'ads_form': ads_form,
    }
    template_name = 'admin/homeads.html'
    return render(request, template_name, context)




# Delete homepage Ads views
@login_required(login_url='singup_views')
def deletelHomepageAdsView(request, id):
    delads_obj = get_object_or_404(HomepageAds, id = id)
    delads_obj.delete()
    messages.add_message(request, messages.INFO, "ads delete")
    return redirect(addHomepageView)
