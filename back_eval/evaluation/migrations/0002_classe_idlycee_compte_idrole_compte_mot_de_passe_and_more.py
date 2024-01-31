# Generated by Django 5.0.1 on 2024-01-31 12:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluation', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='classe',
            name='idLycee',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='evaluation.lycee', verbose_name='relation Lycee'),
        ),
        migrations.AddField(
            model_name='compte',
            name='idRole',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='evaluation.role', verbose_name='relation Role'),
        ),
        migrations.AddField(
            model_name='compte',
            name='mot_de_passe',
            field=models.CharField(default='', max_length=128),
        ),
        migrations.AddField(
            model_name='user',
            name='idClasse',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='evaluation.classe', verbose_name='relation classe'),
        ),
        migrations.AlterField(
            model_name='compte',
            name='label',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.CreateModel(
            name='ClasseProf',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idClasse', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='evaluation.classe', verbose_name='relation classe')),
                ('idProf', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='evaluation.prof', verbose_name='relation prof')),
            ],
        ),
    ]
