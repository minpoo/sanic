<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img src="../../assets/img/banner-contact.jpg"></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2">
                <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">{{val.menu2}}</div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut"  href="#/contact">境内机构</a>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/contactC1">国际网络</router-link>
                  </li>
                </ul>
              </div>
              <div class="col-10">
                <div>
                    <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
                    <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
                      <router-link to="/">首页</router-link>-<router-link to="/">{{val.menu2}}</router-link>-<router-link to="/news">{{val.menu}}</router-link>
                    </div>
                </div>
                <div style="text-align:left;border-top:1.5px solid #666;clear:both;margin-right:2%;text-indent: 30px;padding-top:70px;">
       <div class="page-detail">
					<div class="international-wrap">
						<p class="text-align-center "><img src="../../assets/img/pic-map.jpg"></p>



           <div v-for="i in mycontent" :key="i.id">
            <div class="row temp"  style="margin-top:50px;">
              <div class="col-3">
                <a :href="i.src" target="_blank">
                <img  :src="i.img">
                </a>
              </div>
              <div class="col-4"><a style="color:#333;font-weight:bold;" :href="i.src" target="_blank">
                 {{i.a}}
                </a>
								<div> {{i.b}}</div>
                <div>{{i.c}}</div>
                <div>{{i.d}}</div>
              </div>
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
import img1 from '../../assets/img/logo-sg.jpg'
import img2 from '../../assets/img/pic-logo-1.jpg'
import img3 from '../../assets/img/pic-logo-2.jpg'
import img4 from '../../assets/img/pic-logo-3.jpg'

let notClick=true;
export default {
  name: 'leftm',
   props: {
    sendval: Array,
    required: true,
  },
    data: function () {
    return {
      isActive: true,
      hasError: false,
      val:{menu:"联系我们",menu2:"国际网络"},
      content:"",
      test:"",
      mycontent:
      [
        {src:"http://www.pccpa.com.sg",img:img1,a:"天健新加坡会计师事务所",b:"地址：新加坡80桥南路金城大厦4楼2号",c:"邮区：058710",d:"电话：+65-6438 3524"},
        {src:"http://www.eksh.com",img:img2,a:"EKS&H",b:"地址：美国科罗拉多州丹佛市东塔夫茨大道8181号600室",c:"邮编：80237-2843",d:"电话：+1(720)739-6688"},
        {src:"https://www.vgd.eu",img:img3,a:"VGD",b:"地址：比利时东佛兰德省登德尔蒙德市教堂街 2-B-9200",c:"电话：+32-5222 2288",d:"传真：+32-5240 9315"},
        {src:"http://www.ebnerstolz.de",img:img4,a:"EBNER STOLZ",b:"地址：德国巴登-符腾堡州斯图加特科隆恩街30号",c:"电话：+49 711 2049-1233",d:"传真：+49 711 2049-1490"}
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
  .temp a:hover{color:goldenrod !important;}
  #fl>a{float: left;margin-bottom: 20px}
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.page-detail {
    position: relative;
    color: #555;
    font-size: 16px;
    line-height: 2;
    text-align: justify;
    text-justify: inter-ideograph;
}
strong{color:#3a8bc8;}
.area-text-title {
    display: inline-block;
    color: #fff;
    line-height: 45px;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 20px;
}
</style>


