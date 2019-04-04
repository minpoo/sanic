# from sanic.response import json
from sanic import Blueprint
from sanic import response
from sanic.response import json
import pymongo
# connect  mongodb
myclient = pymongo.MongoClient('mongodb://mongo.imdo.co:20000/')
# obtain each the database list
# dblist = myclient.list_database_names()
# 连接到一个数据库（总）
mydb = myclient["myapp"]
mycol = mydb["sites"]
cloud = Blueprint('cloud')
@cloud.route('/cloud/<name>')  # 启用路由name类似于：id路径解析
async def bp_root(request, name):  # 以name为路径索引
    # return json({"query_string": request.query_string})
    # return json({"received": True, "query_string": request.pay})

    # cur = await mydb.find({})
    # print("cur==========================")
    # print(cur)
    # mydict = {"name": "RUNOOB", "alexa": "10000", "url": "https://www.runoob.com"}

    y = mycol.find()
    for x in y:
          print(x)

    if name == 'login':  # 判断路由
       # print("request"+request)
        # flag = True  # 条件成立时设置标志为真
        # return response.text('Hello world!')
        # return json({ "received": True, "message": request.text })
        # return response.json({'message': 'Hello world!'})
        # return response.text('Hello world!')
        # return response.text("e")
        # return uu()
        return json({ "parsed": True, "args": request.args, "url": request.url, "query_string": request.query_string })


