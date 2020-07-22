<template>
  <div>
    <div class="home" v-if="show">
      <!-- 搜索框 -->
      <home-search></home-search>
      <header class="header">
        <!-- 轮播图 -->
        <home-slider :lunbo="lunbo"></home-slider>
        <!-- tip -->
        <home-tip></home-tip>
      </header>
      <!-- 导航栏 -->
      <home-nav :nav="nav" :home_ad="home_ad"></home-nav>
      <!-- vip会员 -->
      <home-vip></home-vip>
      <!-- 限时抢购 -->
      <home-buy></home-buy>
      <home-buy-item :buy="buy"></home-buy-item>
      <!-- 特色专区 -->
      <home-special :special="special"></home-special>
      <!-- 商品 -->
      <home-commodity :commodity="commodity"></home-commodity>
      <!-- 最底部 -->
      <home-footer></home-footer>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import { getHomeData } from '../../serve/http'

import HomeSearch from './components/HomeSearch'
import HomeSlider from './components/HomeSlider'
import HomeTip from './components/HomeTip'
import HomeNav from './components/HomeNav'
import HomeVip from './components/HomeVip'
import HomeBuy from './components/HomeBuy'
import HomeBuyItem from './components/HomeBuyItem'
import HomeSpecial from './components/HomeSpecial'
import HomeCommodity from './components/HomeCommodity'
import HomeFooter from './components/HomeFooter'

export default {
  data () {
    return {
      lunbo: [],
      nav: [],
      buy: [],
      commodity: [],
      special: {},
      home_ad: '',
      show: false
    }
  },
  created () {
    getHomeData
      .then((res) => {
        this.lunbo = res.data.list[0].icon_list
        this.nav = res.data.list[2].icon_list
        this.buy = res.data.list[3].product_list
        this.commodity = res.data.list[12].product_list
        this.special = res.data.special_zone
        this.home_ad = res.data.home_ad.image_url
        this.show = true
      })
  },
  components: {
    HomeSearch,
    HomeSlider,
    HomeTip,
    HomeNav,
    HomeVip,
    HomeBuy,
    HomeBuyItem,
    HomeSpecial,
    HomeCommodity,
    HomeFooter
  }
}
</script>

<style scoped>
  .home::after {
    content: '';
    display: block;
    width: 100%;
    height: 3rem;
    visibility: hidden;
    clear: both;
  }
  .header {
    padding-top: 3rem;
    background-image: url('../../images/home/backImage.png')
  }
</style>
