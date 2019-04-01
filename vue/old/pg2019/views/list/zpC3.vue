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
                    <div class="detail-content">
                      <div class="detail-list">
                        <div class="detail-item">
                          <div class="item-head">
                            <h3>
                              <router-link to="/list/zpA1">明天，你好</router-link>
                            </h3>
                            <span>[宦黎明 宁波大学 会计学（CGA方向）08届]</span>
                          </div>
                          <div class="item-content"><router-link to="/list/zpA1"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/oldFiles/hlm.jpg"></router-link>
                            <p class="item-text">
                            以前，我常觉得一年很长，365个日日夜夜，要经历春夏秋冬四季变化，每一天规律地重复着从晨读到晚自习的日子，一年时间可以上很多很多课，要经历十几场考试的煎熬，每一年我们都是过着寒假期盼暑假，望着五一想着十一。但是现在，当我站在杭州铺满金色银杏的街道上，回想起去年十二月初来天健的时光，不禁感叹一年真...<span class="more"><a href="detail.jsp?chid=002&amp;id=1404">&gt;&gt;</a></span></p>
                          </div></div>
							<div class="detail-item">
								<div class="item-head">
									<h3><router-link to="/list/zpA2">前行，潜行</router-link></h3>
										<span>[蒋梦莹 硕士研究生 南京财经大学 会计学 08届]</span>
									
								</div>

								<div class="item-content"><router-link to="/list/zpA2">
                      <img class="item-pic" src="http://www.pccpa.cn/uploadFiles/oldFiles/jmy(2).jpg">
                    </router-link>
									<p class="item-text">

初始之路

2012年，一个春光明媚的日子，我带着些许的憧憬和向往，步入EAC。7年的校园时光转瞬即逝，校园、课堂、图书馆、运动场渐渐遥远，但我的心中没有悲伤。闭上眼，依然还记得上班第一天阳光温暖地洒在身上，我提着电脑穿梭在车水马龙之中。早晨的空气带一丝清新，簇拥在匆匆忙忙的上班族里，我的心情是...<span class="more"><a href="detail.jsp?chid=002&amp;id=1405">&gt;&gt;</a></span></p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
									<h3><router-link to="/list/zpA3">转换角色 夯实基础</router-link></h3>
										<span>[彭博 本科 财务管理 安徽财经大学 08届]</span>
									
								</div>

								<div class="item-content">
									<router-link to="/list/zpA3"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/oldFiles/pb(1).jpg"></router-link>
									<p class="item-text">

转眼间，冬季又在不经意间来临了。回想自己从实习至今，与天健相识相知已近一年，不经感触颇多。“好雨知时节，当春乃发生。随风潜入夜，润物细无声。”而天健给予我的教育就像这知节好雨，滋润心扉。从一开始的懵懂不知，到现在作为一个正式员工，我经历自己人生很有意义的一次转变。从校园迈...<span class="more"><a href="detail.jsp?chid=002&amp;id=1406">&gt;&gt;</a></span></p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
								<h3><router-link to="/list/zpA4">成长2012</router-link></h3>
										<span>[刘敏 本科 信息管理 上海财经大学 07届]</span>
									
								</div>

								<div class="item-content">
									<router-link to="/list/zpA4"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/oldFiles/liumin.jpg"></router-link>
									<p class="item-text">

2012年是入职天健的第一年，也是我真正开始职业生涯的一年，回想起实习时的2010年年报，入职时的2011年年报，和马上要来临的2012年年报，时光在不经意间流逝。一年的时间让我在充实度过的同时自我成长，在成长中坚定了自己最初的选择。

一年的工作让我深切感到拥有过硬的专业能力和各种软实力是成为...<span class="more"><a href="detail.jsp?chid=002&amp;id=1407">&gt;&gt;</a></span></p>
								</div>
							</div>
							
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


