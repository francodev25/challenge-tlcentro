require('./bootstrap');

import vue from 'vue'
window.Vue = vue;

import App from './App.vue'

//importamos Axios
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'boxicons/css/boxicons.min.css';

//Importamos y configuramos el Vue-router
import VueRouter from 'vue-router';
import {routes} from './router';

//importamos la Store
import store from './store'
 
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
//finalmente, definimos nuestra app de Vue
const app = new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App),
});