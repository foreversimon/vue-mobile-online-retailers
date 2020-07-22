<template>
  <swiper class="swiper"
          :options="swiperOption">
    <swiper-slide class="swiper_slide" v-for="(item, index) in lunbo" :key="index">
      <img :src="item.icon_url" class="img">
    </swiper-slide>
    <div class="swiper-pagination"
          slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    lunbo: Array
  },
  data () {
    return {
      swiperOption: {
        // 进来就加载
        notNextTick: true,
        // 轮播图定位
        pagination: {
          el: '.swiper-pagination'
        },
        // 循环
        loop: true,
        // 自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        speed: 600,
        // 滑动后回调
        on: {
          slideChangeTransitionEnd () {
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
  .swiper {
    position: relative;
    width: 95%;
    border-radius: 1rem;
  }
  .img {
    width: 100%;
    height: 10rem;
  }
</style>
