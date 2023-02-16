from django.db import models

class Project(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length=200)
    description = models.TextField()
    url = models.URLField(blank = True)
    
