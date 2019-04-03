#from sanic.response import json
from sanic import Blueprint
from sanic import response
master = Blueprint('index')

@master.route('/')
async def bp_root(request):
    return response.redirect('vue/html/上海文益/index.html')
    