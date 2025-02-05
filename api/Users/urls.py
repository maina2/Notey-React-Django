from django.urls import path
from . import views

urlpatterns = [
    path('registration/',views.RegisterView.as_view(),name="user-registration"),
    path('login/',views.LoginView.as_view(),name="login")
]
