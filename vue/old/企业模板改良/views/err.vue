<template>
	<div class="home">
		<top />
		<div style="background:#141414;">
			<router-link to="/"><img src="../assets/img/err.jpg" style="padding: 5px;"></router-link>
		</div>
		<div>该主播未在线</div>
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
