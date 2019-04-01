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
                <div style="text-align:center;border-top:1.5px solid #666;clear:both;margin-right:2%;padding-top:70px;">
                   <div class="detail-content">
						<div class="detail-list">
							<div class="detail-item">
								<div class="item-head">
									<h3>
                                        <router-link to="/list/sxS1" style="text-align:left;">
                                         感谢一路上给予支持帮助的老师们
                                        </router-link>
                                    </h3>
										<span>[广东外语外贸大学    黄兰君   审计实习生    实习地点：杭州总部]</span>
									
								</div>

								<div class="item-content">
									<router-link to="/list/sxS1"<img class="item-pic" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/1-2.jpg"></router-link>
									<p class="item-text">　　第一次真正接触心仪许久的审计，一切都是那么新鲜，却又都在意料之中，对账，函证，盘点，各种替代截止穿行等测试……那些在课本中出现过的生硬的细枝末节，终于连贯成了一个完整而生动的系统，终于明白了学以致用的道理，也更坚定了我从事审计的最初心愿。感谢天健，感谢一路上给予支持帮助的老师们，我会珍惜这段难忘的实习经历。


</p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
                                    <h3><router-link to="/list/sxS2">缘分就是兜兜转转</router-link></h3>
										<span>[浙江工商大学   洪苏萍   审计实习生  实习地点：杭州总部]</span>
									
								</div>

								<div class="item-content">
									<router-link to="/list/sxS2"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/3-1.jpg"></router-link>
									<p class="item-text">　　缘分就是兜兜转转，不管怎样还是会在一起。被天健一路“虐”过来，短短三个月，心境大起大伏。很多事情因为不凑巧，所以来晚了。但毕竟贵人多许，倾囊相助，几次濒临放弃却还是坚持了下来。这些日子里，审计的忙碌与充实丰富了我的生活；同事的理解与包容增强了我的自信，我是这样的庆幸着，喜悦着。我会继续下去,以一颗更加成熟、饱满、热忱的心来好好迎接未来的挑战。


</p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
									<h3><router-link to="/list/sxS3">前进路上、感谢有你</router-link></h3>
										<span>[华中农业大学  孙斌  审计实习生   实习地点：杭州总部]</span>
								</div>

								<div class="item-content">
									<router-link to="/list/sxS3"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/3-2.jpg"></router-link>
									<p class="item-text">　　寥寥数语说不尽心中感慨，离开时想起的是埋头底稿中auditor们疲惫却充满激情的笑脸。一个多月的实习，感谢卢老师对我耐心指导和严苛要求、学到了凡事要寻根究底；感谢前辈们的殷切关心和激励鼓舞，砥砺我在疲倦时重振信心；感谢能够在七总二部学到详实具象的审计知识，前进路上、感谢有你，天健！


</p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
									<h3><router-link to="/list/sxS4">我愿陪你共享未来</router-link></h3>
										<span>[东北财经大学   张爽   审计实习生   实习地点：北京分所]</span>
									
								</div>

								<div class="item-content">
									<router-link to="/list/sxS4"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/3-3.jpg"></router-link>
									<p class="item-text">　　当我第一次接到实习日程时，其实我是拒绝的。你必须让我去体验一下45天，3个项目组，8个现场审计，N个加班的夜晚！！

                                　　duang！！！我想说：审计不止一面，当你学会观察众多账目中的端倪，学会探寻会计记账的意图，学会沟通，如此种种，每一次能够理解全新的账务处理方法与掌握一个完整的审计程序，你都会充满成就感。

                                　　感谢天健，感谢天健给我的这份美好，我愿陪你共享未来！


                                </p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
									<h3><router-link to="/list/sxS5">不枉年轻热血志气高</router-link></h3>
										<span>[南京审计学院   陈楠楠   审计实习生   实习地点：北京分所]</span>
								</div>

								<div class="item-content">
									<router-link to="/list/sxS5"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/2-1.jpg"></router-link>
									<p class="item-text">　　旅途颠簸天这里有，挑灯奋战夜这里有，难题情况时这里有，但是你不是孤独和无果地在奋斗，在这里有乐助友好的前辈和同事，在这里你会发掘自己蕴藏的能量，在这里你会发现自己一直在成长。感谢能在天健经历这样一次浴火重生般的年审实习，不枉年轻热血志气高。
                                    </p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
									<h3><router-link to="/list/sxS6">愿为天健一分子</router-link></h3>
										<span>[重庆工商大学  王贵林   审计实习生  实习地点：重庆分所]</span>
								</div>

								<div class="item-content">
									<router-link to="/list/sxS6"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/2-2.jpg"></router-link>
									<p class="item-text">缘定天健来实习，踏实认真做审计。

                                        专业工作实不易，时刻准备砺斗志。

                                        审计过程须严谨，一丝不苟按程序。

                                        全程依法要自律，保证不能出问题。

                                        底稿要求也是细，数据证据留痕迹。

                                        全组员工人心齐，同一目标共努力。

                                        确保任务按时毕，团结拼搏争朝夕。

                                        感谢组织重培育，愿为天健一分子。

                                        &nbsp;
                                        </p>
								</div>
							</div>
							
							<div class="detail-item">
								<div class="item-head">
								<h3><router-link to="/list/sxS7">天健，你值得拥有</router-link></h3>
										<span>[安徽财经大学    王倓    税务实习生    实习地点：杭州总部]</span>
								</div>
								<div class="item-content">
									<router-link to="/list/sxS7"><img class="item-pic" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/1-1.jpg"></router-link>
									<p class="item-text">　　从杭州钱塘江畔到湖南的浏阳河边，从宁波东海之滨到北京大运河旁，我了解到审计工作旅途辛苦却充满乐趣；从凭证测试、年末盘点资产到书写底稿、摘附注，我认识到初出茅庐的我要学习的还有很多。在天健实习两个月收获了很多，拿到OFFER是前进的动力。我相信，天健，你值得拥有！
                                        </p>
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
    text-align: left；
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
.detail-item a{
    text-align: left !important;
    text-indent: 0
}
.detail-item .item-head {
    padding-bottom: 10px;
    border-bottom: 1px solid #969696;
    margin-bottom: 15px;
    text-align: left
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
.temp2{
    font-weight:bold;
    color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;
}
</style>


