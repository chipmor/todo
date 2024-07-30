from django.http import JsonResponse
from rest_framework.views import APIView

from todo import todo_service
from todo.models import Todo
from todo.todo_service import update_todo, delete_todo


class TodoViews(APIView):
    def get(self, request):
        todos = todo_service.get_all_todos()
        return JsonResponse({"todos": todos})

    def post(self, request):
        data = request.data
        title = data.get("title")
        description = data.get("description")
        try:
            todo = todo_service.create_todo(title, description)
        except ValueError as e:
            return JsonResponse({"error": "failed to create todo"}, status=400)
        return JsonResponse({"todo": todo}, status=201)


    def put(self, request):
        data = request.data
        todo_id = data.get("id")
        title = data.get("title")
        description = data.get("description")
        try:
            update_todo(todo_id, title, description)
        except ValueError as e:
            return JsonResponse({"error": "failed to update todo"}, status=400)

        return JsonResponse({"id": todo_id}, status=200)

    def delete(self, request, todo_id):
        delete_todo(todo_id)
        return JsonResponse({"id": todo_id}, status=200)


