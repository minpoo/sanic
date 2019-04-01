<template>
  <div class="home">
    <login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import login from '@/components/login.vue'; // @ is an alias to /src
export default Vue.extend({
  name: 'home',
  components: {
    login
  },
});
</script>
