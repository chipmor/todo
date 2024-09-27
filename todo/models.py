from django.db import models


class Todo(models.Model):
    description = models.TextField(max_length=1000)
    is_completed = models.BooleanField(default=False)
