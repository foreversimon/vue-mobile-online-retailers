<template>
  <div class="out">
    <div class="in" v-for="(item, index) in commodity" :key="index">
      <img :src="item.small_image" alt="" class="img">
      <div class="title">{{item.name}}</div>
      <div class="subtitle">{{item.spec}}</div>
      <div class="pri">
        <span class="price">￥{{item.price}}</span>
        <span class="oldPrice">￥{{item.origin_price}}</span>
        <i class="icon-cart" @click="addItem(item)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commodity: Array
  },
  methods: {
    addItem (item) {
      if (!this.$store.state.userInfo.token) {
        this.$router.push('/login')
        return
      }
      this.$store.commit('ADD_ITEM', {
        isSelect: true,
        img: item.small_image,
        name: item.name,
        price: item.price,
        id: item.id
      })
    }
  }
}
</script>

<style scoped>
@import url('../../../icons/style.css');
  .out {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
    padding-top: 0.5rem;
    background-color: #F5F5F5;
  }
  .out div {
    flex: 0 0 45%;
    margin-left: 3.33%;
  }
  .in {
    margin-bottom: 0.5rem;
    background-color: white;
  }
  .title {
    font-size: 0.6rem;
    height: 1rem;
  }
  .subtitle {
    font-size: 0.6rem;
    color: gray;
    margin-top: 0.5rem;
    height: 1rem;
  }
  .pri {
    width: 95%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .price {
    font-size: 0.9rem;
    color: red;
  }
  .oldPrice {
    font-size: 0.7rem;
    color: gray;
    text-decoration: line-through;
    margin-left: 0.2rem;
  }
  .img {
    display: block;
    width: 100%;
    height: 9rem;
  }
  .icon-cart {
    display: block;
    box-sizing: border-box;
    float: right;
    font-size: 0.8rem;
    width: 1.5rem;
    height: 1.5rem;
    padding-left: 0.3rem;
    padding-top: 0.3rem;
    border-radius: 50%;
    color: white;
    background-color: #4FC173;
  }
</style>
