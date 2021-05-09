from django.urls import path

from .views import (
    ChangePasswordView,
    CreateUserView,
    UpdateUserView,
    DetailUserView,
    UserLoginView,
    UserOtpCodeUpdateView,
    UserOtpCodeDetailView,
    VerifyUserView
)

urlpatterns = [
    path('login/', UserLoginView.as_view(), name="login"),
    path('register/', CreateUserView.as_view(), name="register"),
    path('<int:pk>/update-account/', UpdateUserView.as_view(), name="update-account"),
    path('<int:pk>/account/', DetailUserView.as_view(), name="detail-account"),
    path('password-change/<int:pk>/', ChangePasswordView.as_view(), name="password_change"),
    path('send-otp-code/<phone_number>/', UserOtpCodeUpdateView.as_view(), name="send_otp_code"),
    path('otp-codewise-user/<phone_number>/', UserOtpCodeDetailView.as_view(), name="user_otp_code"),
    path('verify-user/<phone_number>/', VerifyUserView.as_view(), name="verify-user"),
]
