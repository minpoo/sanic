import pymongo


def test():
    return


# connect  mongodb
# myclient = pymongo.MongoClient('mongodb://localhost:27017/')
# obtain each the database list
# dblist = myclient.list_database_names()

# that show
# print(dblist) ==> ['admin', 'config', 'local', 'user']

# if "admin" in dblist:
#     print("数据库已存在！")

# 连接到一个数据库（总）
# mydb = myclient["mypython"]

# 连接到一个集合，或创建一个集合
# mycol = mydb["sites"]

# 判断集合是否存在
# collist = mydb. list_collection_names()
# collist = mydb.collection_names()
# if "sites" in collist:   # 判断 sites 集合是否存在
#   print("集合已存在！")


# 增删改查
# 插入集合
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["runoobdb"]
mycol = mydb["sites"]

mydict = {"name": "RUNOOB", "alexa": "10000", "url": "https://www.runoob.com"}

x = mycol.insert_one(mydict)
print(x)
