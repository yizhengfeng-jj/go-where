<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-introduce></home-introduce>
    </div>
</template>
<script>
import HomeHeader from './components/home_header.vue';
import HomeSwiper from './components/swiper.vue';
import HomeIcons from './components/home-icons.vue';
import HomeIntroduce from './components/home-introduce.vue';
    export default {
        name: 'Home',
        components: {
            HomeHeader: HomeHeader,
            HomeSwiper: HomeSwiper,
            HomeIcons: HomeIcons,
            HomeIntroduce: HomeIntroduce
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

