<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img :src="this.$url+'images/companypg/banner-about.jpg'" alt="" srcset=""></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2">
                <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">{{val.menu2}}</div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/serve">服务领域</a>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/customer">客户资源</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/n3b">新三板</router-link>
                  </li>
                </ul>
              </div>
              <div class="col-10">
                <div>
                    <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
                    <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
                      <router-link to="/">首页</router-link>-<router-link to="/">{{val.menu2}}</router-link>-<router-link to="/news">{{val.menu}}</router-link>
                    </div>
                </div>
                <div style="text-align:left;border-top:1.5px solid #666;clear:both;margin-right:2%;text-indent: 30px;padding-top:70px;">
                    <div class="page-detail">
					<div class="detail-text">
						<h3 class="area-text-title" style="background-color: #528dc1;">工程投资咨询和基建审计服务</h3>

						<p>　　天健注重工程投资咨询、基建审计和工程项目管理业务发展的专业化、制度化、规范化和程序化建设，执行行业规范和审计质量控制方面深得有关部门和广大客户的肯定和好评。具体业务范围主要为：</p>
						<p>&nbsp;</p>
						<p>1. 编制、审核工程概、预、结算；</p>
						<p>2. 编制、审核竣工决算；</p>
						<p>3. 投资控制及工程造价过程控制咨询；</p>
						<p>4. 工程咨询、工程招标代理；</p>
						<p>5. 工程标底或投标报价；</p>
						<p>6. 经济信息咨询。</p>
					</div>

					
<!--工程投资咨询-->
<div class="area-contact">
	<dl>
		<dt>欢迎垂询</dt>
		<dd class="telphone1"><i></i><span>0571-87855372</span></dd>
		<dd class="telphone2"><i></i><span>0571-87559100</span></dd>
		<dd class="email"><i></i><span><a href="email:zhoub@pccpa.cn">zhoub@pccpa.cn</a></span></dd>
		<dd class="address"><i></i><span>杭州市钱江路1366号华润大厦B座</span></dd>
	</dl>
</div><!-- .area-contact END -->
				</div>
                </div>
                

                <div style="text-align:left">
                  <img src="../../assets/img/easy6.png">
                </div>

              



              </div>
            </div>  
       </div>


















       <foot/>
    </div>
</template>


<script>
import top from '@/components/top.vue'
import foot from '@/components/foot'
import $ from 'jquery'
let notClick=true;
export default {
  name: 'leftm',
   props: {
    sendval: Array,
    required: true,
  },
    data: function () {
    return {
      isActive: true,
      hasError: false,
      val:{menu:"服务领域",menu2:"专业服务"},
      content:"",
      test:""
    }
  },
  computed: {
  classObject: function () {
    return {
     
    }
  }
  },
  mounted:function(){
       let self=this

       createcode();//需要触发的函数
      function createcode() {

//-------------------------------去后台获取新闻列表-----------------------------------------------------
        let menu=self.val.menu
         self.axios.post(self.$url+'companypg/getNewsList',{menu})
                    .then(function(res){
                      console.log(res.data)
                      self.content=res.data
 
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                            //console.log err message
                        }
                    })

      }

  },
  methods: {
    changeColor: function (event) {
        $('.flex-column a').css({'color':'#666',"background":"#fff"})
        $(event.target).css({'color':'#fff',"background":"rgb(62, 189, 147)"}) 
    },
    changeColorOut: function () {
        if(notClick){
        $('.flex-column a').css({'color':'#666',"background":"#fff"})
        $('#one').css({'color':'#fff',"background":"#7ebeef"})
        }
    },
  },
  components: {
    top,
    foot,
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-column a:hover{color: #fff;background: rgb(62, 189, 147)}
  a{color:#555}
  a:hover{color:goldenrod;}
  #fl>a{float: left;margin-bottom: 20px}
  .area-text-title {
    color: #fff;
    display: inline-block;
    font-size: 20px;
    font-weight: normal;
    line-height: 60px;
    padding: 0 20px;
    background-color: #358cc5;
    margin-bottom: 60px;
    text-indent:0
}
 p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}



</style>


