<template>
	<div class="home">
		<top />
		<div style="width: 80%;margin: auto;">
			<div>
				<img src="../assets/page3/1.jpg" alt>
			</div>
			<div v-for="(it,i) in list" :key="i" style="width:717px;margin: auto;">
				<router-link :to="it[2]">
					<div style="height: 37px;clear: both;padding:10px;border-bottom: 1px  dotted #ececec;">
						<span style="float:left">{{it[0]}}</span>
						<span style="float:right">{{it[1]}}</span>
					</div>
				</router-link>
			</div>
		</div>
		<foot />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import top from "@/components/top.vue";
	import foot from "@/components/foot.vue";
	export default Vue.extend({
		name: "home",
		data() {
			return {
				list: [
					[
						"[热点资讯]Actoz Soft电竞赛场年内完工 将举办各类电竞赛事",
						"[19-03-06]",
						"c"
					],
					[
						"[热点资讯]亚奥理事会：暂未确定电子竞技能否列为2022年亚运会官方奖牌运动项目",
						"[18-08-23]",
						"c2"
					],
					[
						"[热点资讯]第十六届ChinaJoy决赛日官方电竞大赛舞台精彩回顾",
						"[19-02-23]",
						"c3"
					],
					[
						"[热点资讯]2018上半年中国游戏产业报告出炉，女玩家也顶半边天",
						"[18-08-23]",
						"c4"
					],
					[
						"[热点资讯]日中动漫游戏产业联合会-海西分部落成启动仪式在厦门举行",
						"[18-08-23]",
						"c5"
					],
					[
						"[帮助]防沉迷系统提醒",
						"[18-08-23]",
						"c6"
					],
					[
						"[帮助]盗号方法大揭密及防范措施",
						"[18-10-22]",
						"c7"
					],
					[
						"[帮助]常见游戏加载失败问题解决方案",
						"[18-09-03]",
						"c8"
					],
					[
						"[帮助]如何防止游戏加载不成功和黑屏现象",
						"[18-08-20]",
						"c9"
					],
					[
						"[帮助]为何要完善个人资料？",
						"[18-07-15]",
						"c10"
					],
				]
			};
		},
		components: {
			foot,
			top
		}
	});
</script>
<style scoped>
	a {
		color: #444444 !important;
		font-size: 13px;
	}
</style>
