<template>
    <home-header></home-header>
</template>
<script>
import HomeHeader from './components/home_header.vue';
    export default {
        name: 'Home',
        components: {
            HomeHeader: HomeHeader
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

