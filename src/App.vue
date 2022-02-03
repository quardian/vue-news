<template>
  <ToolBar></ToolBar>
  <transition name="page">
    <router-view></router-view>
  </transition>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

a {
  text-decoration: none;
   text-decoration: underline;
}
a:hover{
  color: #42b883;
}

a.router-link-exact-active{
  text-decoration: underline;
}
</style>
