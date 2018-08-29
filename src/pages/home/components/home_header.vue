<template>
    <div class='header'>
        <div class='header-left'>
            <span class='iconfont'>&#xe624;</span>
        </div>
        <div class='header-input'>
            <span class='iconfont'>&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class='header-right'>
           <router-link to='/city'>
                {{city}}
                <span class='iconfont'>&#xe64a;</span>
           </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeHeader',
        props: {
            city: {
                type: String
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
    .header
        display: flex
        line-height: 3rem
        background: #00b4d4
        color: #fff
        .header-left
            width: 3rem
            float: left
            text-align: center
        .header-input
            flex: 1
            background: #fff
            border-radius: 0.5rem
            margin:0.4rem 0 0.4rem 0;
            color: #ccc;
            height: 2.2rem
            line-height: 2.2rem
            padding: 0 0 0 10px
        .header-right
            width: 5rem
            float: right
            padding-left: 15px
            a
                text-decoration: none
                color: #fff
</style>

