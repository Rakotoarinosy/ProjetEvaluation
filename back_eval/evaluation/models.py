from django.db import models

# Create your models here.
class Role(models.Model):
    nomRole = models.CharField(max_length=50)
    
class User(models.Model):
    nomUser = models.CharField(max_length=250)
    emailUser = models.EmailField(max_length=254)
    
    def __str__(self) -> str:
        return self.nomUser

class Classe(models.Model):
    nomClasse = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.nomClasse

class Prof(models.Model):
    nomProf = models.CharField(max_length=250)
    
    def __str__(self) -> str:
        return self.nomProf
    
class Lycee(models.Model):
    nomLycee = models.CharField(max_length=250)
    
    def __str__(self) -> str:
        return self.nomLycee
    
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
    label = models.CharField(max_length=50)
    idLycee = models.ForeignKey(Lycee, verbose_name=("relation Lycee"), on_delete=models.SET_NULL,null=True)
    
    def __str__(self):
        return self.label
    
    
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
