<template>
    <div class='hot'>
        <div class='hot-text'>
            热门推荐
        </div>
        <ul class='img-list'>
            <li class='simple-item' v-for='introduce in introduceLists' :key='introduce.id'>
                <img :src="introduce.url" alt="图片"/>
                <div class='hot-introduce'>
                    <p>{{introduce.title}}</p>
                    <p class='hot-des'>{{introduce.des}}</p>
                    <p class='hot-button'>{{introduce.buttonText}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'HomeIntroduce',
        data: function() {
            return {
                introduceLists: [
                    {
                        id: '001',
                        url: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                        title: '大连圣亚海洋世界',
                        des: '浪漫大连圣地，海洋主题',
                        buttonText: '查看详情'
                    },
                    {
                        id: '002',
                        url: 'http://img1.qunarzz.com/sight/p0/1609/80/8092254b7f5f016ea3.water.jpg_200x200_cd798d39.jpg',
                        title: '上海欢乐谷',
                        des: '上海欢乐谷,你值得拥有',
                        buttonText: '查看详情'
                    },
                    {
                        id: '003',
                        url: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
                        title: '东方明珠',
                        des: '上海之都，东方明珠',
                        buttonText: '查看详情'
                    },
                    {
                        id: '004',
                        url: 'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_200x200_a32b9a92.jpg',
                        title: '上海野生动物园',
                        des: '一群动物在换了的玩耍',
                        buttonText: '查看详情'
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
            .hot-button
                display:inline-block
                background: #00afc7
                padding:2px 15px
                border-radius: 5px

        img
            height: 100px
            width: 40%
</style>
