<template>
    <ul class="container">
        <li v-for="item in this.items" :key="item.id" class="item">
            <!-- 포인트 영역-->
            <div class="points">
            {{item.points || 0}}
            </div>
            <!-- 기타 정보 영역 -->
            <div>
                <p class="title">
                    
                    <template v-if="isAsk">
                        <router-link :to="`/item/${item.id}`" class="link-text" >
                            {{item.title}}
                        </router-link>
                    </template>

                    <template v-else>
                        <a :href="item.url" target="_blank" >
                            {{item.title}}
                        </a>
                    </template>
                </p>

                <small class="link-text">
                    {{item.time_ago}} by 

                    <template v-if="isJob">
                        <a :href="`https://${item.domain}`" target="_blank">
                            {{item.domain}}
                        </a>     
                    </template>

                    <template v-else>
                        <router-link :to="`/user/${item.user}`" class="link-text">
                            {{item.user}}
                        </router-link>  
                    </template>
                  
                </small>                  
            </div>
            

        </li>
    </ul>
</template>

<script>
export default {
    props: {
        items : {
            // item{id:string, points?:number, url:string, title:string, time_ago:number, user:string}
            type: Array,
            default : ()=>[]
        }
    },
    computed:{
        isAsk() {
            return this.$route.name == 'ask';
        },
        isJob() {
            return this.$route.name == 'jobs';
        },
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