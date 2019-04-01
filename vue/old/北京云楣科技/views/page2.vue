<template>
	<div class="home">
		<top />
		 <img src="../assets/page2/1.jpg" alt="">
		<foot />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	export default Vue.extend({
		name: 'home',
		data() {
			return {
				usually: {
					title: "新闻中心"
				}
			};
		},
		components: {
			foot,
			top
		},
	});
</script>
<style scoped>
	
</style>
