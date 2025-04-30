from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)

class App(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    points = models.PositiveIntegerField()

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    app = models.ForeignKey(App, on_delete=models.CASCADE)
    screenshot = models.ImageField(upload_to='screenshots/', null=True, blank=True)
    is_completed = models.BooleanField(default=False)
