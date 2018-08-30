<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities='hotCities' :cities='cities'></city-list>
        <city-alpha :cities='cities'></city-alpha>
    </div>
</template>
<script>
import axios from 'axios';
import CityHeader from './components/city_header.vue';
import CitySearch from './components/city_search.vue';
import CityList from './components/city_list.vue';
import CityAlpha from './components/city_alpha.vue';
    export default {
        name: 'City',
        components: {
            CityHeader: CityHeader,
            CitySearch: CitySearch,
            CityList: CityList,
            CityAlpha: CityAlpha
        },
        data: function() {
            return {
                hotCities: [],
                cities: {}
            }
        },
        methods: {
            getData: function() {
                axios.get(`/api/city.json`).then(this.dealData)
            },
            dealData: function(result) {
                let res = result.data.data;
                this.cities = res.cities;
                this.hotCities = res.hotCities;
            }
        },
        mounted: function() {
            this.getData()
        }
    }
</script>
<style lang='stylus' scoped>
    .red
        color: red
</style>

