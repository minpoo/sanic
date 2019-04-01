<template>
	<div>
		<top />
		<div class="home">
			<div class="row" style="position:relative;padding-top: 10px;margin-left: 100px;">
				<div class="col-5 offset-1">
					<div style="width:560px;overflow: hidden;">
						<video style="height: 400px;width: 800px;margin-left: -120px;" src="../assets/video/1.mp4" controls></video>
					</div>
				</div>
				<div class="col-5">
					<router-link to="err"><img src="../assets/img/home1.jpg" style="padding: 5px;"></router-link>
					<router-link to="err"><img src="../assets/img/home2.jpg" style="padding: 5px;"></router-link>
					<router-link to="err"><img src="../assets/img/home3.jpg" style="padding: 5px;"></router-link>
					<router-link to="err"><img src="../assets/img/home4.jpg" style="padding: 5px;"></router-link>
				</div>
			</div>
			<div style="margin-top: 30px;">
				<router-link to="err"><img src="../assets/img/home5.jpg" /></router-link>
			</div>
			<div style="margin-top: 30px;">
				<router-link to="err"><img src="../assets/img/home6.jpg" /></router-link>
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
			return {};
		},
		components: {
			foot,
			top
		},
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

	.home {
		background: #f2f3f5;
	}
</style>
