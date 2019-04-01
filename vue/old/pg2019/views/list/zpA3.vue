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
					<h1 class="detail-title">转换角色 夯实基础 </h1>
					<div class="detail-attributes">
						<p class="detail-date">[彭博 本科 财务管理 安徽财经大学 08届]　　发布日期：2013-05-15</p>

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
						<p style="text-align:center"><img alt="" src="http://www.pccpa.cn/uploadFiles/oldFiles/pb(1).jpg" style="height:166px; width:300px"></p>

<p>转眼间，冬季又在不经意间来临了。回想自己从实习至今，与天健相识相知已近一年，不经感触颇多。“好雨知时节，当春乃发生。随风潜入夜，润物细无声。”而天健给予我的教育就像这知节好雨，滋润心扉。从一开始的懵懂不知，到现在作为一个正式员工，我经历自己人生很有意义的一次转变。从校园迈向社会，从青春走向成熟，我走在了一个新的旅程。在慢慢融入天健这个大家庭的过程中，我学到了很多。如何学以致用？如何面对挑战？如何以平稳的心态去保持工作的效率？这些都给了我一份巨大的精神财富。下面，我想把自己的心得体会与大家共同分享。</p>

<p>一、子曰：“学而时习之，不亦说乎？”</p>

<p>学习，是一个永恒的话题。从我们呱呱坠地，到蓬勃发展，每个阶段都是建立在学习的基础上，是学习领导了我们的成长。进入社会工作，并不意味着学习的结束，反而是真正学习的开始。实习的一开始，自己真的是一无所知，不知道该如何去运用所学的专业知识去审计，只能照葫芦画瓢。然而慢慢地工作经历以及培训，让我开始明白何为审计？为何审计？而这完全比我在校时候的学习要深刻的多。那么，该如何去准备一次审计活动呢？在我们新进所的时候，陈老师就指导我们从以下几点着手：第一、在每次外勤前，获悉自己将要负责的科目，进而找到审计流程进行消化；第二、对于自己不懂的流程翻阅以前的底稿进行理解，以前底稿并未体现的，就向比自己有经验的人虚心请教；第三、对审计过程中出现的问题、解决方法以及审计心得进行记录，时常反复琢磨、研究；我想着这大概就是孔夫子所说的“温故而知新，可以为师矣”。此外，孔夫子教导我们“学而不思则罔，思而不学则殆”，也就是我们在努力学习的同时，不能忘记经常多思多想，举一反三，才能胜任自己的工作，不至于即使做了许多的项目，还是不知所以然。</p>

<p>二、子曰：“人而无信，不知其可也。大车无輗，小车无軏，其何以行之哉？”</p>

<p>一个人如果没有信用，该如何做人？审计工作的前提就是诚信。只有诚信公正的去进行审计，才能让财务报告的可信度增加。我所认为的信，有2个方面：其一、对工作诚信；这就是说我们在审计的时候应当客观公正，诚实独立，真实地反映事物的本质；其二、对他人诚信。这里的他人包括同事，上层，客户等等。诚信是做人的根本，与人相处，只有诚信才能使感情长久，才能让工作踏实，内心踏实。“信近于义，言可复也”。只有诚实面对自己的工作生活，才能获得更大的进步。错并不可怕，可怕的是掩饰错误。俗话说“有则改之，无则加勉”，做人就讲光明磊落，当我们对自己诚实的时候，世界上没有人能够欺骗的了我们。</p>

<p>三、子绝四：毋疑，毋必，毋固，毋我。</p>

<p>不主观臆测，不绝对肯定，不固执己见，不自以为是，是我们应当杜绝的四种毛病。眼见不一定为实，何况臆测？我们在工作的时候，需要有根有据，并悉心考虑他人的意见和建议，反复推敲。不是说“要知山下路，须问过来人”，只有多方听取不同的意见，才能得到正确的答案。心中装满着自己的看法与想法，永远听不见别人的心声。在审计这种对团队作业要求极高的工作中，谦虚谨慎是绝对的个人要求，只有明智才能不被诱惑。</p>

<p>以上三点，是我在工作过程中有感而发。我会以其为我工作的主心轴。我知道自己还远远不足，有时候会有懈怠惫懒，但是我会不断提醒自己，作为一个天健人，我应当具备的素质。踏实勤奋，诚实守信，是我一生受用的良言金句。</p>

<p>有诗云：“劝君莫惜金缕衣，劝君惜取少年时。花开堪折直须折。莫待无花空折枝。”工作是生命的新起点，是人生的新旅程，年轻的我们需要带着破釜沉舟的勇气，义无反顾的力量去迎接新生活的开始。我们不仅不能荒废年轻的时光，还要充分把握公司给予我们学习的机会，为自己人生的天枰多加一份筹码，为自己的生命多添一道色彩。“不经一番寒彻骨，怎得梅花扑鼻香”？</p>

<p>感谢逆境，因为逆境才给了我们生命茁壮的成长。俗话说：“海纳百川，有容乃大；壁立千仞，无欲则刚。”敢于接受别人的批评，才能进步。我要以乐观积极的心态，尽心竭力地追寻自己的事业，勇敢面对挑战，为自己的人生赢得最漂亮的一分！为我们第五审计总部业务三部增添一份荣耀！。</p>

<p>&nbsp;</p>

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


