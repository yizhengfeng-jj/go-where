<template>
    <div class='city-alpha'>
        <div class='simple-alpha' v-for='(city, key) of cities' :key='key'>{{key}}</div>
    </div>
</template>
<script>
    export default {
        name: 'CityAlpha',
        props: {
            cities: {
                type: Object
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
.city-alpha
    width: 1rem
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    right: 0
    bottom: 0
    top: 0
    .simple-alpha
        color: #00b4d4
        line-height: 1.5rem


</style>
