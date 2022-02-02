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
import {fetchAskList} from '../api';

export default {
    data(){
        return {
            asks : []
        }
    },

    async created(){
        const response = await fetchAskList();
        console.log(response);

        this.asks = response.data;
    }

}
</script>

<style>

</style>