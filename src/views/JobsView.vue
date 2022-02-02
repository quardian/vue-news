<template>
  <div>
      <h1>jobs</h1>
      <ul>
        <li v-for="item in jobs" :key="item.id">
          {{item.title}}
        </li>
      </ul>
  </div>
</template>

<script>
import { fetchJobsList} from '../api/index';

export default {

  data(){
    return {
        jobs : []
    }
  },

  async created()
  {
    try
    {
        const response = await fetchJobsList();
        this.jobs = response.data;
    }catch(e){
        console.log(e);
    }
  }

}
</script>

<style>

</style>