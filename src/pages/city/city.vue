<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>
<script>
import CityHeader from './components/city_header.vue';
import CitySearch from './components/city_search.vue';
    export default {
        name: 'City',
        components: {
            CityHeader: CityHeader,
            CitySearch: CitySearch
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

