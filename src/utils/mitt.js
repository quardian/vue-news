//import Vue from 'vue';
//export default new Vue();

import mitt from 'mitt';
const emitter = mitt();

export default {
    install(Vue){
        Vue.config.globalProperties.emitter = emitter;
    }
}