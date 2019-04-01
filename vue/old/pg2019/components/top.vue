<template>
<div >

  <div style="text-align:left;margin-top:20px;">
        <img width="200px"  src="@/assets/img/top-logo.png">
    <!-- <div class="col-7" style="text-align:right;line-height:60px;font-size:13px;"><router-link style="color:#8f8f8f;" to="/about">中文</router-link>|<router-link style="color:#8f8f8f;" to="/about">English</router-link></div> -->
  </div>

  <div class="row my" style="padding:5px;margin-top:10px;">
    <div class="col-1.5" ><router-link to="/" id="te" ><span >&nbsp&nbsp首&nbsp&nbsp页&nbsp&nbsp</span></router-link></div>
    <div class="col-1.5"><router-link to="/about">关于坤元</router-link></div>
    <div class="col-1.5"><router-link to="/add">人力资源</router-link></div>
    <!-- <div class="col-1.5"><a href="http://zhaopin.pccpa.cn">人力资源</a></div> -->
    <div class="col-1.5"><router-link to="/study">执业资质</router-link></div>
    <div class="col-1.5"><router-link to="/serve">专业服务</router-link></div>
    <div class="col-1.5"><router-link to="/news">公司动态</router-link></div>
    <div class="col-1.5"><router-link to="/contact">联系我们</router-link></div>
    <div class="col-3">
      <!-- <form class="form-inline">
        <input v-model="val" class="form-control" type="text" placeholder="搜索新闻">
        <button class="btn btn-success" @click="serch($event)" type="button">搜索</button>
      </form>-->
    </div>
  </div>

</div>

</template>

<script>

import $ from 'jquery'

$(function(){
  //  $(".my a").on("mouseenter",() => {
  //      $("#te").css({"background":"none","color:;"})
  //  })
  //  $(".my a").on("mouseleave",() => {
  //    $(this).css({"background":"none","color": "black"})
  //  })
})


export default {
  name: 'top',
  props: {
    msg: String
  },
   data: function () {
    return {
      val: "",
      }},
  methods: {
    serch:function () {
       let self=this
        self.axios.get(this.$url+"blankz?title="+this.val)
                    .then(function(res){
                     // console.log(res.data)
                     //拿到数据后，去渲染JSON.stringify
                     let data=JSON.stringify(res.data)
                   
                     //
                     location.href="#/list/blankSerch?val="+data
                    })
                    .catch(function(err){
                        console.log(err)
                    })

      
    }
  }
}

// import $ from 'jquery'


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row:nth-child(2)>div{margin-right: 20px}
.row:nth-child(2) a{color: black;padding:10px;line-height: 41px}
.row:nth-child(2) a:hover{background:#1977be;text-decoration: none;color:white;} 
</style>
