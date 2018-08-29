<template>
    <div class='hot'>
        <div class='hot-text'>
            热门推荐
        </div>
        <ul class='img-list'>
            <li class='simple-item' v-for='introduce in recommendList' :key='introduce.id'>
                <img :src="introduce.imgUrl" alt="图片"/>
                <div class='hot-introduce'>
                    <p>{{introduce.title}}</p>
                    <p class='hot-des'>{{introduce.desc}}</p>
                    <p class='hot-button'>查看详情</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'HomeIntroduce',
        props: {
            recommendList: {
                type: Array
            }
        },
        data: function() {
            return {
                test: ''
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .hot-text
        padding:8px 0
        text-indent: 1rem
        background: #ccc
        margin-top: 15px
    .simple-item
        padding: 8px 0 8px 8px
        border-bottom: solid 1px #ccc
        .hot-introduce
            float: right
            width:55%
            margin-top: 10px
            .hot-des
                margin: 6px 0 16px 0
                color: #ccc
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
            .hot-button
                display:inline-block
                background: #00afc7
                padding:2px 15px
                border-radius: 5px

        img
            height: 100px
            width: 40%
</style>
