<template>
  <div>
      <h1>jobs</h1>
      <ListItem :items="jobs"></ListItem>
  </div>
</template>

<script>
import {  mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import ListItem from '../components/ListItem.vue';
export default {

  data(){
    return {
        
    }
  },

    computed:{
        ...mapState(['jobs']),
        
        ...mapGetters(['jobsCount']),
    },

    methods:{
        ...mapMutations({
            setNews: 'setJobs'
        }),

        ...mapActions({
            FETCH_JOB : 'FETCH_JOB'
        }),
    },

    components:{
      ListItem
    },

  async created()
  {
      this.FETCH_JOB();
  }

}
</script>


<style scoped>
    
</style>