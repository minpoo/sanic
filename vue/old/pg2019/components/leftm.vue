<template>
<div >
  <div><img :src="sendval[0].top_logo" alt="" srcset=""></div>
  <div class="row" style="margin-top:30px;">
    <div class="col-2">
      <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">关于天健</div>
       <ul class="nav flex-column">
        <li class="nav-item">
          <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#">天健简介</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#">人力资源</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#">组织架构</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#">执业资格</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#">天健文化</a>
        </li>
      </ul>
    </div>
     <div class="col-10">
       <div>
          <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">天健简介</div>
          <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
            <router-link to="/">首页</router-link>-<router-link to="/">关于天健</router-link>-<router-link to="/">天健简介</router-link>
          </div>
       </div>
       <div style="border-top:1.5px solid #666;clear:both;margin-right:2%"></div>
    </div>

  </div>  

</div>

</template>

<script>
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
      isActive: true,
      hasError: false,
    }
  },
  computed: {
  classObject: function () {
    return {
     
    }
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
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-column a:hover{color: #fff;background: rgb(62, 189, 147)}
  a{color:#666;}
</style>
