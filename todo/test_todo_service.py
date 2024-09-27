import pytest

from todo.models import Todo
from todo.todo_service import get_all_todos, create_todo, update_todo, delete_todo


@pytest.mark.django_db
class TestGetAllTodo:
    def test_returns_all_todos(self):
        Todo.objects.create(title="test", description="test")
        Todo.objects.create(title="test2", description="test2")

        todos = get_all_todos()
        assert todos

        assert len(todos) == 2
        assert(todos[0].get("description") == "test")
        assert(todos[1].get("description") == "test2")

    def test_returns_empty_list(self):
        assert Todo.objects.count() == 0

        todos = get_all_todos()
        assert todos == []


@pytest.mark.django_db
class TestCreateTodo:
    def test_creates_todo(self):
        title = "test title"
        description = "test description"

        create_todo(title, description)
        todo = Todo.objects.get(title=title)

        assert todo
        assert todo.title == title
        assert todo.description == description

    def test_raises_valueerror_with_invalid_input(self):
        assert Todo.objects.count() == 0
        title = "test title"
        description = "test description"

        with pytest.raises(ValueError):
            create_todo("", description)
        with pytest.raises(ValueError):
            create_todo(title, "")

        assert Todo.objects.count() == 0


@pytest.mark.django_db
class TestUpdateTodo:
    def test_updates_todo(self):
        todo = Todo.objects.create(title="test", description="test")

        update_todo(todo.id, "new title", "new description")

        updated_todo = Todo.objects.get(id=todo.id)
        assert updated_todo.title == "new title"
        assert updated_todo.description == "new description"


@pytest.mark.django_db
class TestDeleteTodo:
    def test_deletes_todo(self):
        todo = Todo.objects.create(title="test", description="test")
        assert Todo.objects.count() == 1

        result = delete_todo(todo.id)

        assert result
        assert Todo.objects.count() == 0

    def test_returns_0_when_no_result_found(self):
        todo = Todo.objects.create(title="test", description="test")
        assert Todo.objects.count() == 1

        result = delete_todo(todo.id + 1)

        assert result == 0
        assert Todo.objects.count() == 1