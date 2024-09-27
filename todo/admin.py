from django.contrib import admin

from todo.models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'description', 'is_completed')
    ordering = ['id']


admin.site.register(Todo, TodoAdmin)
