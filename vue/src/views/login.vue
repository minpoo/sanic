<template>
  <div>
    <login/>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import top from "@/components/top.vue";
import foot from "@/components/foot.vue";
import login from "@/components/login.vue";
export default Vue.extend({
  name: "home",
  data() {
    return {
      usually: {}
    };
  },
  components: {
    foot,
    top,
    login
  }
});
</script>

<style scoped>
</style>


