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

    // created()
    // {
    //    this.emitter.emit('start:spinner');
    //    this.FETCH_JOB()
    //    .then(()=>{
    //        this.emitter.emit('end:spinner');
    //    })
    //    .catch((err)=>{
    //        console.log(err);
    //    });        
    // }

}
</script>


<style scoped>
    
</style>