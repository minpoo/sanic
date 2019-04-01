<template>
	<div style="padding-top:20px;background: #000000;">
		<div class="row" style="border-bottom:1px solid #ececec;padding-bottom:20px;">
			<div class="col-2 offset-1" style="font-size:28px;font-family:华文彩云;color: #fff;">{{usually.companyname}}</div>
			<div class="offset-2 col-5">
				<div class="row" style="padding-top:7px;">
					<div class="col">
						<router-link to="/" style="color: #fff;">{{usually.list[0][0]}}</router-link>
					</div>
					<div class="col" v-for="(item,index) in usually.list.slice(1)" :key="index">
						<router-link :to="item[1]" style="color: #b3b3b3;">{{item[0]}}</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue";
	import axios from "axios";
	export default Vue.extend({
		data() {
			return {
				usually: {
					companyname: "皓彩科技",
					list: [
						[
							"首页",
							"/"
						],
						[
							"关于我们",
							"page1"
						],
						[
							"新闻中心",
							"page2"
						],
						[
							"游戏中心",
							"page3"
						],
						[
							"加入我们",
							"page4"
						],
						[
							"联系我们",
							"page5"
						],
					]
				}
			};
		},
		mounted: function() {
			//this.initWebpack();
		},
		destroyed: function() {
			//destroyed page  websocketclose
			// this.websocketclose();
		},
		created() {},
		methods: {},
		beforeDestroy() {}
	});
</script>

<style scoped>
	a {
		text-decoration: none;
		color: #666;
		font-size: 14px;
	}

	a:hover {
		color: #fff !important;
		text-decoration: none;
	}
</style>
