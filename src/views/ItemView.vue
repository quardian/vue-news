<template>
  <div>
      <h1>ItemView</h1>

      <!--질문 상세-->
      <section>
        <div class="user-container">
          <div> <i class="fas fa-user"></i> </div>
          <div class="user-description">
            <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
            <div class="time">{{item.time_ago}}</div>
          </div>     
        </div> 
        <h2 v-html="item.title"></h2> 
        <p v-html="item.content"></p>  
      </section>

      <!-- 질문 댓글 -->
      <section>
        <ul>
          <li v-for="comment in item.comments" :key="comment.id">
            <span v-html="comment.content"></span>
          </li>
        </ul>
      </section>
      
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  
  computed:{
    ...mapState(['item']),
  },

  methods:{
    ...mapActions(['FETCH_ITEM']),
  },
  
  created()
  {
    const { id } = this.$route.params;

    this.FETCH_ITEM(id);
  },

}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  .fa-user{
    font-size: 2.5rem;
  }

  .user-description{
    padding-left: 8px;
  }

  .time{
    font-size: 0.7em;
  }
</style>