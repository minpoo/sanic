<template>
	<div class="foot">
		<div>{{usually.icp}}</div>
		<div>{{usually.info}}</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue";
	import axios from "axios";
	export default Vue.extend({
		data() {
			return {
				usually: {
					icp: "京ICP备19008986号© 北京皓彩科技有限公司© 版权所有©",
					address: "",
					info: "健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活"
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
	.foot {
		background: #000;
		color: aliceblue;
		padding: 40px 0;
		margin-top: 100px;
		font-size: 14px;
		color: #b3b3b3;
	}
</style>
