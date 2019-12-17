<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link :to="{name: 'user', params: {id: 789}}">Router-link</router-link>
      <button @click="toUser()">手动切换路由</button>
    </div>
    <router-view/>
    <router-view name="test"/>
  </div>
</template>
<script>

export default {
  data: function() {
    return {
      message: ''
    }
  },
  methods: {
    toUser() {
      // this.$router.push('/user/123');
      this.$router.push({name: 'user', params: {id: 456}})
    }
  },
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
