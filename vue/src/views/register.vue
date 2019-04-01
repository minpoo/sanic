<template>
  <div>
    <register />
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import top from "@/components/top.vue";
import foot from "@/components/foot.vue";
import register from "@/components/register.vue";
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
    register
  }
});
</script>

<style scoped>
</style>


