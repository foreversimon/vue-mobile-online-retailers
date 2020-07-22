<template>
  <div>
    <div>
      <img :src="home_ad" class="ad">
    </div>
    <van-grid column-num="5" :border="false">
      <van-grid-item v-for="(item, index) in nav"
                     :key="index"
                     class="item"
                     @click="pushUrl(index)">
        <img :src="item.icon_url" alt="">
        <p>{{item.name}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array,
    home_ad: String
  },
  created () {
  },
  methods: {
    pushUrl (index) {
      this.$store.commit('PUSH_CATEGORY', index + 1)
      this.$router.push('/dashboard/category')
    }
  }

}
</script>

<style scoped>
  .ad {
    width: 100%;
  }
  .item img {
    width: 50%;
  }
  .item p {
    font-size: 0.7rem;
  }
</style>
