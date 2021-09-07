# ecommerce
>Django fully eCommerce web app.

The following steps will walk you thru installation on a Mac. I think linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed django apps on Windows, you should have little problem getting up and running.

###### Setup:
- Python 3.6
- postgresql-12.15
- 

If you want to run the Django project in you local development server please follow the insturctions below:

```bash
git clone https://github.com/mbrsagor/ecommerce.git
cd ecommerce
virtualenv venv --python=python3.6
source venv/bin/activate
pip install -r requirements.txt
```

Then update your database information:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'dbname',
        'USER': 'bduser',
        'PASSWORD': 'dbpassword',
        'HOST': 'localhost',
        'PORT': 'bd_port',
    }
}
```

Finally the run sever:
```
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

###### Happy coding ######
