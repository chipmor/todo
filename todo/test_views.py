import json

import pytest
from django.test import Client

from todo.models import Todo
from todo.views import TodoViews

@pytest.mark.django_db
class TestTodoView():
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
