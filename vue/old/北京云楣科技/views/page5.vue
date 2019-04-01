<template>
	<div class="home">
		<top />
		<div style="width: 70%;margin: auto;">
			<img src="../assets/page5/1.jpg" alt="">
			<img src="../assets/page5/2.jpg" alt="">
			<img src="../assets/page5/3.jpg" alt="">
		</div>
		<foot />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import top from "@/components/top.vue";
	import foot from "@/components/foot.vue";
	export default Vue.extend({
		name: "home",
		data() {
			return {};
		},
		components: {
			foot,
			top
		}
	});
</script>
<style scoped>

</style>
