<template>
    <div class='city-header'>
        城市搜索
        <router-link to='/'>
            <span class='header-iconfont iconfont'>&#xe624;</span>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'CityHeader',
        data: function() {
            return {
                test: 'aaa'
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .city-header
        width: 100%
        line-height: 2rem
        text-align: center
        background: #00b4d4
        font-size: 1rem
        color: #fff
        a
            text-decoration: none
            color: #fff
            .header-iconfont
                position: absolute
                left: 0
                top: 0
                display: inline-block
                width: 30px
                text-align: center
                line-height: 2rem

</style>
