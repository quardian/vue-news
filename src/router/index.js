//import Vue from 'vue';
import {createWebHistory, createRouter} from 'vue-router';
//import App from '../App.vue';
//import NewsView from '../views/NewsView.vue';
//import AskView from '../views/AskView.vue';
//import JobsView from '../views/JobsView.vue';
import ListView from '../views/ListView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js'

const routes = [
    { 
        path:'/news', 
        name:'news',  
        //component: NewsView 
        component: createListView(ListView),

        beforeEnter:(to, from ,next)=>{
            console.log('to',to);
            console.log('from',from);
            console.log('next',next);
            next();
        },
    },
    { 
        path:'/ask',  
        name:'ask',   
        //component: AskView 
        component: createListView(ListView)
    },
    { 
        path:'/jobs', 
        name:'jobs',  
        //component: JobsView 
        component: createListView(ListView)
    },
    { path:'/user/:id',  component: UserView },
    { path:'/item/:id',  component: ItemView },
    { path:'/',      redirect: '/news'},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
