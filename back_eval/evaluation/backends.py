from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User

class MonBackendPersonnalise(BaseBackend):
    def authenticate(self, request, label=None, mot_de_passe=None):
        try:
            utilisateur = User.objects.get(label=label)
            if check_password(mot_de_passe, utilisateur.mot_de_passe): # type: ignore
                return utilisateur
        except User.DoesNotExist:
            return None
