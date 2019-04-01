<template>
	<div>
		<div style="background: #6e6ad3;">
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
					companyname: "墨子科技",
					list: [
						[
							"墨子科技",
							"/"
						],
						[
							"正版下载",
							"register"
						],
						[
							"Win10",
							"page2"
						],
						[
							"Win7",
							"page3"
						],
						[
							"客服中心",
							"page4"
						],
						[
							"正版介绍",
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
