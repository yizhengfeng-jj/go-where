<template>
    <city-header></city-header>
</template>
<script>
import CityHeader from './components/city_header.vue';
    export default {
        name: 'City',
        components: {
            CityHeader: CityHeader
        },
        data: function() {
            return {
                test: 'aaa'
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .red
        color: red
</style>

