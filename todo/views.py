from django.http import JsonResponse
from rest_framework.views import APIView

from todo import todo_service


class TodoViews(APIView):
    def get(self, request):
        todos = todo_service.get_all_todos()
        return JsonResponse({'todos': todos})

    # def post(self, request):
    # def put(self, request):
    # def delete(self, request):

