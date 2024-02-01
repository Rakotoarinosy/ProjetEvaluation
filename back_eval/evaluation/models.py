from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class Role(models.Model):
    nomRole = models.CharField(max_length=50)
    
class Lycee(models.Model):
    nomLycee = models.CharField(max_length=250)
    
    def __str__(self) -> str:
        return self.nomLycee
    
class Classe(models.Model):
    nomClasse = models.CharField(max_length=50)
    idLycee = models.ForeignKey(Lycee, verbose_name=("relation Lycee"), on_delete=models.SET_NULL, null=True)
    
    def __str__(self) -> str:
        return self.nomClasse
    
class User(models.Model):
    nomUser = models.CharField(max_length=250)
    emailUser = models.EmailField(max_length=254)
    idClasse = models.ForeignKey(Classe, verbose_name=("relation classe"), on_delete=models.SET_NULL, null=True)
    
    def __str__(self) -> str:
        return self.nomUser


class Prof(models.Model):
    nomProf = models.CharField(max_length=250)
    
    def __str__(self) -> str:
        return self.nomProf
    
class ClasseProf(models.Model):
    idClasse = models.ForeignKey(Classe, verbose_name=("relation classe"), on_delete=models.SET_NULL, null=True)
    idProf = models.ForeignKey(Prof, verbose_name=("relation prof"), on_delete=models.SET_NULL, null=True)
    
class Matiere(models.Model):
    nomMatiere = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.nomMatiere

class Critere(models.Model):
    nomCritere = models.CharField( max_length=250)
    valeur = models.FloatField()
    
    def __str__(self):
        return self.nomCritere
    
class Status(models.Model):
    label = models.CharField(max_length=50)
    
    def __str__(self):
        return self.label
    
import secrets
import string

class Compte(AbstractBaseUser):
    label = models.CharField(max_length=50, unique=True)
    mot_de_passe = models.CharField(max_length=128, default='')
    idLycee = models.ForeignKey(Lycee, verbose_name=("relation Lycee"), on_delete=models.SET_NULL, null=True)
    idRole = models.ForeignKey(Role, verbose_name=("relation Role"), on_delete=models.SET_NULL, null=True)
    
    USERNAME_FIELD = 'label'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.label

    def save(self, *args, **kwargs):
        if not self.mot_de_passe:
            # Générer un mot de passe aléatoire s'il n'est pas déjà défini
            self.mot_de_passe = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(12))
        elif not self.mot_de_passe.startswith('pbkdf2_sha256'):  # Vérifie si le mot de passe n'est pas déjà haché
            self.mot_de_passe = make_password(self.mot_de_passe)
        return super().save(*args, **kwargs)

    def check_password(self, raw_password):
        return check_password(raw_password, self.mot_de_passe)

    
class Evaluation(models.Model):
    date = models.DateField(auto_now=True)
    idStatus = models.ForeignKey(Status, verbose_name="relation status", on_delete=models.SET_NULL,null=True)
    
    def __str__(self):
        return self.date
    
class ResultatEvaluation(models.Model):
    idProf = models.ForeignKey(Prof, verbose_name="relation Prof", on_delete=models.SET_NULL,null=True)
    idMatiere = models.ForeignKey(Matiere, verbose_name="relation Matiere", on_delete=models.SET_NULL,null=True)
    idCritere = models.ForeignKey(Critere, verbose_name="relation Critere", on_delete=models.SET_NULL,null=True)
    
class StatusUserCompte(models.Model):
    idUser = models.ForeignKey(User, verbose_name=("relation User"), on_delete=models.SET_NULL,null=True)
    idStatus = models.ForeignKey(Status, verbose_name=("relation Status"), on_delete=models.SET_NULL,null=True)
    idCompte = models.ForeignKey(Compte, verbose_name=("relation Compte"), on_delete=models.SET_NULL, null=True)
