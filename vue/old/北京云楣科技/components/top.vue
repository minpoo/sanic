<template>
	<div style="padding-top:20px;">
		<div class="row" style="border-bottom:1px solid #ececec;padding-bottom:20px;">
			<div class="col-2 offset-1" style="font-size:28px;font-family:华文彩云;">{{usually.companyname}}</div>
				
		</div>
		<div style="background: #6e6ad3;;">
		<div class="row" style="padding:7px;width: 80%;margin: auto;font-weight: bold;">
			<div class="col">
				<router-link to="/" style="color: #fff;font-size: 16px;" >{{usually.list[0][0]}}</router-link>
			</div>
			<div class="col" v-for="(item,index) in usually.list.slice(1)" :key="index">
				<router-link :to="item[1]" style="color: #fff;padding: 5px;font-size: 16px;">{{item[0]}}</router-link>
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
					companyname: "云楣科技",
					list: [
						[
							"首页",
							"/"
						],
						[
							"用户中心",
							"register"
						],
						[
							"游戏下载",
							"page2"
						],
						[
							"资讯中心",
							"page3"
						],
						[
							"客服中心",
							"page4"
						],
						[
							"游戏介绍",
							"page5"
						],
						[
							"家长监护",
							"page1"
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
		text-decoration: none;
		color: gold !important;
	}
</style>
