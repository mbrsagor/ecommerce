# ecommerce
>Django fully eCommerce web app.

The following steps will walk you thru installation on a Mac. I think linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed django apps on Windows, you should have little problem getting up and running.

###### Setup:
- Python 3.6
- postgresql-12.15

If you want to run the Django project in you local development server please follow the insturctions below:

```bash
git clone https://github.com/mbrsagor/ecommerce.git
cd ecommerce
virtualenv venv --python=python3.6
source venv/bin/activate
pip install -r requirements.txt
```

Then update your database information `.env` file: Please copy all information from `.env-sample` file then pasts the `.env` file.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'dbname',
        'USER': 'bduser',
        'PASSWORD': 'dbpassword',
        'HOST': 'localhost',
        'PORT': 5432,
    }
}
```

###### If you want to skip `postgresql` then may follow/use `SQlite` database in your local dev server.

Finally the run sever:
```
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

If you run the project `Docker` 1st install docker in your development/projection environment then follow the instructions:
```
docker-compose build 
docker-compose up
```
###### If you want to any migrate or something like that django command then follow the instructions:
```
docker-compose exec backend sh
```


###### Happy coding :) ######


###### Features:
- Fully eCommerce system without payment gateway service.
- Nice Frontend UI.
- Smart backend(Admin panel) with simple inventory management system.
- Frontend and Backend both side mobile responsive.
- Email sending configuration with SMTP.
- API service like, Restful APIs
