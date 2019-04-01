<template>
	<div class="home">
		<top />
		<div style="text-align: left;width: 80%;margin: auto;padding:20px 0 ;">{{usually.title}}</div>
		<div class="bg"></div>
		<div style="width: 900px;margin: auto;">
			<div><img width="100%" src="../assets/page2/1.jpg" alt=""></div>
			<div style="font-size: 15px;font-weight: bold;text-align: left;padding: 10px 20px;width: 888px;background: #d8d7dc;margin: auto;">所有新闻</div>
			<div style="text-align: left;">
				<div>
					<router-link to="c"><img src="../assets/page2/2.jpg" alt=""></router-link>
				</div>
				<div style="padding-left:7px;">
					<router-link to="c2"><img src="../assets/page2/3.jpg" alt=""></router-link>
				</div>
				<div style="padding-left:4px;margin-top: -5px;">
					<router-link to="c3"><img src="../assets/page2/4.jpg" alt=""></router-link>
				</div>
			</div>
		</div>
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
	.bg {
		background: url(../assets/page2/0.jpg) repeat;
		height: 20px;
	}
</style>
