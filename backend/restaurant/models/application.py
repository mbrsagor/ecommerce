from base.models.base import BaseEntity
from django.db import models


class ApplicationSetting(BaseEntity):
    logo = models.ImageField(upload_to='application/% Y/% m/% d/', blank=True, null=True)
    favicon = models.ImageField(upload_to='application/% Y/% m/% d/', blank=True, null=True)
    site_name = models.CharField(max_length=100, default='My site')

    def __str__(self):
        return self.site_name[:30]
