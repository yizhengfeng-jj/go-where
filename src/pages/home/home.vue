<template>
    <div>
        <home-header :city='city'></home-header>
        <home-swiper :swiperImg='swiperImg'></home-swiper>
        <home-icons :swiperIcons='swiperIcons'></home-icons>
        <home-introduce :recommendList='recommendList'></home-introduce>
        <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/home_header.vue';
import HomeSwiper from './components/swiper.vue';
import HomeIcons from './components/home_icons.vue';
import HomeIntroduce from './components/home_introduce.vue';
import HomeWeekend from './components/home_weekend.vue';
import axios from 'axios';
    export default {
        name: 'Home',
        components: {
            HomeHeader: HomeHeader,
            HomeSwiper: HomeSwiper,
            HomeIcons: HomeIcons,
            HomeIntroduce: HomeIntroduce,
            HomeWeekend: HomeWeekend
        },
        data: function() {
            return {
                city: '',
                swiperImg: [],
                swiperIcons: [],
                swiperIntroduce: [],
                recommendList: [],
                weekendList: []
            }
        },
        methods: {
            getData: function() {
                axios.get(`/api/index.json`).then(this.dealData)
            },
            dealData: function(result) {
                let res = result.data.data;
                this.city = res.city;
                this.swiperImg = res.swiperList;
                this.swiperIcons = res.iconList;
                this.recommendList = res.recommendList;
                this.weekendList = res.weekendList;
            }
        },
        mounted: function() {
            this.getData()
        }
    }
</script>
<style>
    .red {
        color: 'red'
    }
</style>

