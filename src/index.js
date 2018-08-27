import Vue from 'vue';
import router from './router/index';
import App from './component/app.vue';
import './css/reset.css';
import './assets/styles/iconfont.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
var app = new Vue({
    el: '#app',
    router,
    components: {
        App: App
    }
});
console.log(55);
console.log(app);
