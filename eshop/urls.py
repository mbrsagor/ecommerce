from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import *

urlpatterns = [

    path('', HomepageViews.as_view(), name='HomepageViews'),
    path('product/<name>/', ProductDetails_views.as_view(), name='productDetails_views'),
    path('category/<name>/', CategoryViews.as_view(), name='CategoryViews'),
    path('shop', ShopViews.as_view(), name='ShopViews'),
    path('search', SearchViews.as_view(), name='SearchViews'),
    path('contact-us', conactPageViews, name='conactPageViews'),
    path('login', singup_views, name='singup_views'),
    path('dashboard/', DashboardViews, name='DashboardViews'),
    path('logout', SingoutViews.as_view(), name='SingoutViews'),
    path('products/all-products', AllProductViews.as_view(), name='AllProductViews'),
    path('products/add-product', addNewItemViews, name='addNewItemViews'),
    path('products/edit-product/<name>/', editItemViews, name='editItemViews'),
    path('products/delete-product/<int:id>/', deleteItemViews, name='deleteItemViews'),
    path('categorys/add-category', categoryViews, name='categoryViews'),
    path('categorys/edit-category/<name>/', editCategoryViews, name='editCategoryViews'),
    path('categorys/delete-category/<int:id>/', deleteCategoryViews, name='deleteCategoryViews'),
    path('colors/add-color', addColorViews, name='addColorViews'),
    path('colors/edit-color/<color>/', editColorViews, name='editColorViews'),
    path('colors/delete-color/<int:id>/', deleteColorViews, name='deleteColorViews'),
    path('brands/add-brand', addBrandViews, name='addBrandViews'),
    path('brands/edit-brand/<brand>/', editBrandViews, name='editBrandViews'),
    path('brands/delete-brand/<int:id>/', deleteBrandViews, name='deleteBrandViews'),
    path('size/add-size', addSizeViews, name='addSizeViews'),
    path('size/edit-size/<size>/', editSizeViews, name='editSizeViews'),
    path('size/delete-size/<int:id>/', deleteSize, name='deleteSize'),
    path('warranty/add-warranty', addWarrantyViews, name='addWarrantyViews'),
    path('warranty/edit-warranty/<warranty>/', editWarrantyViews, name='editWarrantyViews'),
    path('warranty/delete-warranty/<int:id>/', deleteWarranty, name='deleteWarranty'),
    path('dashboard/add-availability', addAvailabilityViews, name='addAvailabilityViews'),
    path('dashboard/edit-availability/<availability>', editAvailabilityViews, name='editAvailabilityViews'),
    path('dashboard/delete-availability/<int:id>/', deleteAvailability, name='deleteAvailability'),
    path('dashboard/add-dalivery', addDaliveryViews, name='addDaliveryViews'),
    path('dashboard/edit-dalivery/<dalivery>', editDaliveyViews, name='editDaliveyViews'),
    path('dashboard/delete-dalivery/<int:id>', deleteDalivey, name='deleteDalivey'),
    path('sliders/add-slider', addSliderView, name='addSliderView'),
    path('sliders/edit-slider/<slide_layer1>', editSliderViews, name='editSliderViews'),
    path('sliders/delete-slider/<int:id>/', editDeleterViews, name='editDeleterViews'),
    path('dashboard/add-text', sliderBottomBox, name='sliderBottomBox'),
    path('dashboard/ads-one', addSliderAdsView, name='addSliderAdsView'),
    path('dashboard/delete-ads1/<int:id>/', deleteliderAdsView, name='deleteliderAdsView'),
    path('dashboard/home-ads', addHomepageView, name='addHomepageView'),
    path('dashboard/delete-adshomepage/<int:id>/', deletelHomepageAdsView, name='deletelHomepageAdsView'),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
