<template>
    <div class='wrapper'>
        <swiper :options='swiperOptions'>
            <swiper-slide v-for='(page, index) in pages' :key='index'>
                <div class='simple-img' v-for='item in page' :key='item.id'>
                    <div class='img'>
                        <img :src="item.url" alt="图片"/>
                    </div>
                    <p class='img-des'>热门景点</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data: function() {
    return {
        swiperOptions: {
            pagination: '.swiper-pagination',
        },
        icons: [
        {
          id: "001",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          des: "景点门票"
        },
        {
          id: "002",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          des: "一日游"
        },
        {
          id: "003",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          des: "上海必游"
        },
        {
          id: "004",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          des: "游乐场"
        },
        {
          id: "005",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          des: "夏日玩水"
        },
        {
          id: "006",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          des: "普陀山"
        },
        {
          id: "007",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          des: "上海欢乐谷"
        },
        {
          id: "008",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
          des: "汽车票"
        },
        {
          id: "009",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
          des: "上海迪士尼"
        }
      ]
    };
  },
  computed: {
      pages: function() {
          let pages = [];
          this.icons.forEach((value, index) => {
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

