export default {
    setNews(state, payload){
        state.news = payload;
    },
    setAsks(state, payload){
        state.asks = payload;
    },
    setJobs(state, payload){
        state.jobs = payload;
    },  
    setUser(state, payload){
        state.user = payload;
    },
    setItem(state, payload){
        state.item = payload;
    }
}