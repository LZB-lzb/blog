<template>
  <div id="app">
    <Navbar v-if="token"></Navbar>
    <div id="main" v-if="token">
      <Aside></Aside>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <div v-if="!token">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import Navbar from './components/Navbar.vue'
  import Aside from './components/Aside.vue'
  export default {
    computed: {
      ...mapState({
        token: (state) => state.login.token,
      }),
    },
    components: {
      Navbar,
      Aside
    },
    mounted() {
      this.$store.commit('gettoken')
      if(!this.$store.state.login.token){
       return this.$router.push('/login')
      }
    },
  }
</script>
<style lang="less">
  html,
  body {
    padding: 0;
    margin: 0;
  }

  #main {
    display: flex;
    /* justify-content: space-between; */
  }
</style>