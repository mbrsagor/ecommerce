from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import *
from django.conf.urls import handler404


urlpatterns = [
    path('cart', cart_detail, name = 'cart_detail'),
    path('cart_add/<int:id>/', cart_add, name='cart_add'),
    path('update-cart/<int:id>/', cart_updated, name = 'cart_updated'),
    path('remove/<int:id>/', cart_remove, name='cart_remove'),
    path('checkout', checkOutViews, name = 'checkOutViews'),
    path('dashboard/orderlist', orderListViews, name = 'orderListViews'),
    path('dashboard/draft', draftViews, name = 'draftViews'),
    path('mail/compose', composeMailViews, name = 'composeMailViews'),
    path('mail/inbox', inboxMailViews, name = 'inboxMailViews'),
    path('mail/read-mail/<int:id>', readMailViews, name = 'readMailViews'),
    path('about-us', AboutusViews.as_view(), name = 'AboutusViews'),
    path('trams-conditon', TramsConditonViews.as_view(), name = 'TramsConditonViews'),
    path('users/add-user', userRegiserView, name = 'users'),
    path('users/update-user/<int:id>', updateUserView, name = 'updateUserView'),
    path('users/delete-user/<int:id>', deleteUserView, name = 'deleteUser'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = error_404
