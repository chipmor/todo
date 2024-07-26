from django.urls import path

from todo.views import TodoViews

urlpatterns = [
    path('todos', TodoViews.as_view())
]
