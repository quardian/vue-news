<template>
  <div>
      <h1>News {{newsCount}}건</h1>
      <ul>
          <li v-for="item in this.news" :key="item.id">
              <a :href="item.url">{{item.title}}</a>
              <small>{{item.time_ago}} by 
                  <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
              </small>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex';

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

    created(){
       this.FETCH_NEWS();
    },

}

</script>

<style>

</style>