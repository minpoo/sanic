<template>
  <div id="footer" style="margin-top:70px;">
    <div style="color:#8f8f8f;font-size: 17px;">
      <div>
        <router-link to>首页</router-link>|
        <router-link to>有偿资讯</router-link>|
        <router-link to>会员专区</router-link>|
        <router-link to>关于我们</router-link>|
        <router-link to>联系我们</router-link>
      </div>
      <div style="margin-top:30px;">© 2018-2019 上海凌惠网络科技有限公司版权所有 沪ICP备18044757号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      any: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  text-align: center;
  height: 180px;
  color: #fff;
  padding: 50px 0 30px;
  background-color: #4b5163;
  font-size: 12px;
}
a {
  color: #8f8f8f;
  font-size: 17px;
  margin-right: 30px;
  margin-left: 30px;
}
</style>
