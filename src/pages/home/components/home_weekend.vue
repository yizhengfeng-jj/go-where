<template>
    <div class='hot'>
        <div class='hot-text'>
            周末去哪儿
        </div>
        <ul class='img-list'>
            <li class='simple-item' v-for='introduce in weekendList' :key='introduce.id'>
                <img :src="introduce.imgUrl" alt="图片"/>
                <div class='hot-introduce'>
                    <p>{{introduce.title}}</p>
                    <p class='hot-des'>{{introduce.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'HomeWeekend',
        props: {
            weekendList: {
                type: Array
            }
        },
        data: function() {
            return {
                test: 'aa'
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .hot-text
        padding:8px 0
        text-indent: 1rem
        background: #ccc
    .simple-item
        padding: 8px 0 8px 8px
        border-bottom: solid 1px #ccc
        .hot-introduce
            margin-top: 10px
            .hot-des
                margin: 6px 0 0 0
                color: #ccc
        img
            height: 100px
            width: 100%
</style>
