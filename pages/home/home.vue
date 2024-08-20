<template>
	<view class="home_container">
		<h3 v-if="userInfo && userInfo.username">当前用户：{{userInfo.username}}</h3>
		<button @click="logout">注销</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import * as API from '../../common/api.js'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState([
				'userInfo',
			])
		},
		onLoad() {},
		methods: {
			...mapMutations(['updateUserInfo']),
			logout() {
				uni.removeStorageSync('token')
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>