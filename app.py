

from sanic import Sanic                            #注册sanic框架
app = Sanic(__name__)                               #注册app
# 引入文件
from api.pay.pay import pay
from api.pay.notify import  notify
# 蓝图注册路由
app.blueprint(pay)
app.blueprint(notify)

app.run(host='0.0.0.0', port=8000, debug=False)
