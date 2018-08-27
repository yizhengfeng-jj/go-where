<template>
    <div>
        <home-header></home-header>
        <HomeSwiper></HomeSwiper>
    </div>
</template>
<script>
import HomeHeader from './components/home_header.vue';
import HomeSwiper from './components/swiper.vue';
    export default {
        name: 'Home',
        components: {
            HomeHeader: HomeHeader,
            HomeSwiper: HomeSwiper
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

