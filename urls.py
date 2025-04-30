from django.urls import path
from .views import AppView, TaskView

urlpatterns = [
    path('apps/', AppView.as_view()),
    path('tasks/', TaskView.as_view()),
]
