<template>
  <div>
      <h1>jobs</h1>
      <ul>
        <li v-for="item in jobs" :key="item.id">
              <a :href="item.url">{{item.title}}</a>
              <small>{{item.time_ago}} at {{item.domain}}</small>
        </li>
      </ul>
  </div>
</template>

<script>
import {  mapState, mapGetters, mapMutations, mapActions} from 'vuex';

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

  async created()
  {
      this.FETCH_JOB();
  }

}
</script>

<style>

</style>