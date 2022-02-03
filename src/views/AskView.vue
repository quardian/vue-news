<template>
  <div>
      <h1>ask</h1>
      <ul>
          <li v-for="item in asks" :key="item.id">
              {{item.id}} - {{item.title}}
          </li>
      </ul>
  </div>
</template>

<script>
import {  useStore, mapState, mapGetters, mapMutations,mapActions } from 'vuex';


export default {
    store : useStore(),

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