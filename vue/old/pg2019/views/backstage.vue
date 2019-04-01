<template>
    <div>
      <!---------------------------------------- top------------------------------------------ -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" style="color:#fff;height:50px;">
      <button type="button" class="btn btn-danger">后台管理</button>
      <button style="position:absolute;right:50px;" type="button" class="btn btn-danger">退出</button>
    </nav>
    <div class="row" style="margin-top:55px;">
      
      <!-------------------------------------- 左边菜单栏 ------------------------------------------>
      <div class="col-3">
        <ul class="list-group"  v-for="i in val" :key="i.id">
          <li @click="oncli($event)" class="list-group-item list-group-item-success">{{i}}</li>
        </ul>
      </div>


      <!------------------------------------- 栏目管理的栏目栏 ------------------------------>
      <div class="col-9" :style="menuS.menuS1">
        <div class="btn-group" v-for="i in menu1C" :key="i.id">
          <button  type="button" class="btn btn-success">{{i}}</button>
        </div>
        <div style="margin-top:50px;">
            <button type="button" @click="columnf($event)" class="btn btn-outline-primary">{{column[0]}}</button>
            <button type="button" @click="columnf($event)" class="btn btn-outline-primary">{{column[1]}}</button>
            <button type="button" @click="columnf($event)" class="btn btn-outline-primary">{{column[2]}}</button>
        </div>
        <div id="eye3" style="display:none;width:30%;margin:auto;margin-top:50px;border:1px solid #ececec;padding:50px;">
            <select class="form-control eye2"  v-model="variable.select">
              <option  v-for="ii in menu1C"  :key="ii.id">{{ii}}</option>
            </select>
            <br>
            <br>
            <input type="text" v-model="variable.select2" class="form-control eye" >
            <button style="margin-top:10px;" type="button" @click="dbcolumn($event)" id="column" class="btn btn-danger">{{variable.column}}</button>
        </div>
      </div>

      <!-- --------------------------------华丽的分割线，这里是文章栏目页面----------------------------- -->
      <div class="col-9" :style="menuS.menuS2" >

        <!-- 这里是菜单页面 -->
        <div class="btn-group-vertical" v-for="i in menu1C" :key="i.id">
          <button type="button" @click="wenzh($event)" class="btn btn-danger">{{i}}</button>
        </div>
        
        <div style="display:none;" id="show2">
            <div style="margin-top:20px;">
              <button type="button" class="btn btn-outline-secondary">当前所处的栏目是</button>
              ：
              <button type="button" class="btn btn-outline-secondary">{{variable.lanmu}}</button>
            </div>
              <!-- 这里是内容显示页面 -->
              <div id="box" style="border:1px solid #ececec;margin-top:20px;padding:10px;">
                  <div>
                    <div class="row"  >
                      <div class="col-1"></div>
                      <div class="col-6"><button style="width:100%;" type="button" class="btn btn-info">标题</button></div>
                      <div class="col-5"><button style="width:100%;" type="button" class="btn btn-info">时间</button></div>
                    </div>
                    <div v-for="i in article" :key="i.id">
                        <div class="row" style="margin-top:20px;">
                          <div class="col-1">
                            <input type="checkbox" class="form-check-input sele" value="">
                          </div>
                          <div class="col-6" @click="modify($event)" style="text-align:left;">
                            {{i.article.title}}
                          </div>
                          <div class="col-5">{{i.article.date}}</div>
                        </div>
                    </div>
                  </div>
                  <div class="btn-group" style="margin-top:20px;">
                      <button type="button" @click="addWenButton($event)"  class="btn btn-success" data-toggle="modal" data-target="#myModal">添加文章</button>
                      <button type="button" @click="deleteArticle($event)" class="btn btn-success">删除所选</button>
                  </div>
              </div>
        </div>
      </div>
      <!-- ---------------------------------------分割线 文本编辑器------------------------------------------ -->
      <!-- 模态框 -->
      <div class="modal fade" id="myModal" style="width:100%;">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <!-- 模态框头部 -->
            <div class="modal-header">
              <h4 class="modal-title">新闻</h4>
              <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
            </div>
            <!-- 模态框主体 -->
            <div class="modal-body">
              <simditor @showCityName="updateCity"  ref="children"  :child-com="content" />
            </div>
            <!-- 模态框底部 -->
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button> -->
            </div>
      
          </div>
        </div>
      </div>

      <div class="col-9" :style="menuS.menuS3">
         <a href="http://127.0.0.1:3000/cloud/get?user=pg&password=fd932019ead02d8f73e675fdc7a1099484b72b63&order=cloudLogin" class="btn btn-info" role="button">
            进入图库
         </a>
         <div class="row" v-for="item in news" :key="item.id" style="margin-top:10px;">
            <div class="col">
               <div class="form-group">
                  <!-- <label for="usr">用户名:</label> -->
                  <input type="text" v-model="item.title" class="form-control" placeholder="标题">
                  <textarea v-model="item.content" class="form-control" rows="5" placeholder="描述">
                  </textarea>
                  <input type="text" v-model="item.url"  class="form-control" placeholder="链接地址/了解更多">
               </div>
            </div>
         </div>
         <div style="margin-bottom:50px;">
           <a href="#" @click="suclick($event)" class="btn btn-success" role="button">
            提交
           </a>
         </div>
      </div>
      <div class="col-9" :style="menuS.menuS4">
        <a href="http://127.0.0.1:3000/cloud/get?user=pg&password=fd932019ead02d8f73e675fdc7a1099484b72b63&order=cloudLogin" class="btn btn-secondary" role="button">进入管理</a>
      </div>
    </div>
    </div>


     
