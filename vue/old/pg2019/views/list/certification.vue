<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img src="../../assets/img/banner-services.jpg">></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2">
                <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">关于天健</div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                     <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/about">天健简介</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/hrshow">人力资源</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/organization">组织架构</router-link>
                  </li>
                  <li class="nav-item">
                  
                   <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/list/certification">执业资质</a>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/culture">天健文化</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#"></a>
                  </li>
                </ul>
              </div>
              <div class="col-10">
                <div>
                    <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
                    <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
                      <router-link to="/">首页</router-link>-<router-link to="/">关于天健</router-link>-<router-link to="/news">{{val.menu}}</router-link>
                    </div>
                </div>
                <div style="border-top:1.5px solid #666;clear:both;margin-right:2%">
                  <p style="margin-top:10px;text-align:left;margin-top:100px;">
                       天健在长期的执业过程中，积累了丰富的执业经验，获得了各级政府部门的肯定和市场的认可。拥有的主要执业资格包括：
                  </p>
                  <div class="row" style="color:#555;padding-top:80px;text-align:left;letter-spacing:2px;">
                    <div class="col-6" style="text-indent: 30px">
                     
                    <p>
                      >> 注册会计师法定业务
                    </p>
                    <p>
                      >> 证券期货相关审计业务
                    </p>
                    <p>
                          >> H股企业审计业务
                    </p>
                    <p>
                      >> 美国公众公司会计监督委员会（PCAOB）注册事务所
                    </p>
                    <p>
                      >> 中央企业审计入围机构
                    </p>
                    <p>
                      >> 金融相关审计业务
                    </p>
                    <p>
                      >> 从事特大型国有企业审计资格
                    </p>

                    <p>
                      >> 军工涉密业务咨询服务
                    </p>
                    <p>
                      >> IT审计业务
                    </p>
                    <p>
                      >> 税务代理
                    </p>
                    <p>
                      >> 工程造价咨询(甲级)
                    </p>
                    <p>
                      >> 工程预结算审价(一级)
                    </p>
                    <p>
                      >> 国家建设项目工程预决算审计验证(A级)
                    </p>
                    <p>
                      >> 工程咨询(甲级)
                    </p>

                    <p>
                      >> 招投标代理资格
                    </p>

                    <p>
                      >> 司法会计鉴定
                    </p>
                    <p>
                      >> 破产管理人资格
                    </p>
                    <p>
                      >> 浙江股权交易中心会员
                    </p>
                    



                   

                    </div>
                    <div class="col-6">
                      <img src="../../assets/img/pic-w500-h330-1.jpg" alt="" srcset="">
                    </div>

                  </div>
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
      val:{menu:"执业资质"},
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
</style>


