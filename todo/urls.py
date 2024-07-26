from django.urls import path

from todo.views import TodoViews

urlpatterns = [
    path('todo', TodoViews.as_view())
]
