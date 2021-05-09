# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'onno',
        'USER': 'onnouser',
        'PASSWORD': '123456',
        'HOST': 'db',
        'PORT': '5432',
    }
}
