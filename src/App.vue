<template>
  <ToolBar></ToolBar>
  <transition name="page">
    <router-view></router-view>
  </transition>
  <Spinner :loading="loadingStatus"></Spinner>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';

export default {
  name: 'App',
  components: {
    ToolBar, Spinner
  },

  data(){
    return {
      loadingStatus : false,
    }
  },

  methods:{
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    },
  },

  created(){
    this.emitter.on('start:spinner', this.startSpinner);
    this.emitter.on('end:spinner', this.endSpinner);
  },
  
  beforeUnmount(){
    this.emitter.off('start:spinner', this.startSpinner);
    this.emitter.off('end:spinner', this.endSpinner);
  },
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
