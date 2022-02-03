import {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList} from '../api';

export default {
    async FETCH_NEWS(context){
        const {commit} = context;
        console.log(context);
        try {
            const response = await fetchNewsList();
            commit('setNews', response.data);
            return response;
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
            return response;
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
            return response;
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
            return response;
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
            return response;
        }catch(e){
            console.log(e);
        }
    },

    async FETCH_LIST(context, pagename)
    {
        const {commit} = context;
        console.log(context);
        try {
            const response = await fetchList(pagename);
            commit('setList', response.data);
            return response;
        }catch(e){
            console.log(e);
        }
    }

}