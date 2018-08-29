<template>
    <div class='wrapper'>
        <swiper :options='swiperOptions'>
            <swiper-slide v-for='(page, index) in pages' :key='index'>
                <div class='simple-img' v-for='item in page' :key='item.id'>
                    <div class='img'>
                        <img :src="item.imgUrl" alt="图片"/>
                    </div>
                    <p class='img-des'>{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
      swiperIcons: {
          type: Array
      }
  },
  data: function() {
    return {
        swiperOptions: {
            pagination: '.swiper-pagination',
        }
    };
  },
  computed: {
      pages: function() {
          let pages = [];
          this.swiperIcons.forEach((value, index) => {
              let page = Math.floor(index / 8);

              if(!pages[page]) {
                  pages[page] = [];
                }
              pages[page].push(value)
          })
          return pages;
      }
  }
};
</script>
<style lang='stylus' scoped>
.wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;

    .simple-img {
        position: relative;
        width: 25%;
        display: inline-block;
        float: left;
        padding-bottom: 25%;
        overflow: hidden;

        .img {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 1rem;
            margin: auto;
            box-sizing: border-box;
            padding: 1rem;

            img {
                height: 100%;
            }
        }

        .img-des {
            text-align: center;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1rem;
            line-height: 1rem;
        }
    }
}
</style>