</template>

<style scoped>
#login{text-align:left;width: 33%;margin: auto;border: 1px solid #ececec;padding: 5%;box-shadow: 10px 5px 10px skyblue;}
li:hover{background:#fff;color: black;cursor: pointer;}
</style>


<script>
// @ is an alias to /src
// import app from '@/App.vue'

import simditor from '@/components/simditor.vue'
// import leftm from '@/components/leftm'
let page=1,pageC=""
export default {
  inject: ['reload'],
  data() {
    return {
        article:{},
        content:{order:"",menu:"",title:"",date:"",content:"",event:""},
        variable:{column:"准备状态",select:"",select2:"",lanmu:"准备状态"},
        column:["增加栏目","删除栏目","修改栏目"],
        val:["栏目管理","文章管理","bannner管理","附件管理"],
        menu1C:["","天健资讯","员工风采","行业动态","天健风采","天健视野","招聘动态","实习生风采","天健研究","静态页面",""],
        menuS: {menuS1:{display:"block"},menuS2:{display:"none"},menuS3:{display:"none"},menuS4:{display:"none"}},
        news:{num1:{title:"222",content:"内容",url:""},num2:{title:"333",content:"",url:""},num3:{title:"",content:"",url:""}},
   }
  },
  mounted:function(){
       let self=this
       let token=sessionStorage.token
       createcode();//需要触发的函数
      function createcode() {


      //------------------------------------分割线-------------------------------------------
      //根据页面来选择显示的页面
      switch (page){
      case  1:
      {    
            self.menuS.menuS1.display="block"
            self.menuS.menuS2.display="none"
            self.menuS.menuS3.display="none"
            self.menuS.menuS4.display="none"
            
      }
      break;
      case 2:
      {     
           let order=pageC
            //这里传输给子通讯，告诉它所处的栏目
            self.content.menu=order
            self.variable.lanmu=order  //前端显示栏目
            self.$('#show2').show()
            //我们打算，根据order 向后台去请求本该属于它的集合。
            self.axios.post(self.$url+'companypg/getArticle',{order},{
                          headers: {}})
                          .then(function(res){
                            self.article=res.data
                            //console.log(self.article)
                            // console.log(res.data.article)
                            // {title: "美国EKS＆H会计师事务所主席一行访问天健", date: "2018-04-14"}
                          })
                          .catch(function(err){
                              if(err.response) {
                              console.log(err.response)
                              alert("网络出错")
                                //console.log err message
                              }
                          })
            self.menuS.menuS1.display="none"
            self.menuS.menuS2.display="block"
            self.menuS.menuS3.display="none"
            self.menuS.menuS4.display="none"
      }
      break;
      case 3:
      {     
            self.menuS.menuS1.display="none"
            self.menuS.menuS2.display="none"
            self.menuS.menuS3.display="block"
            self.menuS.menuS4.display="none"
      }
      break;
      case 4:
      {    
            self.menuS.menuS1.display="none"
            self.menuS.menuS2.display="none"
            self.menuS.menuS3.display="none"
            self.menuS.menuS4.display="block"
      }
      break;
    }


      //------------------------------------分割线-------------------------------------------
      //获取menu1C
      self.axios.post(self.$url+'companypg/getColumn',{
                    headers: {}})
                    .then(function(res){
                        self.menu1C=res.data
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                            //console.log err message
                        }
                    })

      //---------------------------------华丽的分割线—----------------------------------------- 
      //获取banner
       self.axios.post(self.$url+'companypg/getbannner',{token},{
                    headers: {}})
                    .then(function(res){
                        if(res.data){
                          // console.log('res_data', res.data)
                          self.news=res.data.banner
                          //self.$router.push('/backstage');//其中login是你定义的一个路由模块
                        }else{
                         self.message="账号密码错误"
                         setTimeout(() => {
                           self.message="Sign In"
                         },1000)
                         
                        }
                        //bind(this)is not use
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                            //console.log err message
                        }
                            //bind(this)可以不用
                    })


      //------------------------------------分割线---------------------------------------------- 
      //获取banner
       self.axios.post(self.$url+'companypg/getbannner',{token},{
                    headers: {}})
                    .then(function(res){
                        if(res.data){
                          //console.log('res_data', res.data)
                          self.news=res.data.banner
                          //self.$router.push('/backstage');//其中login是你定义的一个路由模块
                        }else{
                         self.message="账号密码错误"
                         setTimeout(() => {
                           self.message="Sign In"
                         },1000)
                         
                        }
                        //bind(this)is not use
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                            //console.log err message
                        }
                            //bind(this)可以不用
                    })

       }
    },
  
  
  
  
