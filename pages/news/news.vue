<template>
	<view class="news-container">
		<view class="uni-list">
			<block v-for="(value, index) in listData" :key="index">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="handleItemClick(value)">
					<view class="uni-media-list">
						<image v-if="value.imgURL && value.imgURL !== ''" class="uni-media-list-logo" :src="value.imgURL"
							mode="aspectFill"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{ value.title }}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.ctime }}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- #ifdef APP-PLUS -->
				<view class="ad-view" v-if="(index > 0 && (index + 1) % 10 == 0)">
					<!-- <ad :adpid="adpid" @error="aderror"></ad> -->
				</view>
				<!-- #endif -->
			</block>
		</view>
		<uni-load-more :status="status" :icon-size="16" :content-text="contentText" />
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
import {
	dateFormat
} from '../../common/date.js'
import * as API from '../../common/api.js'
export default {
	data() {
		return {
			value: '',
			navActiveIndex: '',
			categories: {},
			showLeft: false,
			page: 1,
			limit: 20,
			contentText: {
				contentdown: '上拉加载更多',
				contentrefresh: '加载中',
				contentnomore: '没有更多'
			},
			reload: false,
			status: 'more',
			listData: []
		}
	},
	computed: {
		setFontSize() {
			return (value) => {
				const _val = (value.length * 2)
				if (_val > 60) {
					return 60 + 'rpx'
				} else if (_val < 12) {
					return 12 + 'rpx'
				} else {
					return _val + 'rpx'
				}
			}
		}
	},
	onLoad() {
		this.getList(this.page)
	},
	onPullDownRefresh() {
		this.page = 1
		this.reload = true
		this.getList(this.page)
	},
	onReachBottom() {
		this.page += 1
		this.status = 'more'
		this.getList(this.page)
	},
	methods: {
		handleItemClick(data) {
			uni.navigateTo({
				url: '../details/details?id=' + data.id
			})
		},
		genDate(date) {
			return dateFormat(date, 'yyyy-MM-dd')
		},
		getList(page) {
			let params = {
				num: 20,
				page: page
			}

			// const res = {
			// 	"data": {
			// 		"code": 200,
			// 		"msg": "success",
			// 		"result": {
			// 			"curpage": 1,
			// 			"allnum": 20,
			// 			"list": [
			// 				{
			// 					"id": "52439f010fc18119a58716a2cb917584",
			// 					"ctime": "2022-12-21 16:30:02",
			// 					"title": "刚刚，上海宣布！张文宏发声：第一批次疫苗难阻再次感染！新变异毒株传入我国！引发新一轮流行？官方研判",
			// 					"description": "上海市卫健委12月20日晚间发布，根据当前疫情形势，为方便市民看病就医，本市进一步优化门急诊就医流程，即日起全市各医疗机构对门急诊患者不再查验核酸阴性证明。",
			// 					"picUrl": "",
			// 					"url": "https://toutiao.com/group/7179264735710282275/",
			// 					"source": "证券时报"
			// 				},
			// 				{
			// 					"id": "ab52d4d3dbb9639151e625abd78fcef0",
			// 					"ctime": "2022-12-21 16:30:02",
			// 					"title": "国际锐评丨时隔八年，美国这次对非洲的承诺能兑现吗？",
			// 					"description": "“关键在于，人们在一个月后或者一年后还能记住什么内容，以及哪些是兑现了的。”说到美国近日召集的第二届美非峰会，美国大西洋理事会非洲中心学者赫鲁比作出这样的评价。",
			// 					"picUrl": "",
			// 					"url": "https://toutiao.com/group/7178874849987789352/",
			// 					"source": "央视新闻"
			// 				},
			// 				{
			// 					"id": "9746fea2965d50cfb4079085601b9c9a",
			// 					"ctime": "2022-12-21 16:30:02",
			// 					"title": "防疫系列科普手绘｜“阳过”出现“刀片嗓”、失去味觉怎么办？",
			// 					"description": "",
			// 					"picUrl": "",
			// 					"url": "https://toutiao.com/group/7179398268550382092/",
			// 					"source": "新华网"
			// 				},
			// 				{
			// 					"id": "7dd1bb4350074d8aa162874d9ee2d529",
			// 					"ctime": "2022-12-21 16:30:02",
			// 					"title": "多措并举保证医疗机构平稳运行",
			// 					"description": "【抗疫中我们众志成城㉕】作者：语萱近来，随着疫情形势的变化，人们的就医用药需求迅速增加。其中，不仅发热门诊，非新冠治疗需求也出现较快增加。与此同时，随着规定时限内核酸检测等硬性限制的取消，医疗机构不得不面对更高的感染风险和防控压力。",
			// 					"picUrl": "",
			// 					"url": "https://toutiao.com/group/7179331468210995752/",
			// 					"source": "光明网"
			// 				},
			// 				{
			// 					"id": "92216ca12e5c318f0630a8cd19acea66",
			// 					"ctime": "2022-12-21 16:30:02",
			// 					"title": "总书记为TA点赞，传递什么信息？",
			// 					"description": "这一年，习近平总书记为TA们点赞，传递什么信息?今年4月，习近平总书记在海南五指山市考察调研时，来到水满乡毛纳村一户村民家中，在手工茶坊参与炒茶劳动，并买下两袋茶叶。",
			// 					"picUrl": "",
			// 					"url": "https://toutiao.com/group/7179390727246512700/",
			// 					"source": "央视新闻"
			// 				},
			// 				{
			// 					"id": "c1b8cb77e8341a0ba7d1b90945ef248e",
			// 					"ctime": "2022-12-21 16:30:02",
			// 					"title": "习近平会见俄罗斯统一俄罗斯党主席梅德韦杰夫",
			// 					"description": "12月21日，中共中央总书记、国家主席习近平在钓鱼台国宾馆会见应中国共产党邀请访华的俄罗斯统一俄罗斯党主席梅德韦杰夫。",
			// 					"picUrl": "",
			// 					"url": "https://toutiao.com/group/7179499274672669245/",
			// 					"source": "新华网"
			// 				},
			// 				{
			// 					"id": "c96d20c0c23481417f72c5b4e813935e",
			// 					"ctime": "2022-12-19 11:07:31",
			// 					"title": "永远，永远为我们有这么好的同胞而热泪盈眶。",
			// 					"description": "疫情之下，生活不易，但时不时，我们就会被那猝不及防的勇敢良善与温柔，戳中泪腺。唉，谁看了不说一句“太好哭了”？永远，永远为我们有这么好的同胞而热泪盈眶。⛄️01天正寒，你那里下雪了吗？这位雪夜拾荒的老人，是浙江大学退休教师，今年已经91岁了。",
			// 					"picUrl": "http://p3.toutiaoimg.com/img/tos-cn-i-qvj2lq49k0/581e5e7c7f204a00a5eeaec681f66a5a~tplv-tt-cs0:900:500.jpg",
			// 					"url": "https://toutiao.com/group/7177752521044705831/",
			// 					"source": "央视新闻"
			// 				},
			// 				{
			// 					"id": "afa99f934699fa651aa3a1a68148bdbe",
			// 					"ctime": "2022-12-18 19:07:31",
			// 					"title": "人在草木间丨古道一团茶 串联中国心",
			// 					"description": "云南大理，是茶马古道上重要的结点，这里不仅成为各地茶叶运输的中转地，也是茶叶加工生产的重要基地。大理的“下关沱茶”，生产加工至今已有120年的历史。百年来，下关沱茶作为边销茶供应西藏、四川等地，促进了边疆各民族的交融。如今的下关沱茶，成为当地乡村振兴的重要产业。",
			// 					"picUrl": "http://p6.toutiaoimg.com/img/tos-cn-i-qvj2lq49k0/a208a952eec742be848e9998a339a8ad~tplv-tt-cs0:924:720.jpg",
			// 					"url": "https://toutiao.com/group/7177902113517797928/",
			// 					"source": "央视新闻"
			// 				},
			// 				{
			// 					"id": "aab4c53e370ec6deac5c29ea7e940b07",
			// 					"ctime": "2022-12-17 23:07:32",
			// 					"title": "威海暴雪 部分公交线路停运 铲雪车出动 外卖小哥风雪中送餐",
			// 					"description": "12月17日，山东省威海市迎来大范围降雪天气。威海市区、荣成北部出现大雪、局部暴雪。因市区部分陡坡路段和进村路段积雪结冰，不利于公交车安全通行，截至15时，38条线路调整、11条线路停运。",
			// 					"picUrl": "http://p6.toutiaoimg.com/img/tos-cn-i-0004/09077b4e28b54fc2ab0a5df8413ca5ba~tplv-tt-cs0:1920:1080.jpg",
			// 					"url": "https://toutiao.com/group/7178132879816262179/",
			// 					"source": "青蜂侠"
			// 				},
			// 				{
			// 					"id": "e063f773776990ef82fac72f28bfe750",
			// 					"ctime": "2022-12-17 23:52:32",
			// 					"title": "杨乐献唱《从那以后》，唱出对爱的渴望，歌声让人落泪丨中国之星",
			// 					"description": "《中国之星》第一季第2期",
			// 					"picUrl": "http://p6.toutiaoimg.com/img/tos-cn-i-0004/492ade01a1bf4466b957c9e6664ccc34~tplv-tt-cs0:1920:1080.jpg",
			// 					"url": "https://toutiao.com/group/7178143461202362918/",
			// 					"source": "五岸传播"
			// 				},
			// 				{
			// 					"id": "361672a79bf8f6d9a8c81f61425e19ea",
			// 					"ctime": "2022-12-17 22:07:31",
			// 					"title": "封神：姜子牙奉命揭开封神榜，榜一的竟是妲己，不简单啊",
			// 					"description": "封神：姜子牙奉命揭开封神榜，榜一的竟是妲己，不简单啊",
			// 					"picUrl": "http://p26.toutiaoimg.com/img/tos-cn-i-0004/3f23773245754a868102224625cf648a~tplv-tt-cs0:1547:870.jpg",
			// 					"url": "https://toutiao.com/group/7178094301765698048/",
			// 					"source": "海豚剧有故事"
			// 				},
			// 				{
			// 					"id": "d564ebb49f4f17759b5abd46ab5fe7a6",
			// 					"ctime": "2022-12-17 22:15:01",
			// 					"title": "光影：鬼子大佐落网，特工废他双脚，精准一枪为死去的同胞报仇",
			// 					"description": "光影：鬼子大佐落网，特工废他双脚，精准一枪为死去的同胞报仇",
			// 					"picUrl": "http://p26.toutiaoimg.com/img/tos-cn-i-0004/e4e237fe41204876a9eee35ab6b46305~tplv-tt-cs0:1280:720.jpg",
			// 					"url": "https://toutiao.com/group/7178101487078212148/",
			// 					"source": "华数青春剧工坊"
			// 				},
			// 				{
			// 					"id": "a88c83cde1851960cfa29d2b9419d02f",
			// 					"ctime": "2022-12-17 22:22:31",
			// 					"title": "狐影：敌军大炮太猛，特工潜入鬼子军营，一箱手雷炸个爽",
			// 					"description": "狐影：敌军大炮太猛，特工潜入鬼子军营，一箱手雷炸个爽",
			// 					"picUrl": "http://p3.toutiaoimg.com/img/tos-cn-i-0004/e60b7884e16740ff9ea350ee010868f9~tplv-tt-cs0:1280:720.jpg",
			// 					"url": "https://toutiao.com/group/7178112899804561979/",
			// 					"source": "华数幸福少年派"
			// 				},
			// 				{
			// 					"id": "36ed7bfb82d0757602df71e58e7d05f8",
			// 					"ctime": "2022-12-17 22:52:31",
			// 					"title": "经典国产剧：《致命邂逅》第15集",
			// 					"description": "",
			// 					"picUrl": "http://p3.toutiaoimg.com/img/tos-cn-i-0004/007c4770f5c14ce48e07492e1221a81d~tplv-tt-cs0:1920:1080.jpg",
			// 					"url": "https://toutiao.com/group/7178122160815211020/",
			// 					"source": "胖哥速影"
			// 				},
			// 				{
			// 					"id": "873244ae08eb666b7a601ff7344febbc",
			// 					"ctime": "2022-12-17 21:52:31",
			// 					"title": "绝密：队伍包围解放军，没想全是特种兵，当场就把公安局缴了械",
			// 					"description": "绝密：队伍包围解放军，没想全是特种兵，当场就把公安局缴了械",
			// 					"picUrl": "http://p9.toutiaoimg.com/img/tos-cn-i-0004/d1333052466842838fc168f5969301ad~tplv-tt-cs0:1280:720.jpg",
			// 					"url": "https://toutiao.com/group/7178119806271521291/",
			// 					"source": "华数幸福少年派"
			// 				},
			// 				{
			// 					"id": "83fc4cd6348bb75e37997fe0db78e3ac",
			// 					"ctime": "2022-12-17 22:00:01",
			// 					"title": "绝密：守卫包围解放军，没料全是特种兵，直接就把公安局缴了械",
			// 					"description": "绝密：守卫包围解放军，没料全是特种兵，直接就把公安局缴了械",
			// 					"picUrl": "http://p6.toutiaoimg.com/img/tos-cn-i-0004/a85c0d37ccc14adba5fec1c6e76bdc51~tplv-tt-cs0:1280:720.jpg",
			// 					"url": "https://toutiao.com/group/7178119984269394436/",
			// 					"source": "华数幸福少年派"
			// 				},
			// 				{
			// 					"id": "8c08ea8ff7fb1a20ea95ebe6b6cb7585",
			// 					"ctime": "2022-12-17 21:45:02",
			// 					"title": "“暗网”联系“埋包”藏车，贩毒团灭，下线被抓还叹：我没那聪明",
			// 					"description": "近日，浙江杭州。一毒贩将毒品装进小黑塑料盒，藏进车内深处与客户交易毒品。 杭州萧山区警方破获一起特大毒品案，起获预埋毒品130余件，查证毒品交易360余起，涉案金额100余万元。这些毒贩利用国外售卖毒品的网站，也就是俗称的“暗网”进行联系，然后通过电子货币交易，采取非接触的“埋包”交货，将毒品装进塑料盒中，藏在约定好或特定的地方，再通知客户取走。",
			// 					"picUrl": "http://p26.toutiaoimg.com/img/tos-cn-i-0004/31d2586159624629a1e6e549b0d85ab4~tplv-tt-cs0:1920:1080.jpg",
			// 					"url": "https://toutiao.com/group/7178110539409654287/",
			// 					"source": "star星视频"
			// 				},
			// 				{
			// 					"id": "40714c77be1f4e4d356fb6a8ada295bd",
			// 					"ctime": "2022-12-17 20:15:02",
			// 					"title": "河北省气象台继续发布大风蓝色预警信号",
			// 					"description": "",
			// 					"picUrl": "http://p26.toutiaoimg.com/img/tos-cn-i-0004/df34cb250b17493182ef4467b48773c3~tplv-tt-cs0:1920:1080.jpg",
			// 					"url": "https://toutiao.com/group/7178090286903067192/",
			// 					"source": "河北广播电视台"
			// 				},
			// 				{
			// 					"id": "9af5cc8ae68ca191565a2a8e5aece1a6",
			// 					"ctime": "2022-12-17 20:52:32",
			// 					"title": "风云：洋人开赌场出老千，惹怒男子赌神，下秒直接赢麻了",
			// 					"description": "风云：洋人开赌场出老千，惹怒男子赌神，下秒直接赢麻了",
			// 					"picUrl": "http://p3.toutiaoimg.com/img/tos-cn-i-0004/4f05002f7e404d5086f5bfaa0201b490~tplv-tt-cs0:1280:720.jpg",
			// 					"url": "https://toutiao.com/group/7178094695992853052/",
			// 					"source": "华数青春剧工坊"
			// 				}
			// 			]
			// 		}
			// 	},
			// 	"statusCode": 200,
			// 	"header": {
			// 		"content-type": "application/json;charset=utf-8"
			// 	},
			// 	"errMsg": "request:ok"
			// }
			// // 兼容小程序，小程序中 'x-total-count' 是 大写开头
			// uni.setNavigationBarTitle({
			// 	title: `新闻`
			// })
			// const data = res.data.result.list
			// this.listData = this.reload ? data : this.listData.concat(data)
			// if (this.listData.length === Number(res.header['x-total-count'])) {
			// 	this.status = 'noMore'
			// }
			// this.reload = false
			// uni.stopPullDownRefresh()

			API.getNews(params).then(res => {
				if (res.data && res.statusCode == 200) {
					// 兼容小程序，小程序中 'x-total-count' 是 大写开头
					uni.setNavigationBarTitle({
						title: '新闻（' + Number(res.header['x-total-count'] || res.header[
							'X-Total-Count'] || '') + '篇）'
					})
					const data = res.data.result.list
					this.listData = this.reload ? data : this.listData.concat(data)
					if (this.listData.length === Number(res.header['x-total-count'])) {
						this.status = 'noMore'
					}
					this.reload = false
					uni.stopPullDownRefresh()
				}
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.uni-media-list-logo {
	width: 180rpx;
	height: 140rpx;
}

.uni-media-list-body {
	height: auto;
	justify-content: space-around;
}

.uni-media-list-text-top {
	height: 74rpx;
	font-size: 28rpx;
	overflow: hidden;
}

.uni-media-list-text-bottom {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
