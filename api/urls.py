from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('api/create/', views.Create, name="create"),
    path('', TemplateView.as_view(template_name="index.html"))
]
