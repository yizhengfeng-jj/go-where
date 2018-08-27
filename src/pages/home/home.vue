<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>
<script>
import HomeHeader from './components/home_header.vue';
import HomeSwiper from './components/swiper.vue';
import HomeIcons from './components/home-icons.vue';
    export default {
        name: 'Home',
        components: {
            HomeHeader: HomeHeader,
            HomeSwiper: HomeSwiper,
            HomeIcons: HomeIcons
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

