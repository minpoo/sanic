<template>
	<div class="home">
		<top />
		<div>
			<img src="../../assets/c3/1.jpg" alt="">
		</div>
		<div>
			<img src="../../assets/c3/2.jpg" alt="">
		</div>
		<div>
			<img src="../../assets/c3/3.jpg" alt="">
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
					companyname: "北京皓彩科技有限公司",
					introduce:"北京皓彩科技有限公司致力于研发新一代的3D即时战斗手游。核心团队经历过多款MMOPRG端游洗礼，具备国内雄厚的研发实力。“热爱游戏，打造精品，创造快乐”是我们共同的理念。 《有杀气童话》是我们为玩家献上的第一款游戏，也是光合起源团队集体努力的结晶。但这仅是一个开端，未来的路在我们的脚下，需要我们继续团结努力一步一步踏实前行。我们身处一个飞速发展的行业，稍一松懈，我们就会成为失败的教本。长远有信仰、执念于精品、眼前有目标，踏实前行，创造更棒的游戏。"
				}
			};
		},
		components: {
			foot,
			top
		},
	});
</script>
<style scoped>

</style>
