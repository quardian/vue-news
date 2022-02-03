<template>
    <div class="container">
        
        <div>
            <i class="fas fa-user"></i>
        </div>

        <div class="description">
            <slot name="username"></slot>
            <!-- <div>userid:{{user.id}}</div> -->
        </div>

        <div class="time">
            <!-- time:{{user.created}} -->
            <slot name="time"></slot>
        </div>
        <slot name="karma"></slot>
    </div>
</template>

<script>
export default {
    props:{
        user:{
            type: Object,
            required:true,
            default: ()=>{ return {} }
        }
    },
}
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .fa-user{
        font-size: 2.5rem;
    }
    .description{
        padding-left: 8px;
    }
    .time{
        font-size: 0.7rem;
    }
</style>