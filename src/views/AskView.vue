<template>
  <div>
      <h1>ask</h1>
      <ul>
          <li v-for="item in asks" :key="item.id">
              <!-- <a :href="item.url">{{item.title}}</a> -->
              <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
              <small>{{item.time_ago}} by {{item.user}}</small>  
              
          </li>
      </ul>
  </div>
</template>

<script>
import {  mapState, mapGetters, mapMutations,mapActions } from 'vuex';


export default {
    data(){
        return {
        }
    },

    computed:{
        ...mapState(['asks']),
        
        ...mapGetters(['asksCount']),
    },

    methods:{
        ...mapMutations({
            setAsks: 'setAsks'
        }),

        ...mapActions({
            FETCH_ASK : 'FETCH_ASK'
        }),
    },

    async created(){
        this.FETCH_ASK();
    }

}
</script>

<style>

</style>