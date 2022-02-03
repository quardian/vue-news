<template>
    <ListItem :items="this.list"></ListItem>
</template>

<script>

import ListItem from '../components/ListItem.vue';
import {mapState} from 'vuex';

export default {
    components:{
        ListItem
    },

    computed:{
        ...mapState(['list']),
    }
}
</script>

<style>

</style>