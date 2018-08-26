import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/home.vue';
import List from '../component/list.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: Home
        },
        {
            path: '/list',
            name: 'list',
            component: List
        }
    ]
});
