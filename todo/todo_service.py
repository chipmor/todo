from rest_framework.exceptions import ValidationError

from todo.models import Todo


def get_all_todos():
    todos = Todo.objects.all()

    return [{
        "id": todo.id,
        "description": todo.description,
        "completed": todo.is_completed,
    } for todo in todos]


def create_todo(description):
    validate_description(description)

    todo = Todo.objects.create(description=description, is_completed=False)
    return {"id": todo.id, "description": todo.description, "completed": todo.is_completed}


def update_todo(todo_id, description, completed):
    validate_description(description)
    try:
        to_update = Todo.objects.get(id=todo_id)
        to_update.description = description
        to_update.is_completed = completed
        to_update.save()
    except Exception as e:
        raise Todo.DoesNotExist("Unable to find Todo with id: " + todo_id)

    return {"id": todo_id, "description": description, "completed": completed}


def delete_todo(todo_id):
    return Todo.objects.filter(id=todo_id).delete()[0]


def validate_title(title):
    if not title:
        raise ValueError("Title cannot be empty")
    if len(title) > 100:
        raise ValueError("Title cannot be more than 100 characters")


def validate_description(description):
    if not description:
        raise ValueError("Description cannot be empty")
    if len(description) > 1000:
        raise ValueError("Description cannot be more than 1,000 characters")
