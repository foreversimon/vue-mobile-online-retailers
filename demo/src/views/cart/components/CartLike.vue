<template>
  <div>
    <div class="title">猜你喜欢</div>
    <div class="content">
      <div class="item" v-for="(item, index) in likeData" :key="index">
        <img :src="item.small_image" alt="">
        <div class="smTitle">{{item.name}}</div>
        <div class="subTitle">{{item.spec}}</div>
        <div class="footer">
          <span class="price">￥{{item.price}}</span>
          <span class="oldPrice">￥{{item.origin_price}}</span>
          <i class="icon-cart" @click="addItem(item)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLike } from '../../../serve/http'

export default {
  data () {
    return {
      likeData: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      getLike
        .then((res) => {
          this.likeData = res.data.product_list
        })
    })
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
  .title {
    padding: 0 0.5rem;
    margin-bottom: 2rem;
    line-height: 1px;
    border-left: 25vw solid #ddd;
    border-right: 25vw solid #ddd;
    text-align: center;
  }
  .content {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    width: 100vw;
  }
  .item {
    position: relative;
    flex: 0 0 48%;
    width: 50%;
    margin: 0.5rem 1%;
    padding-bottom: 2rem;
    background-color: white;
  }
  .item img {
    display: inline-block;
    width: 100%;
    height: 10rem;
    background-color: aliceblue;
  }
  .smTitle {
    word-wrap: break-word;
    font-size: 0.9rem;
  }
  .subTitle {
    word-wrap: break-word;
    font-size: 0.8rem;
    color: gray;
    margin-bottom: 2rem;
  }
  .price {
    font-size: 1rem;
  }
  .oldPrice {
    font-size: 0.8rem;
    color: gray;
    text-decoration: line-through;
  }
  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 0.5rem;
  }
  .icon-cart {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    right: 0.5rem;
    width: 1.5rem;
    bottom: 0.7rem;
    height: 1.5rem;
    font-size: 0.8rem;
    background-color: #42BE69;
    padding: 0.3rem 0 0 0.3rem;
    border-radius: 50%;
  }
</style>
