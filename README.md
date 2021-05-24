# fb-clone
Facebook clone web app.

##### Dependencies
> Prerequisites

- Python 3.8.5
- Django 3.2.3
- PSQL 13.00

The following steps will walk you thru installation on a Mac. I think linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed django apps on Windows, you should have little problem getting up and running.

#### Open your shell or terminal/ZSH then follow the steps below:

```bash
git clone https://github.com/mbrsagor/fb_clone.git
git fb_clone
virtualenv venv --python=python3.8
source venv/bin/activate
pip install -r requirements.txt
```

Then create `.env` file after that copy from `sample_env` file and paste all code.

```base
touch .env
```

After that run the project in your local or live server development platform.
```
./manage.py migrate
./manage.py runserver
```
