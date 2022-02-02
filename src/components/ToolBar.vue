<template>
  <div class="header">
      <router-link to="/">home</router-link> │
      <router-link to="/news">news</router-link> │
      <router-link to="/ask">ask</router-link> │
      <router-link to="/jobs">jobs</router-link> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header{
    color:white;
    background-color:#42b883;
    display: flex;
    padding: 8px;
  }
  .header a {
    color:white;
  }
  .header a.router-link-exact-active{
    color: red;
  }
</style>