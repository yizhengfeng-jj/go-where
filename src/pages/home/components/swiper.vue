<template>
    <div class='wrapper'>
        <swiper :options="swiperOption" v-if='swiperImg.length'>
            <swiper-slide v-for='list in swiperImg' :key='list.id'>
                <img :src="list.imgUrl" alt="图片" class='img'>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
    </div>
</template>
<script>
    export default {
        name: 'HomeSwiper',
        props: {
            swiperImg: {
                type: Array
            }
        },
        data: function() {
            return {
               swiperOption: {
                   pagination: '.swiper-pagination',
                   loop: true
               }
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        padding-bottom: 26.6%
        height:0
        background: #ccc
        .img
            width:100%
</style>

