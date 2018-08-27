<template>
    <div class='wrapper'>
        <swiper :options="swiperOption">
            <swiper-slide v-for='list in swiperList' :key='list.id'>
                <img :src="list.url" alt="图片">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
    </div>
</template>
<script>
    export default {
        name: 'HomeSwiper',
        data: function() {
            return {
               swiperOption: {
                   pagination: '.swiper-pagination',
                   loop: true
               },
               swiperList: [
                   {
                       id: '001',
                       url: 'http://img1.qunarzz.com/piao/fusion/1808/ad/1d2e0030d4ff7302.jpg_750x200_bf5a325d.jpg'
                   },
                   {
                       id: '002',
                       url: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
                   },
                   {
                       id: '003',
                       url: 'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
                   }
               ]
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
</style>

