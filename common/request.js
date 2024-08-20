const baseUrl = 'http://localhost:3000'

const request = (url = '', reqData = {}, type = 'GET', header = {
	'Authorization': uni.getStorageSync('token') // 设置 token
}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中...'
		})
		uni.request({
			method: type,
			url: baseUrl + url,
			data: Object.assign({

			}, reqData),
			header: header,
			dataType: 'json',
		}).then((response) => {
			let [error, res] = response
			if (res.statusCode === 401 || (res.data && res.data.flag && res.data.flag === 401)) {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
			resolve(res.data)
			uni.hideLoading()
		}).catch(error => {
			let [err, res] = error
			reject(err)
		})
	})
}
export default request