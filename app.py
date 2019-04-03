from sanic import Sanic                            #注册sanic框架
from sanic_cors import CORS, cross_origin          #跨域组件
from sanic_motor import BaseModel
app = Sanic(__name__)                               #注册app
CORS(app)
settings = dict(MOTOR_URI='mongodb://localhost:27017/myapp',
                LOGO=None,
                )
app.config.update(settings)
BaseModel.init_app(app)
class User(BaseModel):
    __coll__ = 'users'
    __unique_fields__ = ['name']
    # __unique_fields__ = ['name, age']   # name and age for unique


# 引入文件
from api.pay.pay import pay
from api.pay.notify import  notify
from api.master.index import  master
from api.cloud.login import  cloud
# 蓝图注册路由
app.blueprint(pay)
app.blueprint(notify)
app.blueprint(master)
app.blueprint(cloud)
#static
from sanic import Sanic
app.static('/static', './static')
app.static('/vue', './vue')
#app.static('/example_static', './example_static', host='www.example.com')
app.run(host='0.0.0.0', port=8000,auto_reload=True, debug=False)
