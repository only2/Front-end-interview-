<template>
  <div class="home">
  	{{message}}
    <img alt="Vue logo" src="../assets/logo.png">
    <VueBasic msg="父组件传值给子组件" @childFun="parentFun"/>
    <router-view/>
    <router-view name="test"/>
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
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
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
