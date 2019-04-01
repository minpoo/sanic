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
					<h1 class="detail-title">校园招聘常见问题解答</h1>
					<div class="detail-attributes">
						<p class="detail-date">发布日期：2018-05-17</p>

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

					<div class="detail-content" style="width: 800px; margin: 0 auto;"> 
						<p>&nbsp;</p>
						<h1 class="detail-title" style="text-align:left;">第一部分 网申篇</h1>
						<p>&nbsp;</p> 
						
						<h3>一、投递简历时，每位同学可以申请几个岗位？</h3>
						<!-- p><img src="../img/pic-50.jpg" /></p -->
						<p style="text-indent: 32px;">网申时，每位同学至多可以填写三个志愿，若前一志愿简历审核没有通过，会流转至下一志愿。</p>
						<p>&nbsp;</p>

						<h3>二、网申出现故障怎么解决？为什么邮件无法正常接收？</h3>
						<p style="text-indent: 32px;">在网申过程中出现技术性故障，可以添加天健技术支持（QQ：3453592298）解决。天健招聘团队群发的邮件容易被QQ邮箱拦截，建议填写网易邮箱重试。</p>
						<p>&nbsp;</p>
						
						<h3>三、宣讲现场可以交简历吗？当天能不能面试？</h3>
						<p style="text-indent: 32px;">宣讲会可以提交简历，HR将向条件符合要求的同学发出面试邀请。但专场招聘会将优先安排已经网申并通过简历筛选的同学参加面试。因此建议在专场招聘会前完成网申。</p>
						<p>&nbsp;</p>
						
						<h3>四、网申或面试的结果多久可以查询，如何查询？</h3>
						<p style="text-indent: 32px;">面试通知将会以短信和邮件的形式发送。面试通过的同学会在面试结束后3个工作日内收到实习考察通知书。</p>
						<p style="text-indent: 32px;">你可以登陆天健网申系统，点击“我的简历”查看，或者关注“天健招聘”微信公众号，进入个人中心，查看招聘进度。</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h1 class="detail-title" style="text-align:left;">第二部分 应聘篇</h1>
						<p>&nbsp;</p> 						
						<h3>一、我想应聘的分所没有参加本次宣讲会，去未参加现场招聘的分所工作，能参加这次面试吗？（能否到其他分所就业？）</h3>
						<p style="text-indent: 32px;">未参加本次宣讲会的分所，需其他招聘团队代为面试的，均会事先通知。</p>
						<p style="text-indent: 32px;">当然，你也可以参与本次面试，若通过面试，我们将向你的意向分所推荐，最终由该分所作后期安排（约定时间再行面试或直接进入实习考察环节）。</p>
						<p>&nbsp;</p>
						
						<h3>二、非财务审计专业的同学可以应聘贵所的财务审计岗位吗？</h3>
						<p style="text-indent: 32px;">天健鼓励各专业多元化发展，但非财会专业的同粗人应聘财务审计岗位，必须要有1～2点较为突出的优势，如：全国重点大学毕业、辅修会计相关专业、已通过注会等相关资质考试若干门、计算机或英语等能力非常突出等等。</p>
						<p>&nbsp;</p>

						<h3>三、我们学校和城市没有天健的专场招聘会，我怎么参加面试？</h3>
						<p style="text-indent: 32px;">若简历审核通过，HR会按照就近原则安排专场招聘会的现场面试。如重庆地区高校的同学申请应聘杭州总所，我们会就近安排在成都的专场招聘会进行面试。若有通过简历筛选但无法参加校园专场面试的同学，也可以参加安排在11月下旬～次年2月的天健所内面试。</p>
						<p>&nbsp;</p>

						<h3>四、公务员或研究生考试结束后是否仍有招聘名额？</h3>
						<p style="text-indent: 32px;">对于有意向应聘天健的同学，建议尽早投递简历，参加面试及实习考察。研究生考试结束后将根据岗位需求与招聘情况作下一步的安排。从往年来看，还是会推选部分优秀人员参加面试的。</p>
						<p>&nbsp;</p>

						<h3>五、应聘的研究生， CPA考试是否必须通过三门以上？</h3>
						<p style="text-indent: 32px;">注会考试通过情况是一个重要的参考指标，但不是绝对的要求，HR会对应聘人员的综合条件和能力进行考量。</p>
						<p>&nbsp;</p>

						<h3>六、从何途径可以获取天健2018校招的最新动态？如何参加天健的校园招聘宣讲会？</h3>
						<p style="text-indent: 32px;">你可以通过新浪微博和微信公众号关注“天健招聘”，获得最新的招聘动态，关注宣讲会动态。</p>
						<p>&nbsp;</p>

						<h3>七、在面试和今后工作中，天健更加看重学生的哪些素质？</h3>
						<p style="text-indent: 32px;">主要看重学习能力、专业胜任能力、沟通能力、团队合作精神和职业倾向等。</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h1 class="detail-title" style="text-align:left;">第三部分 实习考察篇</h1>
						<p>&nbsp;</p> 

						<h3>一、何时开始实习考察？</h3>
						<p style="text-indent: 32px;">面试通过的同学会在面试结束后3个工作日内收到实习考察通知书，届时HR将会公布报到计划。同学们可以根据自身安排，选择就近批次报到。但我们建议面试通过的同学尽早安排时间来所实习考察，以免失去早签三方协议的优势。</p>
						<p style="text-indent: 32px;">未在规定的期限内来所报到的，不再保留实习名额；逾期后仍要求参加实习的，本所将根据实际情况再行决定是否安排实习。</p>
						<p>&nbsp;</p>

						<h3>二、实习考察期长短？签约后仍需要实习吗？</h3>
						<p style="text-indent: 32px;">每位实习生在报到后即开始为期1～2个月的实习考察。实习生在实习期间需对参加的每一个项目进行记录，由带队人员进行考核，实际出勤天数满30天后可发起考核申请。</p>
						<p style="text-indent: 32px;">若无特殊情况，我们希望签约后的实习生能继续参与后续的实习，以完成一整个年报审计（12月至次年4月），积累更多实务经验，为今后的工作打下良好的基础。</p>
						<p>&nbsp;</p>

						<h3>三、天健是否设置了实习考察淘汰率？</h3>
						<p style="text-indent: 32px;">我所不设置淘汰率。只要在实习期间表现积极、态度认真、充分展现出自己的才能并坚持完成实习，除个别人员确实与岗位要求不相适应等原因，大部分人都能通过实习考核。</p>
						<p>&nbsp;</p>

						<h3>四、实习考察阶段的实习待遇如何？是否安排住宿？</h3>
						<p style="text-indent: 32px;">杭州总所的实习补贴标准是2010元/月（全勤），各分所的实习补贴标准因地域原因会存在一定差异，但均不会低于当地最低工资标准。</p>
						<p style="text-indent: 32px;">实习期间，若是外出执业，食宿由我所统一安排，并且实习生在我所实习时的外勤机会是非常多的，也就是说实习生在我所实习，大部分时间都会由我所承担食宿费用。因此我所提供的实习补贴基本能够满足各位的生活所需。</p>
						<p style="text-indent: 32px;">目前除部分分所，如重庆分所提供实习生宿舍之外，总所及大部分分所没有统一的住宿安排。外地院校学生前来实习需要自己解决住宿问题，但各所均会提供事务所附近或地铁沿线租房信息（月租、日租等形式）以供实习生参考选择。</p>
						<p>&nbsp;</p>

						<h3>五、参加“暑期实习生计划”获得免面试实习考察资格的，是否将被分配至原部门？可以选择与暑期不一样的城市或者岗位吗？</h3>
						<p style="text-indent: 32px;">一般情况下，免面试的同学会被分配至原部门参加实习考察。</p>
						<p style="text-indent: 32px;">可以选择与暑期不一样的就业地点或者岗位，但是不享受免面试实习考察的资格，你需要重新经历简历筛选和招聘面试环节。不过暑期实习所的HR会为你做推荐。</p>
						<p>&nbsp;</p>


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


