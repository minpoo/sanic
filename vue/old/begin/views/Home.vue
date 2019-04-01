<template>
  <div>
    <top/>

    <foot/>
  </div>
</template>




<script>
// import $ from 'jquery'

// @ is an alias to /src
// alert($)
import top from "@/components/top";
import foot from "@/components/foot";
// import carrousel from '@/components/loop'

export default {
  name: "home",
  components: {
    top,
    foot
  },
  data() {
    return {};
  },
  mounted() {
    createcode(); //需要触发的函数

    function createcode() {} //createcode  end
    //------------------------------------结束线---------------------------------------------
  },
  methods: {}
};
</script>
<style scoped>
</style>