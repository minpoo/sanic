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
					<h1 class="detail-title">天健会计师事务所入职体检录用标准 <br>（参照公务员录用标准执行）</h1>
					<div class="detail-attributes">
						<p class="detail-date">发布日期：2015-03-11</p>

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

					<div class="detail-content" style="text-align: center">
						
            <div class="detail-text" style="text-align: left"> 
            <p>第一条 心脏 风湿性心脏病、心肌病、冠心病、先天性心脏病、克山病等器质性心脏病，不合格。先天性心脏病不需手术者或经手术治愈者，合格。 
              遇有下列情况之一的，排除心脏病理性改变，合格： <br>　　（一）心脏听诊有生理性杂音； <br>　　（二）每分钟少于6次的偶发期前收缩（有心肌炎史者从严掌握）； 
              <br>　　（三）心率每分钟50－60次或100－110次； <br>　　（四）心电图有异常的其他情况。 </p>
            <p>第二条 血压 血压在下列范围内，合格： 收缩压90mmHg－140mmHg（12.00－18.66Kpa）； 舒张压60mmHg－90mmHg 
              （8.00－12.00Kpa）。 </p>
            <p>第三条 血液 血液病，不合格。单纯性缺铁性贫血，血红蛋白男性高于90g/L、女性高于80g/L，合格。 </p>
            <p>第四条 结核 结核病不合格。但下列情况合格： <br>　　（一）原发性肺结核、继发性肺结核、结核性胸膜炎，临床治愈后稳定1年无变化者； <br>　　（二）肺外结核病：肾结核、骨结核、腹膜结核、淋巴结核等，临床治愈后2年无复发，经专科医院检查无变化者。　
            </p>
              <p>第五条 支气管 慢性支气管炎伴阻塞性肺气肿、支气管扩张、支气管哮喘，不合格。 </p>
              <p>第六条 胃肠 严重慢性胃、肠疾病，不合格。胃溃疡或十二指肠溃疡已愈合，1年内无出血史，1年以上无症状者，合格；胃次全切除术后无严重并发症者，合格。 
              </p>
              <p>第七条 肝炎 各种急慢性肝炎，不合格。 </p>
              <p>第八条 肿瘤、肝硬化 各种恶性肿瘤和肝硬化，不合格。 </p>
              <p>第九条 肾 急慢性肾炎、慢性肾盂肾炎、多囊肾、肾功能不全，不合格。 </p>
              <p>第十条 内分泌 糖尿病、尿崩症、肢端肥大症等内分泌系统疾病，不合格。甲状腺功能亢进治愈后1年无症状和体征者，合格。 </p>
              <p>第十一条 神经 有癫痫病史、精神病史、癔病史、夜游症、严重的神经官能症（经常头痛头晕、失眠、记忆力明显下降等），精神活性物质滥用和依赖者，不合格。 
              </p>
              <p>第十二条 各种炎症 红斑狼疮、皮肌炎和/或多发性肌炎、硬皮病、结节性多动脉炎、类风湿性关节炎等各种弥漫性结缔组织疾病，大动脉炎，不合格。 
              </p>
              <p>第十三条 血吸虫病 晚期血吸虫病，晚期血丝虫病兼有橡皮肿或有乳糜尿，不合格。 </p>
              <p>第十四条 颅脑 颅骨缺损、颅内异物存留、颅脑畸形、脑外伤后综合征，不合格。 </p>
              <p>第十五条 骨髓炎 严重的慢性骨髓炎，不合格。 </p>
              <p>第十六条 甲状腺 三度单纯性甲状腺肿，不合格。 </p>
              <p>第十七条 结石 有梗阻的胆结石或泌尿系结石，不合格。 </p>
              <p>第十八条 性病 淋病、梅毒、软下疳、性病性淋巴肉芽肿、尖锐湿疣、生殖器疱疹，艾滋病，不合格。 </p>
              <p>第十九条 视功能 双眼矫正视力均低于0.8（标准对数视力4.9）或有明显视功能损害眼病者，不合格。 </p>
              <p>第二十条 听觉功能 双耳均有听力障碍，在佩戴助听器情况下，双耳在3米以内耳语仍听不见者，不合格。 </p>
              <p>第二十一条 其他 未纳入体检标准，影响正常履行职责的其他严重疾病，不合格 </p>
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


