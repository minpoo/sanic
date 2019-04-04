# api/__init__.py
from sanic import Blueprint

from .content import content

api = Blueprint.group(content, url_prefix='/api')
