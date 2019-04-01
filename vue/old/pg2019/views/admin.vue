<template>
    <div>
       <div id="login">
        <div class="form-group">
          <label for="user">用户名:</label>
          <input type="text" v-model="user" class="form-control" id="user" placeholder="账户">
        </div>
        <div class="form-group">
          <label for="pwd">密码:</label>
          <input type="password" v-model="pwd" class="form-control" id="pwd" placeholder="密码">
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox">记住我
          </label>
        </div>
        <button @click="login($event)" type="button" class="btn btn-primary">{{message}}</button>
      </div>
    </div>
</template>

<style scoped>
#login{text-align:left;width: 33%;margin: auto;border: 1px solid #ececec;padding: 5%;box-shadow: 10px 5px 10px skyblue;}
  
</style>


<script>
// @ is an alias to /src
// import top from '@/components/top.vue'


export default {
   data() {
    return {
      user:"",
      pwd:"",
      message:"登录",
    }
  },
   methods:{
            login(){//when onclick you can login
                //  console.log('tag', this.contentlet)
                  let self=this
                  this.axios.post(this.$url+'companypg/login',{user:this.user,pwd:this.pwd},{
                    headers: { 
                    }})
                    .then(function(res){
                        if(res.data){
                          console.log('返回值', res.data.token)
                          sessionStorage.token=res.data.token
                          self.$router.push('/backstage');//其中login是你定义的一个路由模块
                        }else{
                         self.message="账号密码错误"
                         setTimeout(() => {
                           self.message="登录"
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
            },
  },
  components: {
    
  }
}


</script>
