<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img :src="this.$url+'images/companypg/banner-about.jpg'" alt="" srcset=""></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2"> <div class="temp2">{{val.menu2}}</div>
               <ul class="nav flex-column">
                   <li class="nav-item">
                       <router-link id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled"  to="/add">
                        {{list[0]}}
                        </router-link>
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
					<h1 class="detail-title">天健暑期实习FAQ</h1>
					<div class="detail-attributes">
						<p class="detail-date">[人力资源总部]　　发布日期：2015-06-05</p>

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
						<h3>问题一：以前网申过其他岗位，但简历已审核不能修改，又不能重新投递怎么办？</h3>

<p>　　小招建议大家直接联系我。联系方式小招已经在微博发布可查，也可在天健官网实习生招聘计划和程序中可查。</p>

<h3>问题二&nbsp;有些分所不招实习，可以申请外地的吗？提不提供住宿？</h3>

<p>　　小招发布了一系列的实习岗位，大家可以根据自己的情况和未来规划自由选择。参加天健实习享受天健提供的实习补贴，但住宿需要自行解决。</p>

<h3>问题三&nbsp;简历之前投递过，现在想修改简历，显示未找到是怎么回事？</h3>

<p>　　这说明简历尚未投递成功，需要重新投递。</p>

<h3>问题四&nbsp;简历已经投递很久了，但尚未收到面试通知是怎么回事？只通知网申审核通过了的同学吗？（为什么别人收到面试通知，我却没有？）</h3>

<p>　　网申之后，小招会对简历进行筛选，但由于简历投递人数较多，面试将于六月十日至三十日期间分多批陆续展开，请大家耐心等待。筛选通过的同学会依次收到面试邀请。筛选未通过的同学，简历将进入我所人才库长期保存，由于人数过多小招不能一一通知，还请见谅。</p>

<h3>问题五&nbsp;外地的同学能不能考虑电话面试或者是视频面试呢</h3>

<p>　　考虑到部分同学在外地院校，小招会尽量安排灵活的面试方式，包括电话面试或视频面试。</p>

<h3>问题六&nbsp;我读大二可以申请天健暑期实习培训生吗?我读研一可以申请吗？</h3>

<p>　　天健暑期实习培训生是面向应届毕业生，本着就业为目的，通过暑期实习培训为即将毕业的同学提供全面接触天健文化和工作氛围的机会。暑期实习优秀的同学可直通实习考察拿OFFER。</p>

<h3>问题七&nbsp;从哪看有没有被审核呢？</h3>

<p>　　登陆天健官网实习生招聘，在修改简历端口尝试修改简历，如简历提示已审核不能修改，则说明简历已经审核。</p>

<h3>问题八&nbsp;天健暑期实习提供住宿吗？</h3>

<p>　　天健不提供住宿哦，不过将提供一定的实习补贴，同时在外勤期间是提供食宿的哦。</p>

<h3>问题九&nbsp;天健暑期实习的时间是？</h3>

<p>　　暑期实习生将通过为期一到两个月的实习在天健接触到审计实务和天健企业文化。具体实习时间，将根据实习生的暑期安排灵活制定。</p>

<p style="text-align:center"><img alt="" src="http://www.pccpa.cn/uploadFiles/images/zhaopin/%E5%AE%9E%E4%B9%A0%E7%94%9F%E6%8B%9B%E8%81%98-%E6%8B%9B%E8%81%98%E5%8A%A8%E6%80%81-2015%E5%B9%B4%E6%9A%91%E6%9C%9F%E5%AE%9E%E4%B9%A0%E7%94%9F%E6%8B%9B%E8%81%98%E8%AE%A1%E5%88%92%E5%92%8C%E7%A8%8B%E5%BA%8F-02.jpg" style="height:261px; width:699px"></p>

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
     menu2:[{name:"暑假实习生",src:"/list/sxA1"},
             {name:"招聘动态",src:"/list/sxA2"},
             {name:"实习生风采",src:"/list/sxA3"},
             {name:"常见问题解答",src:"/list/sxA4"},],
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
  },
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
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.detail-item h3 {
    display: inline-block;
    color: #4f8bbf;
    width: 200px;
    font-size: 20px;
}
.temp2{
    font-weight:bold;
    color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;
}
</style>


