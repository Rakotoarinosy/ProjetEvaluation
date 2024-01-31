from django.db import models
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.
class Role(models.Model):
    nomRole = models.CharField(max_length=50)
    
<<<<<<< HEAD
class User(models.Model):
    nomUser = models.CharField(max_length=250)
    emailUser = models.EmailField(max_length=254)
=======
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
>>>>>>> 4e63dfd76e57794d081717828e1f305f2c102dce
    
    def __str__(self) -> str:
        return self.nomUser

<<<<<<< HEAD
class Classe(models.Model):
    nomClasse = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.nomClasse
=======
>>>>>>> 4e63dfd76e57794d081717828e1f305f2c102dce

class Prof(models.Model):
    nomProf = models.CharField(max_length=250)
    
    def __str__(self) -> str:
        return self.nomProf
    
<<<<<<< HEAD
class Lycee(models.Model):
    nomLycee = models.CharField(max_length=250)
    
    def __str__(self) -> str:
        return self.nomLycee
=======
class ClasseProf(models.Model):
    idClasse = models.ForeignKey(Classe, verbose_name=("relation classe"), on_delete=models.SET_NULL, null=True)
    idProf = models.ForeignKey(Prof, verbose_name=("relation prof"), on_delete=models.SET_NULL, null=True)
>>>>>>> 4e63dfd76e57794d081717828e1f305f2c102dce
    
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

class Compte(models.Model):
    label = models.CharField(max_length=50, unique=True)  # Champ unique pour l'identifiant de connexion
<<<<<<< HEAD
    mot_de_passe = models.CharField(max_length=128)  # Champ pour le mot de passe haché
    idLycee = models.ForeignKey(Lycee, verbose_name=("relation Lycee"), on_delete=models.SET_NULL, null=True)
=======
    mot_de_passe = models.CharField(max_length=128,default='')  # Champ pour le mot de passe haché
    idLycee = models.ForeignKey(Lycee, verbose_name=("relation Lycee"), on_delete=models.SET_NULL, null=True)
    idRole = models.ForeignKey(Role, verbose_name=("relation Role"), on_delete=models.SET_NULL, null=True)
>>>>>>> 4e63dfd76e57794d081717828e1f305f2c102dce
    
    def __str__(self):
        return self.label

    def set_password(self, raw_password):
        self.mot_de_passe = make_password(raw_password)  # Hachage du mot de passe

    def check_password(self, raw_password):
        return check_password(raw_password, self.mot_de_passe)  # Vérification du mot de passe    
    
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
