# api/content/authors.py
from sanic import Blueprint
print("@22")
authors = Blueprint('content_authors', url_prefix='/authors')