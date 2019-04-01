<template>
	<div class="home">
		<top />
		<div style="width:70%;margin: auto;">
			<div class="row">
				<div class="col-3">
					<router-link to="register"><img src="../assets/home/1.jpg" alt=""></router-link>
					<router-link to="register"><img src="../assets/home/4.jpg" alt=""></router-link>
				</div>
				<div class="col-8">
					<div>
						<router-link to="/"><img src="../assets/home/2.jpg" alt=""></router-link>
					</div>
					<div>
						<router-link to="/"><img src="../assets/home/3.jpg" alt=""></router-link>
					</div>
				</div>
			</div>
			<div><img src="../assets/home/5.jpg" alt=""></div>
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
					c_l_title: "校招季火热进行中",
					c_l_title2: [" 周年庆！ 女主播与玩家迪士尼甜蜜互动", "2019-03-04 11:10:30"],
					c_l_title3: [" 儿童节特别活动", "2019-02-01 11:10:30"],
					c_l_title4: [" 复盘《有杀气童话》：一款题材轻度的游戏", "2019-01-02 11:10:30"],
					c_r_content: " 北京皓彩科技有限公司致力于研发新一代的3D即时战斗手游。光合起源核心团队来自国内各大端游、手游的精英，雄厚的研发实力。",

				},
			};
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

	.cl {
		text-align: left;
		font-size: 14px;
	}

	.cl div {
		margin-top: 12px;
		border-top: 1px dotted #666;
		padding-top: 12px;
		padding-left: 10px;
	}

	.cl div:last-child {
		border-bottom: 1px dotted #666;
		padding-bottom: 12px;
	}

	.cl a {
		color: #686868
	}
</style>
