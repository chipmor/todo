from .settings import *

ENV = 'TEST'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'test.db.sqlite3'
    }
}
TESTING = True
DEBUG = True
