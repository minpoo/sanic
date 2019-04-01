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
					<h1 class="detail-title">成长2012 </h1>
					<div class="detail-attributes">
						<p class="detail-date">[刘敏 本科 信息管理 上海财经大学 07届]　　发布日期：2013-05-15</p>

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
						<p style="text-align:center"><img alt="" src="http://www.pccpa.cn/uploadFiles/oldFiles/liumin.jpg" style="height:166px; width:300px"></p>

<p style="text-align:left">2012年是入职天健的第一年，也是我真正开始职业生涯的一年，回想起实习时的2010年年报，入职时的2011年年报，和马上要来临的2012年年报，时光在不经意间流逝。一年的时间让我在充实度过的同时自我成长，在成长中坚定了自己最初的选择。</p>

<div>一年的工作让我深切感到拥有过硬的专业能力和各种软实力是成为一名优秀注册会计师的必要条件，而良好的思考和沟通能力又是软实力的核心。</div>

<div>&nbsp;</div>

<div>关于思考能力，在工作中真实经历的一件事情，引发另外我对其的思考。在一次审计现场，外勤负责人对某件事情产生疑问，让我去向财务了解情况，当我把了解来的情况反馈给负责人时，他第一句就是“你信吗？”见我很沉默，他便把自己的思考过程讲了出来，最后得出的结论是财务的解释不合理。随后又陆续几次发生了类似情况，让我感慨很深：不能把某些问题财务的解释当成正解，要有自己的思考。当然还有很多很多这样的事情，比如说各级负责人的复核意见，不能仅仅只寻求一个回答，要想想回答的合理性，要能够经得起推敲、经得起别人追问。而我在最初接触审计时，像很多新手一样，对着底稿一片茫然，勉强按上年底稿依葫芦画瓢，不能考虑到某些审计程序因情况有变已不再适用，某些新情况需要执行新的审计程序。现在，我已在有意识的去思考审计程序要达到的审计目标，而不是单纯借鉴去年的底稿。更好地运用审计的思维方式去思考问题是我在今后要努力的方向。</div>

<div>&nbsp;</div>

<div>关于沟通能力，和客户同事的有效通能大大降低工作量，减少重复劳动，用最少的工作量来尽可能的降低审计风险。比如说对客户，如何拿到自己想要的资料需要沟通，如何就某个问题需要向客户了解情况需要沟通，有的问题不是客户给出的解释不合理而是你问的问题和客户理解的问题根本就不是一个问题。即使客户理解了也给出了解释，而你通过思考判断认为是不合理的，双方需要第二次第三次甚至更多次的沟通，如何不让客户产生厌烦情绪，都是需要很好的沟通技巧。</div>

<div>&nbsp;</div>

<div>记的一次部门曾对重印报告开过一个会议专门讨论其原因，让我感受尤为深刻，其实很多重印报告的原因总结起来都是沟通不畅造成的，为什么税费政策披露有误，那可能是因为没能和做税费的同事沟通，写附注的同事没能拿到这份本因该共享的信息。也可能是因为做税费的同事没能和企业及时沟通，想当然的沿用了上年的底稿。为什么报表链接错误，那是因为没能跟实习生很好的沟通告诉他链接一份报表要注意什么，告诉他链接报表的重要性。实习生不知道如何去链接报表，他也不知道如果报表链接错误会带来什么严重的后果，链出来的报表也没有经过认真的复核，重印报告就是同事缺乏沟通必然会产生的结果。</div>

<div>&nbsp;</div>

<div>这一年从最初和客户沟通的战战兢兢缺少底气，到现在的畏惧感消除双方能平等交流也算是沟通方面的一点提高，但对客户对同事如何做到让各方心情愉悦的同时又各取所需仍是今后的努力方向。</div>

<div>&nbsp;</div>

<div>今后我将继续培养自己的核心竞争力，在提高上述软实力的同时，更加不会松懈对专业知识的学习，为成为一名真正的专业人士而努力。</div>

<p style="text-align:right">&nbsp;作者：刘敏</p>

						<!-- 正文内容全部动态替换，结束。 -->
					</div>
					<!-- 
					< %
					News n1=dbq.getPrevNewsByID( request.getParameter("chid"),Integer.parseInt( request.getParameter("id")));
					News n2=dbq.getNextNewsByID(request.getParameter("chid"),Integer.parseInt( request.getParameter("id")));
					% >
					<div class="detail-forward">
						< %
							if (null==n2){
								out.println("<a class='next' href='#'>下一篇:没有了</a>");
							}else{
								out.println("<a class='next' href='detail.jsp?chid="+request.getParameter("chid") +"&id="+n2.idNews+"'>下一篇:"+n2.title+"</a>");
							}
							if (null==n1){
								out.println("<a class='prev' href='#'>上一篇:没有了</a>");
							}else{
								out.println("<a class='prev' href='detail.jsp?chid="+request.getParameter("chid") +"&id="+n1.idNews+"'>上一篇:"+n1.title+"</a>");
							}
						% >
					</div>
					 -->
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


