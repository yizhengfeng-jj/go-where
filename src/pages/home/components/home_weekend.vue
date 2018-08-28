<template>
    <div class='hot'>
        <div class='hot-text'>
            周末去哪儿
        </div>
        <ul class='img-list'>
            <li class='simple-item' v-for='introduce in introduceLists' :key='introduce.id'>
                <img :src="introduce.url" alt="图片"/>
                <div class='hot-introduce'>
                    <p>{{introduce.title}}</p>
                    <p class='hot-des'>{{introduce.des}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'HomeWeekend',
        data: function() {
            return {
                introduceLists: [
                    {
                        id: '001',
                        url: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
                        title: '上海必游TOP10',
                        des: '中西合璧，现代和传统各有各的精彩'
                    },
                    {
                        id: '002',
                        url: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
                        title: '亲子时光TOP10',
                        des: '走进自然或玩转乐园，感知大千世界'
                    },
                    {
                        id: '003',
                        url: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
                        title: '上海城市观光',
                        des: '来这里寻找你所认识的上海'
                    },
                    {
                        id: '004',
                        url: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
                        title: '情迷博物馆',
                        des: '穿梭时光岁月寻找答案'
                    },



                ]
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
