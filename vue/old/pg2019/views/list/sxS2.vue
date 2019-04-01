<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img :src="this.$url+'images/companypg/banner-about.jpg'" alt="" srcset=""></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2"> <div class="temp2">{{val.menu2}}</div>
               <ul class="nav flex-column">
                   <li class="nav-item">
                       <router-link  @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"   class="nav-link disabled"  to="/add">
                        {{list[0]}}
                        </router-link>
                   </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#/list/addC1">{{list[1]}}</a>
                  </li>
                  <li class="nav-item">
                   <router-link id="one" style="background:#7ebeef;color:#fff;" class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/addC2">{{list[2]}}</router-link>
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
					<h1 class="detail-title">缘分就是兜兜转转</h1>
					<div class="detail-attributes">
						<p class="detail-date">[浙江工商大学   洪苏萍   审计实习生  实习地点：杭州总部]　　发布日期：2015-06-05</p>

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
						<p>　　缘分就是兜兜转转，不管怎样还是会在一起。被天健一路“虐”过来，短短三个月，心境大起大伏。很多事情因为不凑巧，所以来晚了。但毕竟贵人多许，倾囊相助，几次濒临放弃却还是坚持了下来。这些日子里，审计的忙碌与充实丰富了我的生活；同事的理解与包容增强了我的自信，我是这样的庆幸着，喜悦着。我会继续下去,以一颗更加成熟、饱满、热忱的心来好好迎接未来的挑战。</p>

<p style="text-align:center"><img alt="" src="http://www.pccpa.cn/uploadFiles/images/%E5%AE%9E%E4%B9%A0%E7%94%9F%E9%A3%8E%E9%87%87/3_%E6%B4%AA%E8%8B%8F%E8%90%8D.jpg"></p>

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


