<template>
  <div>
      <h1>News {{newsCount}}건</h1>
      <ul>
          <li v-for="item in this.news" :key="item.id">
              {{ item.title }}
              {{ item.url }}
          </li>
      </ul>
  </div>
</template>

<script>
import {useStore, mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    store: useStore(),

    data(){
        return {
        }
    },

    computed:{
        ...mapState(['news']),
        
        ...mapGetters(['newsCount']),
    },

    methods:{
        ...mapMutations({
            setNews: 'setNews'
        }),

        ...mapActions({
            FETCH_NEWS : 'FETCH_NEWS'
        }),
    },

    created(){
       this.FETCH_NEWS();
    },

}

</script>

<style>

</style>