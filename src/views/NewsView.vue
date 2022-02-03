<template>
  <div>
      <h1>News {{newsCount}}건</h1>
      <ListItem :items="this.news"></ListItem>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
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

    components:{
        ListItem
    },
    
    created(){
       this.FETCH_NEWS();
    },

}

</script>

<style scoped>

</style>