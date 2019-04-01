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
                <div style="text-align:center;border-top:1.5px solid #666;clear:both;margin-right:2%;text-indent: 30px;padding-top:70px;">
                  
                         <div class="detail-title">校园招聘网申招聘流程</div>
                         <p class="detail-date">[人力资源总部]　　发布日期：2015-06-03</p>


                         <div class="detail-content" style="text-align:left;">
						<!-- 正文内容全部动态替换，开始。 -->
						<p style="text-align:center">&nbsp;</p>

<p>1、应届毕业生招聘条件</p>

<p>　　专业对口、学业优秀（本科生班级成绩排名男女各前10名）、英语CET-6的应届大学本科一本或硕士毕业生。</p>

<p>2、基本流程</p>

<p><img alt="" src="http://www.pccpa.cn/uploadFiles/images/zhaopin/%E6%A0%A1%E5%9B%AD%E6%8B%9B%E8%81%98-%E6%8B%9B%E8%81%98%E5%8A%A8%E6%80%81-%E7%BD%91%E7%94%B3%E6%8B%9B%E8%81%98%E6%B5%81%E7%A8%8B.jpg" style="height:71px; width:751px"></p>

<p>3、校园专场招聘流程</p>

<p>（1）公布招聘信息</p>

<p>　　在天健网站及学校就业网提前发布招聘信息，包括：人员需求信息、录用条件、报名方式、联系方式、宣讲及面试时间、地点等。</p>

<p>（2）举行校园宣讲会</p>

<p>　　①简要介绍参加招聘的天健合伙人团队；</p>

<p>　　②观看宣传片——《天行健》；</p>

<p>　　③天健合伙人宣讲并与应届毕业生进行现场交流沟通；</p>

<p>　　④介绍具体面试安排。</p>

<p>（3）面试</p>

<p>　　宣讲会结束后当天或第二天即在学校举行面试。</p>

<p>（4）实习与体检</p>

<p>　　经面试合格者，进行实习考察（1-2个月）。实习考察合格后，组织体检。</p>

<p>（5）签订就业协议</p>

<p>　　经体检合格者，签订就业协议。</p>

<p>4、网申招聘流程</p>

<p>（1）公布招聘信息</p>

<p>　　通过天健网站发布招聘信息。</p>

<p>（2）应聘报名</p>

<p>&nbsp;　　应聘者根据招聘信息网投或邮寄简历、《应届毕业生应聘报名表》及相关材料至天健人力资源部。</p>

<p>（3）资格审查与面试通知</p>

<p>　　以学业成绩、录用条件等方面作为资格审查的主要内容。审查合格后，确定参加面试人员名单，并通知面试。</p>

<p>（4）其余流程同上述校园专场招聘流程中（4）—（5）所述。</p>

<p><img alt="" src="/uploadFiles/images/zhaopin/222222.jpg" style="height:261px; width:457px"></p>

						<!-- 正文内容全部动态替换，结束。 -->
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
      a:[
         {name:"1.应届毕业生招聘条件",src:""},
         {name:"2.基本流程",src:""},
         {name:"3.校园专场招聘流程",src:""},
         {name:"4.网申招聘流程",src:""}
        ],
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
}
</style>


