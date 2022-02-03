import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mitt from './utils/mitt';

const app = createApp(App);
const vm = app.use(router)
    .use(store)
    .use(mitt)
    .mount('#app');

console.log('vm', vm) ;

