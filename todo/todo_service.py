from todo.models import Todo


def get_all_todos():
    todos = Todo.objects.all()

    return [{
        'id': todo.id,
        'title': todo.title,
        'description': todo.description,
    } for todo in todos]


def create_todo(title, description):
    validate_title(title)
    validate_description(description)

    todo = Todo.objects.create(title=title, description=description)
    return {"id": todo.id, "title": title, "description": description}


def update_todo(todo_id, title, description):
    validate_title(title)
    validate_description(description)

    todo = Todo.objects.filter(id=todo_id).update(title=title, description=description)
    return {"id": todo.id, "title": todo.title, "description": todo.description}


def delete_todo(todo_id):
    return Todo.objects.filter(id=todo_id).delete()


def validate_title(title):
    if not title:
        raise ValueError('Title cannot be empty')
    if len(title) > 100:
        raise ValueError('Title cannot be more than 100 characters')


def validate_description(description):
    if not description:
        raise ValueError('Description cannot be empty')
    if len(description) > 1000:
        raise ValueError('Description cannot be more than 1,000 characters')
