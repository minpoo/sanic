from sanic import Sanic
from api.cloud.login import cloud
from api.master.index import master
from api.pay.notify import notify
from api.pay.pay import pay
from sanic import Sanic  # 注册sanic框架
from sanic_cors import CORS, cross_origin  # 跨域组件
from mongo.connect import mongoconnect
from sanic_motor import BaseModel
# from api import api
# from mongo.connect import test
app = Sanic(__name__)  # 注册app
CORS(app)


settings = dict(MOTOR_URI='mongodb://mongo.imdo.co:20000/myapp',
                LOGO=None,
                )
app.config.update(settings)

BaseModel.init_app(app)




# 引入文件
# 蓝图注册路由
app.blueprint(pay)
app.blueprint(notify)
app.blueprint(master)
app.blueprint(cloud)
# static
app.static('/static', './static')
app.static('/vue', './vue')
#app.static('/example_static', './example_static', host='www.example.com')






app.run(host='0.0.0.0', port=8000, auto_reload=True, debug=False)
