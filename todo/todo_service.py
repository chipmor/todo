from todo.models import Todo
from todo.serializers import TodoSerializer


def get_all_todos():
    todos = Todo.objects.all()
    return [
        {
            'id': todo.id,
            'title': todo.title,
            'description': todo.description,
            'is_done': todo.is_done
         } for todo in todos
    ]
    # implement with serializers
    # serialized_todos = TodoSerializer(todos)
    # return serialized_todos.data