methods:{

 //------------------------------------分割线----------------------------------------------       
 updateCity(data){//子组件提交成功，告诉父组件，刷新页面
      this.$("#myModal").modal('hide')
      pageC=this.variable.lanmu
      this.reload()
      },

     //------------------------------------分割线----------------------------------------------
     //点击添加文章，告诉子组件，清空文本编辑器信息。
    addWenButton(){
        this.$refs.children.say("empty");
    },

   //------------------------------------分割线删除文章----------------------------------------------
    deleteArticle(){
    //  let uu= this.$('').is(':checked');
    //  console.log(uu)
       let $=this.$
       let arr=[],self=this
       $.each($('.sele:checkbox'),function(){
          if(this.checked){
            // console.log($(this).parent().next().children().eq(0).html())
              let temp=$(this).parent().next().text()
               temp=temp.replace(/^\s+|\s+$/g,"");
              // console.log(typeof(temp))
               arr.push(temp)
          }
       })
      //  console.log(arr)
      //  ["美国EKS＆H会计师事务所主席一行访问天健", "天健当选浙江省并购联合会第一届理事单位 胡少先当选联合会副会长",
      //   "杭州市中级人民法院副院长邵景腾一行来天健走访调研"]
      //把这个传到后台去进行删除操作
    self.axios.post(self.$url+'companypg/deleteArticle',{arr},{})
                  .then(function(res){
                      if(res.data.ok==1){
                        self.$("#myModal").modal('hide')
                        pageC=self.variable.lanmu
                        self.reload() 
                     }
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                        alert("网络出错")
                        }
                    })
    },

    //------------------------------------分割线修改文章内容----------------------------------------------
    modify(e){
           let self=this
           this.$('#myModal').modal('show')      
           let index=e.target.innerHTML
           index=index.replace(/^\s+|\s+$/g,"");
           //index==新闻标题
           //每次点击都要换变量，所以在这里去获取数据库参数
            self.axios.post(self.$url+'companypg/getArticleTitle',{index},{
                    headers: {}})
                    .then(function(res){
                      // console.log(res.data)
                      self.content.title=res.data.article.title
                      self.content.date=res.data.article.date
                      self.content.content=res.data.article.content
                      self.$refs.children.say("time");
                      // console.log(res.data.article)
                      // {title: "美国EKS＆H会计师事务所主席一行访问天健", date: "2018-04-14"}
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                        alert("网络出错")
                          //console.log err message
                        }
                    })
    },


   
    //------------------------------------分割线----------------------------------------------
    //这里是点击文章栏目的menu后的效果
    wenzh(e){
      let order=  e.target.innerHTML,self=this
      //这里传输给子通讯，告诉它所处的栏目
      this.content.menu=order
      this.variable.lanmu=order  //前端显示栏目
      this.$('#show2').show()
      //我们打算，根据order 向后台去请求本该属于它的集合。
      self.axios.post(self.$url+'companypg/getArticle',{order},{
                    headers: {}})
                    .then(function(res){
                      self.article=res.data
                      //console.log(self.article)
                      // console.log(res.data.article)
                      // {title: "美国EKS＆H会计师事务所主席一行访问天健", date: "2018-04-14"}
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                        alert("网络出错")
                          //console.log err message
                        }
                    })

    },

    //------------------------------------分割线----------------------------------------------
    dbcolumn(e){
      //这个是传给数据库去增删改查的
      // console.log('e', this.variable.select)
      console.log('e', e.target.innerHTML)
      let self=this
      switch(e.target.innerHTML){
      case "增加栏目":
      {
                self.axios.post(self.$url+'companypg/column',{order:e.target.innerHTML,data:self.variable.select2},{
                    headers: { 
                    }})
                    .then(function(res){
                          console.log('tag', res.data)
                          if(res.data.ok=="1"){
                            self.reload()
                          }
                          //self.$router.push('/backstage');//其中login是你定义的一个路由模块
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                        alert("网络出错")
                      
                        }
                    })

        }
        break;
        case "删除栏目":
        {
                  self.axios.post(self.$url+'companypg/column',{order:e.target.innerHTML,data:self.variable.select},{
                    headers: {}})
                    .then(function(res){
                          console.log('tag',res.data)
                           if(res.data.ok=="1"){
                            self.reload()
                          }
                          //self.$router.push('/backstage');//其中login是你定义的一个路由模块
                    })
                    .catch(function(err){
                        if(err.response) {
                          console.log(err.response)
                          alert("网络出错")
                        }
                    })
        }
        break;
        case "修改栏目":{
            self.axios.post(self.$url+'companypg/column',{order:e.target.innerHTML,data1:self.variable.select,data2:self.variable.select2},{
                    headers: {}})
                    .then(function(res){
                          console.log('tag',res.data)
                           if(res.data.ok=="1"){
                            self.reload()
                          }
                          //self.$router.push('/backstage');//其中login是你定义的一个路由模块
                    })
                    .catch(function(err){
                        if(err.response) {
                          console.log(err.response)
                          alert("网络出错")
                        }
                    })
        }
        break;

      }


    },
    columnf(e){
      this.$('#eye3').show()
      console.log('e', e.target.innerHTML)
      console.log('this.', this.column)
      this.variable.column=e.target.innerHTML
      switch(e.target.innerHTML){
        case "增加栏目":{
             this.$('.eye').show()
             this.$('.eye2').hide()
             this.$('.eye').attr("placeholder","请输入增加栏目名")
        }
        break;
        case "删除栏目":{
            this.$('.eye').hide()
            this.$('.eye2').show()
        }
        break;
        case "修改栏目":{
            this.$('.eye').show()
            this.$('.eye2').show()
            this.$('.eye').attr("placeholder","选择栏目，输入新名")
        }
        break;

      }
      
               
    },
    suclick(){//内容改变事件 
                  //  console.log('tag', this.contentlet)
                  // let self=this
                  let data=this.news
                  let token=sessionStorage.token
                  this.axios.post(this.$url+'companypg/bannner',{data,token},{
                    headers: { 
                    }})
                    .then(function(res){
                       if(res.data.ok=="1"){
                         alert("保存成功")
                       }
                        // if(res.data){
                        //   console.log('tag', res.data)
                        //   //self.$router.push('/backstage');//其中login是你定义的一个路由模块
                        // }else{
                        //  self.message="账号密码错误"
                        //  setTimeout(() => {
                        //    self.message="Sign In"
                        //  },1000)
                         
                        // }
                        //bind(this)is not use
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                        }
                    })
    },
    oncli(e){
    let val=  e.target.innerHTML
    switch (val){
      case this.val[0]:
      {     page=1
            this.menuS.menuS1.display="block"
            this.menuS.menuS2.display="none"
            this.menuS.menuS3.display="none"
            this.menuS.menuS4.display="none"
            
      }
      break;
      case this.val[1]:
      {     page=2
            this.menuS.menuS1.display="none"
            this.menuS.menuS2.display="block"
            this.menuS.menuS3.display="none"
            this.menuS.menuS4.display="none"
      }
      break;
      case this.val[2]:
      {      page=3
            this.menuS.menuS1.display="none"
            this.menuS.menuS2.display="none"
            this.menuS.menuS3.display="block"
            this.menuS.menuS4.display="none"
      }
      break;
      case this.val[3]:
      {      page=4
           window.location.href=this.$url+"cloud/get?user=pg&password=fd932019ead02d8f73e675fdc7a1099484b72b63&order=cloudLogin"
      }
      break;
    }
   }         
  },
  components: {
      simditor
  }
}


</script>

<style scoped>
.col-6:hover{cursor: pointer;color:gold;}
  
</style>