<template>
  <div>
      <h1>ItemView</h1>

      <!--질문 상세-->
      <section>
        <UserProfile :user="item">
          
          <template v-slot:username>
              <div>{{item.user}}</div>
          </template>

          <template v-slot:time>
              <div>{{item.time_ago}}</div>
          </template>          
          
        </UserProfile>
      </section>

      <section>
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
import UserProfile from '../components/UserProfile.vue';

export default {
  components :{
    UserProfile,
  },

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
  
</style>