import {createStore} from 'vuex';
import mutations from './mutations';
import actions from './actions';

export default createStore({
    state:{
        news:[],
        asks:[],
        jobs:[],
        user:{},
        item:{},
        list:[],
    },

    getters:{
        newsCount(state/*, getters*/){
            return state.news.length;
        },
        asksCount(state/*, getters*/){
            return state.asks.length;
        },        
        jobsCount(state/*, getters*/){
            return state.jobs.length;
        },
    },

    mutations:mutations,

    actions: actions
});

