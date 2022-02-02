<template>
  <div>
      <h1>News</h1>
      <ul>
          <li v-for="item in news" :key="item.id">
              {{ item.title }}
              {{ item.url }}
          </li>
      </ul>
  </div>
</template>

<script>
import {fetchNewsList} from '../api';

export default {
    data(){
        return {
            news:[]
        }
    },

    async created(){
        try
        {
            const response = await fetchNewsList();
            this.news = response.data;
        }catch(e){
            console.log(e);
        }
    }
}

</script>

<style>

</style>