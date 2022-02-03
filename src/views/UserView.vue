<template>
  <div>
      <h1>UserView</h1>
      <p>id={{user.id}}</p>
      <p>created={{user.created}}</p>
      <p>created_time={{user.created_time}}</p>
      <p>about={{user.about}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {

    computed:{
      ...mapState(['user']),
    },

    methods:{
      ...mapActions({
        FETCH_USER : 'FETCH_USER'
      }),
    },

    created(){
      const username = this.$route.params.id;
      this.FETCH_USER(username);
      console.log();
    },
}
</script>

<style>

</style>