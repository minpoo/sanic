<template>
	<div class="foot">
		<div>{{usually.icp}}</div>
		<div style="margin-top: 5px;">{{usually.icp2}}</div>
		<div style="color: red;margin-top: 5px;">{{usually.info}}</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue";
	import axios from "axios";
	export default Vue.extend({
		data() {
			return {
				usually: {
					icp: " 北京云楣科技有限公司© 版权所有©mxqswh All Rights Reserved",
					icp2:"京ICP备19009077号©",
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
		background: #fff;
		color: aliceblue;
		padding: 40px 0;
		margin-top: 100px;
		font-size: 14px;
		color: #b3b3b3;
		border-top:1px solid #ececec ;
	}
</style>
