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
                       <div class="page-detail">
					<h1 class="detail-title">前行，潜行</h1>
					<div class="detail-attributes">
						<p class="detail-date">[蒋梦莹 硕士研究生 南京财经大学 会计学 08届]　　发布日期：2013-05-15</p>

						<div class="detail-share">
<!-- JiaThis Button BEGIN -->
<div class="jiathis_style">
	<a class="jiathis_button_qzone"></a>
	<a class="jiathis_button_tsina"></a>
	<a class="jiathis_button_tqq"></a>
	<a class="jiathis_button_weixin"></a>
	<a class="jiathis_button_renren"></a>
	<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
	<a class="jiathis_counter_style"></a>
</div>

						</div>
					</div>

					<div class="detail-content">
						<!-- 正文内容全部动态替换，开始。 -->
						<p style="text-align:center"><img alt="" src="http://www.pccpa.cn/uploadFiles/oldFiles/jmy(2).jpg" style="height:166px; width:300px"></p>

<p><strong>初始之路</strong></p>

<p>2012年，一个春光明媚的日子，我带着些许的憧憬和向往，步入EAC。7年的校园时光转瞬即逝，校园、课堂、图书馆、运动场渐渐遥远，但我的心中没有悲伤。闭上眼，依然还记得上班第一天阳光温暖地洒在身上，我提着电脑穿梭在车水马龙之中。早晨的空气带一丝清新，簇拥在匆匆忙忙的上班族里，我的心情是如此雀跃，因为这一天，我坚定地踏下了人生崭新的一步，从这一天起任重道远。</p>

<p><strong>蹒跚学步</strong></p>

<p>迷茫，有时候像一团阴云，弥漫在心头，久久不散。入职之初，如盲人摸象一时无法理清全部。看着别人忙的昏天暗地，自己却爱莫能助，我心中充满忧虑和失落。常常站在临窗的位置，一个人静静地仰望天空。阳光柔和的倾泻，落下一地的斑驳。那么静，静得只听到心中的声音，那便是坚持不放弃。</p>

<p>我的生活开始变得丰富。没有项目的时候像在学校那样，一个人看培训的课件做笔记；有时候借来别人的项目底稿，认真的翻阅，看他们的思路过程，不明白的汇总起来去问一问；也有时记下自己对某一个方法的理解，当做一个小小的总结。每当一点小问题迎刃而解的时候，心中都有一种敞亮的感觉，这种难以言表的愉悦让生活变的灿烂多彩。</p>

<p><strong>机会青睐</strong></p>

<p>不得不说，我是幸运的。2012年7月1日，《资产评估准则-企业价值》正式生效，行业又一次展开对评估方法的探索。对于项目不多的我来说，虽然经验有限，却拥有难得的思考时间。笨鸟先飞，我很感激领导给予我的帮助和信任，在“尖山光电”的项目中，我第一次尝试用市场法来评估，虽然最终项目暂告一个段落，但也给了我难得的尝试和思考的机会，能够更清晰的了解在整个执行过程中可能的难点和存在的问题。项目之后我完成了一篇《上市公司比较法实务中存在问题探讨》的文章，作为这一项目的小结。在11月“希陶药业”的项目中，我再一次荣幸地负责市场法评估，我非常感谢领导对我的信任和对新方法的重视，质量标准部专门开会探讨本次实务中存在的问题，提出了许多重要的意见，完善了我对这一方法的理解。之后，我也参与了“地博矿业”项目和“德勤集团”项目的市场法，我想我会更加努力在空余时间多学习，用自己的绵薄之力理清思路，做好本分的工作。</p>

<p><strong>前路之遥</strong></p>

<p>入职9个月来，我遇到过困境，也有过感动。在这个气氛融洽的集体里，没有孤单。从入职到今天，有许多同事在无私的帮助我，对各种初入门的浅显问题，都给予不厌其烦的答复。</p>

<p>但是毕竟经验有限，我所了解和掌握的依然很浅显，特别是工作以后经常会感到书到用时方恨少。理论与实务可能有一定的差距，但往往理论指引着实务的方向，实务推动理论的发展，两者缺一不可。在未来的工作中，我对自己有这样的要求：理论上更深入，实务中更专业。</p>

<p>漫漫前路，我希望潜心学习，通过自己的努力，总结每一个项目中的所得和所失，引以为鉴。作为评估行业一名普普通通的从业者，作为与评估专业结下7年之缘的求学者，我依然希望将之作为人生的理想，希望有一天真的可以成为行业中有用之人，为行业的发展尽一己之力，终有一天能够成为行业的优秀成员。</p>

<p>在理想中前行，在探索中潜行。</p>

<p style="text-align:right">&nbsp;作者：蒋梦莹</p>
<!--中间内容部分结束--><!--中间大框架结束--><!--右边大框架结束-->
						<!-- 正文内容全部动态替换，结束。 -->
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
  a{color:#555;font-weight: bold}
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
.detail-content {
    color: #7d7d7d;
    margin-top: 30px;
}
.detail-list {
    padding-top: 50px;
    margin: 0 120px;
}
.detail-item {
    margin-bottom: 70px;
}
.detail-item .item-head {
    padding-bottom: 10px;
    border-bottom: 1px solid #969696;
    margin-bottom: 15px;
}
/* .detail-content h3 {
    color: #fff;
    display: inline-block;
    font-size: 20px;
    font-weight: normal;
    line-height: 50px;
    padding: 0 20px;
    background-color: #3a8bc8;
    margin-bottom: 30px;
} */

.detail-item h3 {
    display: inline-block;
    color: #4f8bbf;
    width: 200px;
    font-size: 20px;
}
</style>


