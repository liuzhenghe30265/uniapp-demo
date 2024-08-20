<template>
	<view class="details">
		<view v-if="source === 'projects'">
			<view class="title">
				{{details.name}}
			</view>
			<view class="info">
				<view class="item">
					{{genDate(details.date)}}
				</view>
				<view class="item" v-if="details.url">
					<uni-icons type="paperplane" color="#000" size="12" @click="handleUrlClick(details)" />
				</view>
			</view>
			<rich-text class="markdown-body" :nodes="richText"></rich-text>
		</view>
		<view v-else>
			<view class="title">
				{{details.title}}
			</view>
			<view class="info">
				<view class="item">
					{{details.author}}
				</view>
				<view class="item">
					{{details.categories}}
				</view>
				<view class="item">
					{{genDate(details.date,)}}
				</view>
			</view>
			<rich-text class="markdown-body" :nodes="richText"></rich-text>
		</view>
	</view>
</template>

<script>
	import {
		dateFormat
	} from '../../common/date.js'
	import * as API from '../../common/api.js'
	export default {
		data() {
			return {
				source: '',
				richText: '',
				details: {}
			};
		},
		onLoad(e) {
			const _this = this
			const ID = e.id
			uni.showLoading({
				title: "加载中..."
			})
			if (e.source === 'projects') {
				this.source = 'projects'
				API.getProjectDetails(ID).then(res => {
					if (res.data && res.statusCode == 200) {
						this.details = res.data
						this.richText = res.data.content
						uni.setNavigationBarTitle({
							title: res.data.name
						})
						uni.hideLoading()
					}
				}).catch(err => {
					console.log(err)
				})
			} else {
				API.getArticleDetails(ID).then(res => {
					if (res.data && res.statusCode == 200) {
						this.details = res.data
						this.richText = res.data.content
						uni.setNavigationBarTitle({
							title: res.data.title
						})
						// let strings = res.data.content
						// const regex = new RegExp('<img style="max-width:100%"', 'gi')
						// const richtext = strings.replace(regex,
						// 	`<img style="max-width: 100%; border-radius: 12px;"`)
						// this.richText = richtext
						// _this.setData({
						// 	richText: richtext
						// })
						uni.hideLoading()
					}
				}).catch(err => {
					console.log(err)
				})
			}

		},
		methods: {
			handleUrlClick(data) {
				window.location.href = data.url
			},
			genDate(data) {
				return dateFormat(data, "yyyy-MM-dd")
			}
		}
	}
</script>

<style lang="scss">
	.details {
		padding: 40rpx;

		.title {
			text-align: center;
			font-size: 38rpx;
			font-weight: bold;
		}

		.info {
			border-bottom: 1px solid #f5f5f5;
			padding: 20rpx 0;
			font-size: 24rpx;
			text-align: center;
			color: #6f6f6f;

			.item {
				display: inline-block;
				margin: 0 10rpx;
			}
		}
	}
</style>
