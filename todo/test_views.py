import json

import pytest
from django.test import Client

from todo.models import Todo
from todo.views import TodoViews


@pytest.mark.django_db
class TestGetTodos:
    url = '/api/todo'

    def test_get_returns_200_response(self):
        client = Client()
        response = client.get(self.url)
        assert response.status_code == 200

    def test_get_returns_todos(self):
        Todo.objects.create(title='test', description='test')

        client = Client()
        response = client.get(self.url)
        response_json = json.loads(response.content)

        assert 'todos' in response_json
        todos = response_json.get('todos')

        assert todos
        todo = todos[0]

        assert todo.get('title') == 'test'
        assert todo.get('description') == 'test'

    def test_get_returns_empty_array_when_no_todos(self):
        assert Todo.objects.count() == 0
        client = Client()
        response = client.get(self.url)
        response_json = json.loads(response.content)

        assert 'todos' in response_json
        todos = response_json.get('todos')
        assert todos == []


@pytest.mark.django_db
class TestCreateTodo:
    url = '/api/todo'

    def test_returns_201_response(self):
        client = Client()
        data = {"title": "test", "description": "test"}

        response = client.post(self.url, data)
        assert response.status_code == 201

    def test_returns_submitted_todo(self):
        client = Client()
        data = {"title": "test title", "description": "test description"}

        response = client.post(self.url, data)
        json_response = json.loads(response.content)

        todo = json_response.get('todo')

        assert todo.get("title") == "test title"
        assert todo.get("description") == "test description"

    def test_returns_400_response_when_blank_title(self):
        client = Client()
        data = {"title": "", "description": "test description"}

        response = client.post(self.url, data)

        assert response.status_code == 400

    def test_returns_400_response_when_blank_description(self):
        client = Client()
        data = {"title": "test title", "description": ""}

        response = client.post(self.url, data)

        assert response.status_code == 400

