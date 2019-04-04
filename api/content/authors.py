# api/content/authors.py
from sanic import Blueprint
from sanic import response
authors = Blueprint('content_authors', url_prefix='/authors')

# @authors.middleware('request')
# async def bp1_only_middleware(request):
#     print('applied on Blueprint : bp1 Only')

@authors.route('/test')
async def bp1_route(request):
    print('applied on Blueprint : bp00000 Only')
    return response.text('bp1')