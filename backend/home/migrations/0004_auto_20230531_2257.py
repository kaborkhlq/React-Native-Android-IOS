# Generated by Django 2.2.28 on 2023-05-31 22:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_acma'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='animal',
            name='newM',
        ),
        migrations.AddField(
            model_name='animal',
            name='age',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='animal',
            name='name',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]