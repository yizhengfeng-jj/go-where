<template>
    <div class='city-list'>
        <div class='city-you'>
            <div class='info-header'>您的位置</div>
            <div class='city'>
                <span>北京</span>
            </div>
        </div>
        <div class='hot-city'>
            <div class='info-header'>热门城市</div>
            <div class='city'>
                <span v-for='hotcity in hotCities' :key='hotcity.id'>{{hotcity.name}}</span>
            </div>
        </div>
        <div class='city-all' v-for='(city, key) in cities' :key='key'>
             <div class='info-header'>{{key}}</div>
             <div class='city-list'>
                <div class='simple-city' v-for='cityItem in city' :key='cityItem.id'>{{cityItem.name}}</div>
             </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CityList',
        props: {
            cities: {
                type: Object
            },
            hotCities: {
                type: Array
            }
        },
        data: function() {
            return {
                test: 'aaa'
            }
        }
    }
</script>
<style lang='stylus' scoped>
.city-list
    overflow: hidden;
    .info-header
        width: 100%
        line-height: 1.5rem
        background: #ccc
        font-size: 1rem
        padding-left: 1.5rem
    .city
        padding: 0.6rem
        span
            margin: 0.5rem
            padding: 0.2rem 1.5rem
            border: solid 1px #ccc
            display: inline-block

    .city-all
        .city-list
            .simple-city
                line-height: 2.5rem
                border-bottom: solid 1px #ccc
                padding-left: 0.5rem

</style>
