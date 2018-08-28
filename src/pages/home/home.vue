<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-introduce></home-introduce>
        <home-weekend></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/home_header.vue';
import HomeSwiper from './components/swiper.vue';
import HomeIcons from './components/home_icons.vue';
import HomeIntroduce from './components/home_introduce.vue';
import HomeWeekend from './components/home_weekend.vue';
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
                test: 'aaa'
            }
        }
    }
</script>
<style>
    .red {
        color: 'red'
    }
</style>

