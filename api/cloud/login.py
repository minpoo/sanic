#from sanic.response import json
from sanic import Blueprint
from sanic import response
from sanic.response import json
cloud = Blueprint('cloud')
@cloud.route('/cloud/<name>')  # 启用路由name类似于：id路径解析
async def bp_root(request, name):  # 以name为路径索引
    # return json({"query_string": request.query_string})
    # return json({"received": True, "query_string": request.pay})
    if name == 'login':  # 判断路由
       ## print("request"+request)
        # flag = True  # 条件成立时设置标志为真
        # return response.text('Hello world!')
        #return json({ "received": True, "message": request.text })
        #return response.json({'message': 'Hello world!'})
        #return response.text('Hello world!')
        #return text("e")
        return json({ "parsed": True, "args": request.args, "url": request.url, "query_string": request.query_string })
