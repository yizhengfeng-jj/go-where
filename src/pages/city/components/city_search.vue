<template>
    <div class='city-search'>
        <input type="text"  class='search' placeholder='输入城市名字或者拼音'>
    </div>
</template>
<script>
    export default {
        name: 'CitySearch',
        data: function() {
            return {
                test: 'aaa'
            }
        }
    }
</script>
<style lang='stylus' scoped>
.city-search
    background: #00b4d4
    padding: 0 0.5rem  0.5rem  0.5rem
    .search
        height: 2rem
        line-height: 2rem
        padding: 0.5rem
        background: #fff
        width: 100%
        border-radius: 0.5rem
        outline: 0
        border: 0
        text-align: center

</style>
