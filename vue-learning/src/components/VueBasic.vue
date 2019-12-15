<template>
 	<div class="basicContainer">
 		<h3>Vue生命周期</h3>
 		<p>{{beforeCreate}}=>{{created}}=>{{beforeMount}}=>{{mounted}}=>{{beforeUpdate}}=>{{updated}}=>{{beforeDestroy}}=>{{destroyed}}</p>
 		<h3>父组件传值给子组件示例 => {{msg}}</h3>
 		<button @click="dispatch()">子组件触发父组件</button>
 		<div class="setter">
 			<h3>计算属性setter(一般用于页面数据显示)</h3>
 			<p> {{ fullName }} </p>
 		</div>
 		<div class="watch">
 			<h3>watch的用法(数据变化时执行异步或开销较大的操作时)</h3>
 			<span>普通监听监听某个值的变化</span><br>
 			<span>深度监听监听对象数组的变化</span>
 		</div>
 		<div class="classStyle">
 			<h3>class和style的动态绑定</h3>
 			<div :class="['test', firstName ? 'firstName' : '']">class动态绑定</div>
 			<div :style="{color: 'black', background: firstName ? 'red':'green'}">style动态绑定</div>
 		</div>
 		<div class="ifShow">
 			<h3>v-if与v-show的区别</h3>
 			<p>
 				v-if配合v-else,v-else-if使用。
 				v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。<br>
				v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。<br>
				相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。<br>
				一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好<br>
 			</p>
 		</div>
 	</div>
</template>

<script>

export default {
	name: 'VueBasic',
	props:["msg"],
	data: function() {
		return {
			beforeCreate: 'data初始化，eventWatch事件监听配置前调用',
			created: 'data,计算属性，store，eventWatch已经完成初始化，但是Dom树还没有完成挂载。',
			beforeMount: '将模板转化为render函数，创建Dom树',
			mounted: '虚拟Dom创建完成并用其替换掉真正的Dom树',
			beforeUpdate: '数据被更新之前调用',
			updated: '数据被更新之后调用',
			beforeDestroy: '实例销毁之前调用，现在还可以访问实例的完整数据',
			destroyed: '组件已经被销毁',
			firstName: 'Li',
    		lastName: 'ZhiXiang',
    		people: {
    			name: 'lizhixiang',
    			tel: 17602523668
    		}
		}
	},
	watch: {
		firstName: function(newValue) {
			console.log(newValue);
		},
		people: {
			handler: function(newValue, oldValue) {
				console.log('newValue', newValue)
			},
			deep: true
		}
	},
	computed: {
		fullName: {
			get: function() {
				return this.firstName + '' + this.lastName;
			},
			set: function(newValue) {
				let names = newValue.split('');
				this.firstName = names[0];
				this.lastName = name[1];
			}
		}
	},
	beforeCreate() {
		console.log(this.beforeCreate)
	},
	created() {
		console.log('测试父组件给子组件传值')
		console.log(this.msg);
		console.log(this.created)
		this.people = {
			name: 'wanglili',
    		tel: 17602523668
		}
	},
	beforeMount() {
		console.log(this.beforeMount)
	},
	mounted() {
		console.log(this.mounted)
	},
	beforeUpdate() {
		console.log(this.beforeUpdate)
	},
	updated() {
		console.log(this.updated)
	},
	beforeDestroy() {
		console.log(this.beforeDestroy)
	},
	destroyed() {
		console.log(this.destroyed)
	},
	methods: {
		dispatch() {
			console.log(666);
			this.$emit('childFun','子组件成功调用父组件方法并传值');
		},
		resetName() {
			console.log('6666')
			this.fullname = 'Wang LiLi';
		}
	}

}
</script>
