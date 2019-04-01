<template>
  <div>
     <div style="color:skyblue;font-size:30px;margin-top:50px;">
       <span>{{any.a2}}</span><span style="color:#666;">{{any.a1}}</span>
       <div style="position: relative;">
         <img width="700px" src="../assets/t1.png" alt="" srcset="">
         <input style="line-height:50px;font-size:25px;top:0;left:400px;position: absolute;border:none;background:none;" type="text" placeholder="搜索你要的素材">
       </div>
     </div>
    
  </div>
 
</template>

<script>
export default {
  name: "serch",
  props: {
    msg: String
  },
  data: function() {
    return {
      any: {
        a1: "张图",a2:"2,234"
      },
     
    };
  },
  methods: {}
};

// import $ from 'jquery'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row:nth-child(2) > div {
  margin-right: 20px;
}
.row:nth-child(2) a {
  color: black;
  padding: 10px;
  line-height: 41px;
}
.row:nth-child(2) a:hover {
  background: #1977be;
  text-decoration: none;
  color:#fff !important;
}
.row:nth-child(2) {
  background: #ececec;

}

</style>
