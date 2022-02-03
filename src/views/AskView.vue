<template>
  <div>
      <h1>ask</h1>
      <ListItem :items="asks"></ListItem>
  </div>
</template>

<script>
import {  mapState, mapGetters, mapMutations,mapActions } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
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

    components:{
        ListItem
    },

    async created(){
        this.FETCH_ASK();
    }

}
</script>

<style scoped>
    .container {
        margin: 0;
        padding:0;
    }

    .item{
        height: 60px;
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: solid 1px #eee;
    }

    .points{
        width: 80px;
        height:60px;
        line-height: 60px;
        color:#42b883;
    }
    .title{
        margin: 0;
        text-align: left;
    }

    .link-text{
        color:#828282;
    }
</style>