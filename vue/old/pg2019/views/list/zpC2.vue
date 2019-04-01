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
                   <router-link id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled"  to="/add">{{list[0]}}</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#/list/addC1">{{list[1]}}</a>
                  </li>
                  <li class="nav-item">
                   <router-link  class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/addC2">{{list[2]}}</router-link>
                  </li>
                   <li class="nav-item">
                   <router-link  class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/addC3">{{list[3]}}</router-link>
                  </li>
                   <li class="nav-item">
                   <router-link  class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/addC4">{{list[4]}}</router-link>
                  </li>
                </ul>

                <div v-for="i in menu2" :key="i.id">
                     <div style="margin-top:10px;padding:15px;background:#1abc9c;">
                         <router-link :to="i.src" style="color:#fff;">{{i.name}}</router-link>
                     </div>
                </div>

              </div>
              <div class="col-10">
                <div>
                    <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
                    <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
                      <router-link to="/">首页</router-link>-<router-link to="/">{{val.menu2}}</router-link>-<router-link to="/news">{{val.menu}}</router-link>
                    </div>
                </div>
                <div style="text-align:center;border-top:1.5px solid #666;clear:both;margin-right:2%;padding-top:70px;">
                    <div class="detail-content">
                    <h3>天健特色</h3>
                    <p>在选人范围上：我们主张“五湖四海，不拘一格选拔人才”，录用的毕业生来自全国近20个省、市、县。</p>
                    <p>在用人方向上：我们实行四重方针，即“重视年轻人，重点培养年轻人，重用年轻人，重担让年轻人挑。</p>
                    <p>在育人方式上：我们注重“在实践中育人”：实行“导师制”，为每位新员工安排指导老师。</p>
                    <p>在培养方式上：我们要求毕业生“一年打基础，两年上水平，三年独当一面”。</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                    <h3 style="background-color: #a286c0;">在天健的发展</h3>
                    <h4>1.员工职级</h4>
                    <p>员工职级共分五大系列十三级。审计（评估、造价、咨询、技术）员、高级审计（评估、造价、咨询、技术）员（一）、高级审计（评估、造价、咨询、技术）员（二）、高级审计（评估、造价、咨询、技术）员（三）、项目经理（一）、项目经理（二）、高级项目经理（一）、高级项目经理（二）、经理（一）、经理（二）、经理（三）、高级经理（一）、合伙人。</p>
                    <p>&nbsp;</p>
                    
                    <h4>2.晋升渠道</h4>
                    <p>我们保持着顺畅的晋升渠道，按照年度考核情况，每1-2年晋升一级。晋升至合伙人的执业资历是：本科生工作满12年，硕士研究生工作满10年。</p>
                    <p>&nbsp;</p>
                    
                    <h4>3.分层次的专业培训</h4>
                    <p>针对应届毕业生，我们提供新员工上岗培训、助理人员继续教育培训、见习期满员工业务研讨等专业培训。</p>
                    <p>&nbsp;</p>
                    
                    <h4>4.富有竞争力的薪酬体系</h4>
                    <p>我们的薪酬体系包括：基本工资和浮动报酬、每半年发放一次的部门基金、年终奖、服务满四年后每年发放的激励奖、晋升到项目经理后发放的执业激励奖以及购房补助。此外，还有过节费、年度旅游费、通讯费等货币福利和每年一次的部门旅游；党、团、工会活动；晋升到经理层后的出国学习考察等非货币福利。</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                    <h3 style="background-color: #83b66d;">在天健的发展</h3>
                    <p>加入天健，和我们一同感受天健丰富多彩的生活吧 </p>
                    <p><img src="http://www.pccpa.cn/img/pic-43.jpg"></p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                    <h3 style="background-color: #f8c71b;">校企合作</h3>
                    <p>天健与国内部分知名院校如：浙江财经大学、浙江工商大学、杭州电子科技大学、宁波大学、云南财经大学等已建立校企战略合作关系并设立“天健奖学金”。</p>
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
       menu2:[{name:"招聘动态",src:"/list/zpC1"},
             {name:"为何选择天健",src:"/list/zpC2"},
             {name:"员工风采",src:"/list/zpC3"},
             {name:"常见问题解答",src:"/list/zpC4"},
             {name:"体检录用标准",src:"/list/zpC5"}],
      isActive: true,
      hasError: false,
      val:{menu:"校园招聘",menu2:"专业研究"},
      content:"",
      test:"",
      list:["校园招聘","社会招聘","实习生招聘","HR联系方式","网申入口"],
      my:[
        {img:"http://www.pccpa.cn/img/pic-37.jpg",date:"2014-01"},
        {img:"http://www.pccpa.cn/img/pic-38.jpg",date:"2014-02"},
        {img:"http://www.pccpa.cn/img/pic-38-2.jpg",date:"2015-09"},
        {img:"http://www.pccpa.cn/img/PANCHINA_VGD2017-8.jpg",date:"2017-09"}
         ]
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
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.filiales-wrap ul:after {
    content: "\20";
    display: block;
    clear: both;
    height: 0;
}
.page-detail {
    position: relative;
    color: #555;
    font-size: 16px;
    line-height: 2;
    text-align: justify;
    text-justify: inter-ideograph;
}
.detail-title {
    color: #535353;
    font-size: 25px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px dashed #dbd4cd;
    margin-bottom: 10px;
}
.detail-date {
    font-size: 12px;
    text-align: center;
}
.detail-content {
    color: #7d7d7d;
    margin-top: 30px;
    text-align: left
}
.detail-content h3 {
    color: #fff;
    display: inline-block;
    font-size: 20px;
    font-weight: normal;
    line-height: 50px;
    padding: 0 20px;
    background-color: #3a8bc8;
    margin-bottom: 30px;
}
</style>


