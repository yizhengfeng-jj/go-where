import './css/common.css';
import './css/test.css';
import Vue from 'vue';
import List from './component/list.vue';
var app = new Vue({
    el: '#app',
    components: {
        List: List
    },
    data: {
        content: '我是vue',
        items: [{name: 'json', age: 21}, {name: 'json1', age: 22}, {name: 'json2', age: 23}]
    }
});
console.log(app);
