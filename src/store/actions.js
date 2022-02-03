import {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo} from '../api';

export default {
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

    async FETCH_USER(context, username){
        const {commit} = context;
        console.log(context);
        try {
            const response = await fetchUserInfo(username);
            commit('setUser', response.data);
        }catch(e){
            console.log(e);
        }
    },

    async FETCH_ITEM(context, id){
        const {commit} = context;
        console.log(context);
        try {
            const response = await fetchItemInfo(id);
            commit('setItem', response.data);
        }catch(e){
            console.log(e);
        }
    },

}