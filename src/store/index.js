import {createStore} from 'vuex';
import {fetchNewsList, fetchAskList, fetchJobsList} from '../api';

export default createStore({
    state:{
        news:[],
        asks:[],
        jobs:[],
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

    mutations:{
        setNews(state, payload){
            state.news = payload;
        },
        setAsks(state, payload){
            state.asks = payload;
        },
        setJobs(state, payload){
            state.jobs = payload;
        },                
    },

    actions:{
        async FETCH_NEWS(context){
            const {commit} = context;
            console.log(context);
            try {
                const response = await fetchNewsList();
                commit('setNews', response.data);
            }catch(e){
                console.log(e);
            }
        },

        async FETCH_ASK(context){
            const {commit} = context;
            console.log(context);
            try {
                const response = await fetchAskList();
                commit('setAsks', response.data);
            }catch(e){
                console.log(e);
            }
        },

        async FETCH_JOB(context){
            const {commit} = context;
            console.log(context);
            try {
                const response = await fetchJobsList();
                commit('setJobs', response.data);
            }catch(e){
                console.log(e);
            }
        },


    }
});

