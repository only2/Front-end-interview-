class Person {
	constructor(option) {
		this.init(option)
	}
	init(option) {
		this.name = option.name;
		this.age = option.age;
		this.say();
	}
	say() {
		console.log(this.name, this.age)
	}
}
class People extends Person {
	constructor(option) {
		super(option);
		this.sayHello();
	}
	sayHello() {
		console.log('hello')
	}
}
let aa = new People({name: 'lizhixiang', age: 18});
function Person(option) {
	this.name = option && option.name;
	this.age = option && option.age;
	this.sleep = function() {
		console.log(this.name + '正在睡觉');
	}
}
Person.prototype = {
	constructor: Person,
	say: function() {
		console.log(this.name, this.age)
	}
}

function People(option) {
	console.log(111)
	this.name = option.name;
	this.age = option.age;
}
// 原型继承
// People.prototype = Person.prototype;
// Person.prototype.constructor = People;
// 原型链继承 子类的prototype=父类的实例
People.prototype = new Person();
let aa = new People({name: 'lizhixiang', age: 18});

function People(option) {
	this.name = option.name;
	this.age = option.age;
	this.friends = ['xiaoming', 'xiaohong'];
}
People.prototype.say = function(){
	console.log('我的名字是：', this.name);
}

function Person(option){
	console.log('option', option)
	People.call(this, option);
}
Person.prototype = new People();
Person.prototype.constructor = People;
Person.prototype.sayHello = function() {
	console.log(this.age);
}
var aa = new Person({name: 'lizhixiang', age: '24'});
function debounce (fn, delay) {
	let timer = null;
	return function() {
		if (timer) {
			clearTimeout(timer);
		} else {
			time = setTimeout(fn, delay);
		}
	}
}
function throttle(fn, delay) {
	let isFree = true;
	return function() {
		if (isFree) {
			isFree = false;
			setTimeout(() => {
				fn();
				isFree = true;
			}, delay)
		} else {
			return false;
		}
	}
}