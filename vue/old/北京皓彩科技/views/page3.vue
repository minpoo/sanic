<template>
	<div class="home" style="background: black;">
		<top />
		<div style="padding-bottom: 50px;margin-top: -2px;">
			<div><img src="../assets/page3/1.jpg" alt=""></div>
			<div><img src="../assets/page3/2.jpg" alt=""></div>
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
	.in {
		outline: none;
		width: 600px;
		background: none;
		border: none;
		position: absolute;
		top: 82px;
		left: -200px;
		right: 0;
		margin: auto;
		font-size: 17px;
	}
</style>
