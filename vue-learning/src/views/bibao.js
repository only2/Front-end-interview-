for (var i = 0; i < 5; i++){
	setTimeout(function(){
		console.log(i);
	}, 1000)
}
// 使用let
for (let i = 0; i < 5; i++){
	setTimeout(function(){
		console.log(i);
	}, 1000)
}
//使用闭包
for (var i = 0; i < 5; i++){
	(function(j){
		setTimeout(function(){
			console.log(j);
		}, 1000)
	})(i)
}
//值传递
for (var i = 0; i < 5; i++){
	print(i);
}
function print(i) {
	setTimeout(function(){
		console.log(i)
	}, 1000)
}