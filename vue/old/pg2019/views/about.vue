<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img width="100%" src="../assets/img/2.jpg" alt="" srcset=""></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2">
                <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">关于坤元</div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/about">坤元简介</a>
                  </li>
                   <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/organization">组织架构</router-link>
                  </li>
                  <!-- <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/hrshow">人力资源</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/organization">组织架构</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/certification">执业资质</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/culture">天健文化</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#"></a>
                  </li> -->
                </ul>
              </div>
              <div class="col-10">
                <div>
                    <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
                    <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
                      <router-link to="/">首页</router-link>-<router-link to="/">关于坤元</router-link>-<router-link to="/news">{{val.menu}}</router-link>
                    </div>
                </div>
                <div style="border-top:1.5px solid #666;clear:both;margin-right:2%">
                  <div class="row" style="color:#555;padding-top:80px;text-align:left;letter-spacing:2px;">
                    <div class="col-8" style="text-indent: 30px">
                      <p>
                        坤元包括坤元资产评估有限公司、浙江坤元房地产土地估价有限公司和浙江天健保险公估有限公司。
                      </p>

                      <p style="margin-top:20px;">
                        坤元资产评估有限公司的前身浙江国有资产评估中心是1990年7月5日经浙江省财政厅（90）财人84号文批准成立的，全民所有制性质。1993年7月，经浙江省财政厅（1993）财人教27号文件批复同意将“浙江国有资产评估中心”易名为“浙江资产评估公司”，成立时注册资金15万元，1993年5月增加到30万元，1996年6月增加到100万元。公司于1991年2月取得国有资产评估资格证书，1993年4月经国家国有资产管理局和中国证券监督管理委员会联合批准，成为全国首批21家获得证券业务资产评估资格的评估机构之一。1998年12月18日，浙江资产评估公司与浙江省财政厅脱钩，2000年2月18日浙江省国有资产管理局浙国资评[2000]122号文撤消浙江资产评估公司，浙江省国有资产管理局浙国资评[2000]123号文批复同意成立浙江天健资产评估有限公司。2000年3月1日至2002年1月13日法定代表人为朱炳有，2002年1月14日起法定代表人为朱永勤。2002年9月公司更名为浙江勤信资产评估有限公司。2009年1月15日法定代表人变更为俞华开，并经审核再次荣获财政部、证监会授予证券期货相关业务资产评估资格。2009年3月27日，原浙江东方资产评估有限公司人员和业务并入浙江勤信资产评估有限公司。2009年4月16日增资至300万元。2010年6月29日为响应财政部《关于推动评估机构做大做强做优的指导意见》，实现公司做大做强做优的发展战略目标，浙江勤信资产评估有限公司更名为坤元资产评估有限公司，实收资本增加到1000万元。
                      </p>

                      <p style="margin-top:20px;">
原浙江天健资产评估有限公司于2001年取得浙江省建设厅颁发的房地产估价资格。同年12月，在公司房地产评估部的基础上成立了浙江天地房地产事务所有限公司。2006年，浙江天地房地产事务所有限公司更名为浙江勤信房地产土地估价有限公司，经批准成为在中国土地估价师协会注册的土地评估机构，可以在全国范围内从事土地估价工作，并承继了房地产估价资质。2015年12月29日，浙江勤信房地产土地估价有限公司更名为浙江坤元房地产土地估价有限公司。
                      </p>

                      <p style="margin-top:20px;">
浙江天健保险公估有限公司系2003年4月设立，是浙江省首家经中国保险监督管理委员会批准，获得保险公估资质、依法独立承办公估业务的具有法人资格的保险公估机构，专门从事保险标的的估价、出险时损失估算和理算业务。
                      </p>

                      <p style="margin-top:20px;">
2011年10月中评协同意坤元参加评估机构母子公司试点。坤元已在上海、安徽、湖北设立了相应的分公司。
                      </p>

                      <!-- <p style="margin-top:50px;">
                           <a style="color:#2c81ba;font-weight: bold;text-decoration: mediumspringgreen" href="http://www.pccpa.cn/uploadFiles/files/%E5%A4%A9%E5%81%A5%E7%AE%80%E4%BB%8B2018.pdf">
                             天健简介2018年版下载（22.3 MB)
                           </a>
                      </p>  -->

                    </div>
                    <div class="col-4">
                      <img width="350px" src="../assets/img/新湖.jpg" alt="" srcset="">
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
  name: 'about',
   props: {
    sendval: Array,
    required: true,
  },
    data: function () {
    return {
      isActive: true,
      hasError: false,
      val:{menu:"坤元简介"},
      content:"",
      test:""
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
</style>


