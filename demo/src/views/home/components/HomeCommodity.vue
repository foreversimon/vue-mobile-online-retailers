<template>
  <div>
    <van-tabs v-model="active"
              color="green"
              :animated="true"
              :sticky="true"
              :offset-top="46"
              title-active-color="green">
      <van-tab title="全部">
        <home-commodity-item :commodity="commodity"></home-commodity-item>
      </van-tab>
      <van-tab title="晚餐">
        <home-commodity-item :commodity="commodity"></home-commodity-item>
      </van-tab>
      <van-tab title="人气">
        <home-commodity-item :commodity="commodity"></home-commodity-item>
      </van-tab>
      <van-tab title="心选">
        <home-commodity-item :commodity="commodity"></home-commodity-item>
      </van-tab>
    </van-tabs>
    <div></div>
  </div>
</template>

<script>
import HomeCommodityItem from './HomeCommodityItem'

export default {
  props: {
    commodity: Array
  },
  components: {
    HomeCommodityItem
  },
  data () {
    return {
      active: 0
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
