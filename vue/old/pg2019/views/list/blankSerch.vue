<template>
  <div >
    <top/>
    <div v-for="i in data" :key="i.id">
      <div class="list">
        <div>
          <router-link
            :to="{path:'/blank',query: {title:i.article.title}}"
            style="font-weight:bold;"
          >{{i.article.title}}</router-link>
          <!-- <a href>{{i.article.title}}</a> -->
        </div>
        <div>{{i.article.date}}</div>
      </div>
    </div>
    <foot/>
  </div>
</template>


<script>
import top from "@/components/top.vue";
import foot from "@/components/foot";
import $ from "jquery";
let notClick = true;
export default {
  name: "leftm",
  props: {
    sendval: Array,
    required: true
  },
  data: function() {
    return {
      data: this.$route.query.val
    };
  },
  computed: {},
  mounted: function() {
    let self = this;

    createcode(); //需要触发的函数
    function createcode() {
      self.data = JSON.parse(self.data);
      console.log("data", self.data);
    }
  },
  methods: {},
  components: {
    top,
    foot
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-column a:hover {
  color: #fff;
  background: rgb(62, 189, 147);
}
a {
  color: #555;
}
a:hover {
  color: goldenrod;
}
#fl > a {
  float: left;
  margin-bottom: 20px;
}
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
.list{
  margin: auto;
  margin-top: 20px;
  text-align:left;
  width: 80%;
  
}
</style>


