<template>
	<div style="padding-top:20px;">
		<div class="row" style="border-bottom:1px solid #ececec;padding-bottom:20px;">
			<div class="offset-3 col-4">
				<div class="row" style="padding-top:7px;">
					<div class="col" v-for="(i,k) in nav" :key="i.k">
						<router-link :to="i.src">{{i.title}}</router-link>
					</div>
				</div>
			</div>
			<div class="col-5">
				<router-link to="login">
					<button type="button" class="btn btn-danger">请登录</button>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue";
	export default Vue.extend({
		data() {
			return {
				nav: [{
					title: "首页",
					src: "/"
				}, {
					title: "现场",
					src: "page1"
				}, {
					title: "视频",
					src: "page2"
				}, {
					title: "排行",
					src: "page3"
				}, {
					title: "下载",
					src: "page4"
				}]
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
	}

	a:hover {
		text-decoration: none;
	}
</style>
