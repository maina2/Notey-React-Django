from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.backends import ModelBackend

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True, max_length=254)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    def __str__(self):
        return self.username


from django.contrib.auth import get_user_model
User = get_user_model()
class EmailBackend(ModelBackend):

    def authenticate(self, request, username=None, password=None, **kwargs):

        try:
            user = User.objects.get(email=username)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None
