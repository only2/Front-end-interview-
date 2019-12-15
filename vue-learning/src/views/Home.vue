<template>
  <div class="home">
  	{{message}}
    <img alt="Vue logo" src="../assets/logo.png">
    <VueBasic msg="父组件传值给子组件" @childFun="parentFun"/>
  </div>
</template>

<script>

import VueBasic from '@/components/VueBasic'
export default {
 	name: 'home',
 	data: function() {
  		return {
  			message: ''
  		}
  	},
 	methods: {
  		parentFun(text) {
  			this.message = text;
		}
	},
 	components: {
		VueBasic
 	}
}
</script>
