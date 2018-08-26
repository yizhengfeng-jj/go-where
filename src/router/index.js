import Vue from 'vue';
import Router from 'vue-router';
import HelloHtml from '../component/hello.vue';
import List from '../component/list.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: HelloHtml
        },
        {
            path: '/list',
            name: 'list',
            component: List
        }
    ]
});
