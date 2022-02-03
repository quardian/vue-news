<template>
  <div>
     <UserProfile :user="user">
          <template v-slot:username>
              <div>{{user.id}}</div>
          </template>

          <template v-slot:time>
              <div>{{user.created}}</div>
          </template> 

          <template v-slot:karama>
              <div>{{user.karma}}</div>
          </template>           
     </UserProfile>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components:{
      UserProfile
    },

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