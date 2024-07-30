from django.contrib import admin

from todo.models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')
    ordering = ['id']


admin.site.register(Todo, TodoAdmin)
