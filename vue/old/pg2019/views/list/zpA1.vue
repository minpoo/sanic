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
					<h1 class="detail-title">明天，你好 </h1>
					<div class="detail-attributes">
						<p class="detail-date">[宦黎明 宁波大学 会计学（CGA方向） 08届]　　发布日期：2013-05-15</p>

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
                          
                            <!-- JiaThis Button END -->
						</div>
					</div>

					<div class="detail-content">
						<!-- 正文内容全部动态替换，开始。 -->
						<p style="text-align:center"><img alt="" src="http://www.pccpa.cn/uploadFiles/oldFiles/hlm.jpg" style="height:166px; width:300px"></p>

<p>以前，我常觉得一年很长，365个日日夜夜，要经历春夏秋冬四季变化，每一天规律地重复着从晨读到晚自习的日子，一年时间可以上很多很多课，要经历十几场考试的煎熬，每一年我们都是过着寒假期盼暑假，望着五一想着十一。但是现在，当我站在杭州铺满金色银杏的街道上，回想起去年十二月初来天健的时光，不禁感叹一年真的很短，短到校园里的一切还历历在目而我已经离开它长达半年，短到当我觉得自己还是一名10月新进的员工而事实上我和天健已相识一年之久。</p>

<p>去年12月我带着十二分的忐忑来到新湖，看见大厦门口一群拖着大大小小行李的年轻人很是好奇，电梯上了七楼看见空空荡荡的办公室很是惊讶，坐定后一直分不清实习生和正式员工很是惆怅。事务所里的一切都让我这个初来乍到的菜鸟觉得新奇，从打的开却不知道如何使用的审计软件到让人摸不着头脑的审计底稿和长长的索引号，从长相怪异的打孔机到又厚又重的“白皮砖头”，我不明白这些东西从哪里来又各自有些什么作用。</p>

<p>年报开始之后我开始渐渐地了解审计，最先和我结缘的是费用类的科目，印象中整个外勤期间我都在纠结管理费用，虽然现在看起来它们并不是那么复杂，但是对于第一次接触底稿的我来说，费用是一个纷繁复杂的浩大工程，从费用明细表的制作，到各项目发生额的分析，到诉讼费等特殊项目的关注，无论是工资勾稽、跨期测试还是审计调整审定表编制，每一个程序想想都觉得不难，可是真正做起来又都不像想象的那般容易。人生中的每一个第一次都会让人印象深刻，在不断的犯错中找寻正确方向的过程，在老师的指导下领悟新的方法的过程让我的思路从混沌走向清晰。现在想想，其实只有清晰的思路才能展现清晰的底稿，才更便于找到企业账务处理中的问题，无论哪家客户的哪个科目，只要用心做总会收获些新想法，感受到一些小小的乐趣和满足。</p>

<p>三个半月的实习生活过得充实而快乐，大致了解了审计的总体流程，揭开了审计底稿的神秘面纱，认识了一群热情乐观的审计人，融入了一个温暖快乐的审计小集体，结缘了几只菜鸟小伙伴，学习了一些审计知识，领悟了一点审计新思路，感受到属于审计人的那份执着与辛苦。</p>

<p>十月份正式入职之后，我认识到我们已经成为天健真正的一员，不能仅仅以实习生的标准来要求自己，未来会有更大的挑战在等着我们，每做一个新的科目可能都要经历从迷茫到清晰的或艰难或曲折的摸索过程，每一个第一次尝试可能都会耗费更多的时间和精力，但是成长不都是这样吗，没有不思考就能得到的结果，没有不努力就能实现的目标，也没有不辛苦就能换来的满足感。</p>

<p>在两次预查中，我开始渐渐接触一些除费用和应付职工薪酬之外的科目，开始尝试做内控，从原来仅仅从账面上微观的视角看企业，到逐渐更加关注被审计单位的主要产品，竞争力，销售市场，供应商变化等企业的整体的环境和运营模式；从仅仅坐在会议室对着电脑写底稿，到逐渐多的穿梭在财务室、采购部甚至仓库了解企业的生产经营状况；从枯燥的数字整理到有趣的沟通了解企业，这个过程赋予了数字意义，每一个比率变化都不仅仅是数字增减变化而已，它可能代表着更加丰富的内容，当僵硬的数字和鲜活的企业结合在一起，审计展现出了新的魅力。</p>

<p>在实习和预查的过程中，我感觉到自己要不断加强专业知识的学习，不断积累经验，提高审计的质量和效率，更加认真、积极和细致的完成工作。审计是一条漫长的道路，只有踏实地走好每一步才能走得更远，只有用心领悟，才能感受沿路的风光。</p>

<p>未来的日子里，可能都要在年报-考试-预查的循环中度过了，没有了寒假暑假的悠闲，也没有那么多节日可以期盼，或许也没有双休可以放空，可能一年会变得越来越短，短到可以用外勤的次数来计算，但是未来的每一天，我们都会带着收获的满足感入睡，携着新的灵感苏醒，无论遇到多大的阴雨，我们都会带着明媚的心情看太子湾的春，西湖的夏，虎跑的秋，断桥的冬。</p>

<div class="cyfc_zz" style="text-align: right">作者：宦黎明</div>

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


