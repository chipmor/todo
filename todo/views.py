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
        # error handling here
        except Exception as e:
            print('uh oh')
            return JsonResponse({'error': 'failed to create todo'}, status=400)
        return JsonResponse({todo: todo})


    # def put(self, request):
    # def delete(self, request):

