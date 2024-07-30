from todo.models import Todo
from todo.serializers import TodoSerializer


def get_all_todos():
    todos = Todo.objects.all()
    return [
        {
            'id': todo.id,
            'title': todo.title,
            'description': todo.description,
         } for todo in todos
    ]


def create_todo(title, description):
    if not title or not description:
        raise ValueError('Title and description cannot be empty')

    return Todo.objects.create(title=title, description=description)


def update_todo(todo_id, title, description):
    if not title or not description:
        raise ValueError('Title and description cannot be empty')

    return Todo.objects.filter(id=todo_id).update(title=title, description=description)


def delete_todo(todo_id):
    return Todo.objects.filter(id=todo_id).delete()