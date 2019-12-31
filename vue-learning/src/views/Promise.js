function getData(params) {
	let promise = new Promise(function(resolve, reject){
		let url = 'www.baidu.com';
		axios.get(url).then(res => {
			if (res && res.success) {
				resolve(res.data);
			} else {
				reject('获取数据失败')
			}
		})
		.catch(err => {
			reject('获取数据失败')
		})
	})
	return promise;
}
async function fetch() {
	let res = await getData();
	console.log('res', res);
}
fetch();