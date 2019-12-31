// 构造函数加原型实现类
function person(people) {
	this.init(people);
}
person.prototype = {
	constructor: person,
	init: function(option) {
		this.name = option.name;
		this.age = option.age;
		this.say();
	},
	say: function() {
		console.log(this.name, this.age);
	}
}
let aa = new person({name: 'lizhixiang', age: 24});
function person(people) {
	if (!this intanceof people) {
		return new person(people)
	}
}
// 构造函数加上内部函数实现类
function person(people) {
	function init(option) {
		this.name = option.name;
		this.age = option.age;
		say();
	}
	function say() {
		console.log(this.name, this.age);
	}
	let service = {
		start: function (config) {
			init(config)
		}
	};
	return service;
}
let people = new person;
people.start({name: 'lizhixiang', age: 24});
// es6 实现类
class Person {
	constructor(option) {
		this.name = option.name;
		this.age = option.age;
		this.say();
	}
	init(option){
		this.name = option.name;
		this.age = option.age;
		this.say();
	}
	say() {
		console.log(this.name, this.age);
	}
}
class People extends Person {
	constructor(option) {
		super(option);
		this.sayHello()
	}
	sayHello() {
		console.log('hello');
	}
}
let aa = new People({name: 'wanglili', age: 24});
function A(x) {
	this.x = x;
}
A.prototype.x = 1;
function B(x) {
	this.x = x;
}
B.prototype = new A();
var a = new A(2);
b = new B(3);
