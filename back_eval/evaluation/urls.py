"""backEval URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from .views import classe, classes, createCompte, prof, profs, user, users, post

urlpatterns = [
    path("classe/", classe, name="classe"),
    path("classes/", classes, name="classes"),
    path("prof/", prof, name="prof"),
    path("profs/", profs, name="profs"),
    path("user/", user, name="user"),
    path("users/", users, name="users"),
    path("createCompte/", createCompte, name="CreateCompte"),
    path('login/', post, name='api-login')

]
