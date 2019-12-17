<template>
  <div class="Age">
    24
  </div>
</template>

<script>

export default {
 	name: 'Age',
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
