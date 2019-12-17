<template>
  <div class="Name">
    Lizhixiang
  </div>
</template>

<script>

export default {
 	name: 'Name',
 	data: function() {
		return {
			message: ''
		}
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
  },
 	methods: {
	},
}
</script>
