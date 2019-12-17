<template>
  <div class="user">
    王莉莉
    {{params}}
    <!-- <router-view></router-view> -->
    <router-view class="view two" name="about"></router-view>
   <!--  <router-view class="view two" name="age"></router-view> -->
  </div>
</template>

<script>

export default {
 	name: 'jsBasic',
 	data: function() {
		return {
			message: ''
		}
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
  },
  computed:{
    params: function() {
      return this.$route.params;
    }
  },
 	methods: {
    toUser() {
      this.$router.push('/about');
      // this.$router.push({name: 'user', params: {id: 456}})
    }
	},
}
</script>
