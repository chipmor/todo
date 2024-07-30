from django.http import JsonResponse
from rest_framework.views import APIView

from todo import todo_service


class TodoViews(APIView):
    def get(self, request):
        todos = todo_service.get_all_todos()
        return JsonResponse({'todos': todos})

    def post(self, request):
        data = request.data
        title = data.get('title')
        description = data.get('description')
        try:
            todo = todo_service.create_todo(title, description)
        except ValueError as e:
            return JsonResponse({'error': 'failed to create todo'}, status=400)
        return JsonResponse({"todo": todo}, status=201)


    # def put(self, request):
    # def delete(self, request):

