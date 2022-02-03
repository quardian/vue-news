//import ListView from './ListView.vue';
import {h} from 'vue';
import { mapActions } from 'vuex';

export default function createListView(component)
{
    // HOC (재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    return{
        name:'HOC Component',
        component,
        render(){
            return h(component);
        },

        methods:{
            ...mapActions(['FETCH_LIST']),
        },

        created(){
            console.log('createListView::created', this);
            this.emitter.emit('start:spinner');
            const pagename = this.$route.name;
            this.FETCH_LIST(pagename)
            .then(()=>{
                this.emitter.emit('end:spinner');
            })
            .catch((err)=>{
                console.log(err);
            });
        },
    }

}