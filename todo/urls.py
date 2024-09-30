from django.urls import path

from todo.views import TodoViews

urlpatterns = [
    path('todo/<int:todo_id>', TodoViews.as_view()),
    path('todo', TodoViews.as_view())
]
