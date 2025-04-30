


INSTALLED_APPS += [
    'rest_framework',
    'drf_yasg',
    'corsheaders',
    'api'
]

MIDDLEWARE += [
    'corsheaders.middleware.CorsMiddleware',
]

CORS_ORIGIN_ALLOW_ALL = True
