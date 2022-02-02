//import Vue from 'vue';
import {createWebHistory, createRouter} from 'vue-router';
//import App from '../App.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

const routes = [
    { path:'/news',  component: NewsView },
    { path:'/ask',   component: AskView },
    { path:'/jobs',  component: JobsView },
    { path:'/user/:id',  component: UserView },
    { path:'/item/:id',  component: ItemView },
    { path:'/',      redirect: '/news'},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
