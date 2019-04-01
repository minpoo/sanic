<template>
	<div class="home">
		<top />
		<div id="demo" class="carousel slide" data-ride="carousel" style="width: 100%;margin-top: -2px;">
			<ul class="carousel-indicators">
				<li data-target="#demo" data-slide-to="0" class="active"></li>
				<li data-target="#demo" data-slide-to="1"></li>
				<li data-target="#demo" data-slide-to="2"></li>
				<li data-target="#demo" data-slide-to="3"></li>
			</ul>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img width="100%" height="500px" src="../assets/home1.jpg">
				</div>
				<div class="carousel-item">
					<img width="100%" height="500px" src="../assets/home2.jpg">
				</div>
				<div class="carousel-item">
					<img width="100%" height="500px" src="../assets/home3.jpg">
				</div>
				<div class="carousel-item">
					<img width="100%" height="500px" src="../assets/home4.jpg">
				</div>
			</div>
			<a class="carousel-control-prev" href="#demo" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			</a>
			<a class="carousel-control-next" href="#demo" data-slide="next">
				<span class="carousel-control-next-icon"></span>
			</a>
		</div>
		<div>
			<img src="../assets/h1.jpg">
		</div>
		<div class="row" style="width:70%;margin: auto;">
			<div class="col-7" style="margin-left: 10px;">
				<div>
					<router-link to="#" style="color:#f35637;font-weight: bold;font-size: 27px;">{{usually.c_l_title}}</router-link>
				</div>
				<div class="cl">
					<div>
						<router-link to="/register">
							<span>{{usually.c_l_title2[0]}}</span>
							<span style="float: right;">{{usually.c_l_title2[1]}}</span>
						</router-link>
					</div>
					<div>
					<router-link to="/register">
						<span>{{usually.c_l_title3[0]}}</span>
						<span style="float: right;">{{usually.c_l_title3[1]}}</span>
					</router-link>
					</div>
					<div>
					<router-link to="/register">
						<span>{{usually.c_l_title4[0]}}</span>
						<span style="float: right;">{{usually.c_l_title4[1]}}</span>
					</router-link>
					</div>
				</div>
			</div>
			<div class="col-4" style="margin-left: 18px;">
				<div style="font-size: 13px;text-align: left;color: black;">{{usually.c_r_content}}</div>
				<div>
					<router-link to="/register"><img src="../assets/h2.jpg"></router-link>
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
	.cl{ text-align: left;font-size: 14px;}
	.cl div{margin-top: 12px;border-top:1px dotted #666;padding-top: 12px;padding-left: 10px;}
	.cl div:last-child{border-bottom:1px dotted #666;padding-bottom: 12px;}
	.cl a{color:#686868}
</style>
