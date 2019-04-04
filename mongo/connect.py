import pymongo
from sanic import Blueprint 
mongoconnect = Blueprint('index')
# connect  mongodb
# myclient = pymongo.MongoClient('mongodb://mongo.imdo.co:20000/')
# #obtain each the database list
# dblist = myclient.list_database_names()

# # that show
# print(dblist) 
# #==> ['admin', 'config', 'local', 'user']


# # 连接到一个数据库（总）
# mydb = myclient["myapp"]

# # 连接到一个集合，或创建一个集合
# mycol = mydb["sites"]

# # 判断集合是否存在
# # collist = mydb. list_collection_names()
# # collist = mydb.collection_names()
# # if "sites" in collist:   # 判断 sites 集合是否存在
# #   print("集合已存在！")


# mydict = {"name": "RUNOOB", "alexa": "10000", "url": "https://www.runoob.com"}

# x = mycol.insert_one(mydict)
# print(x)
