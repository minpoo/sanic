# api/content/authors.py
from sanic import Blueprint
from sanic import response
conn = Blueprint('conn_mongo', url_prefix='/conn')

# @authors.middleware('request')
# async def bp1_only_middleware(request):
#     print('applied on Blueprint : bp1 Only')

