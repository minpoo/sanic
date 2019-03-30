from sanic.response import json
from sanic import Blueprint
from sanic.response import text
notify = Blueprint('notify')

@notify.route('/payok',methods=["POST",])
async def bp_root(request):
    print(request.body)
    #b'attach=%E4%BB%98%E6%AC%BE%E6%88%90%E5%8A%9F&mchid=1528856781&
    # openid=o7LFAwaNqGuSYPM68ZVP_NvPmf1g&
    # out_trade_no=c7b140384a2811e9961c40490f736d0c&
    # payjs_order_id=2019031917242300848330672&return_code=1&
    # time_end=2019-03-19+17%3A24%3A49&
    # total_fee=1&
    # transaction_id=4200000246201903196166644272&
    # sign=31268866A4143263820F2122D490B201'
    return text(request.body)