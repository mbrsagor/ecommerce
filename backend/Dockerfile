# Base Image
FROM python:3.8

# Set an environment variable to store where the app is installed to inside
# of the Docker image.
ENV APP_HOME /app

# This sets the context of where commands will be ran in and is documented
# on Docker's website extensively.
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY requirements.txt requirements.txt

# update environment dependencies
RUN pip install --upgrade pip

# Install project dependencies
RUN pip install -r requirements.txt

# Copy code from working directory outside Docker to working directory inside Docker
COPY . .

# Set stop signal to SIGQUIT for graceful shutdown
STOPSIGNAL SIGQUIT

EXPOSE 8000

CMD gunicorn cfehome.wsgi:application --bind 0.0.0.0:$PORT
