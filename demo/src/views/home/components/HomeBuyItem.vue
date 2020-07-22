<template>
  <div ref="wrapper">
    <ul class="srcollbox">
      <li v-for="(item, index) in buy" :key="index" class="fl">
        <p><img :src="item.small_image" alt=""></p>
        <p><span>{{item.name}}</span></p>
        <div class="price">
          <div class="fl">
            <div class="new">￥{{item.price}}</div>
            <div class="origin">￥{{item.origin_price}}</div>
          </div>
          <div class="cart" @click="addItem(item)">
            <i class="icon-cart"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    buy: Array
  },
  data () {
    return {
    }
  },
  mounted () {
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
  .fl {
    float: left;
  }
  .srcollbox {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: visible;
    width: 100%;
    height: 16rem;
  }
  .srcollbox li {
    flex: 0 0 30%;
  }
  .srcollbox li p {
    text-align: center;
  }
  .srcollbox li p img {
    width: 100%;
  }
  .srcollbox li p span {
    display: block;
    height: 1rem;
    font-size: 0.7rem;
  }
  .price {
    position: relative;
    height: 3rem;
    top: 1rem;
  }
  .new {
    font-size: 0.9rem;
    color: red;
  }
  .origin {
    font-size: 0.8rem;
    text-decoration: line-through;
    color: gray;
  }
  .cart {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
    background-color: #4FC173;
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 50%;
  }
  .cart i {
    position: relative;
    display: block;
    width: 1rem;
    color: white;
    height: 0.8rem;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%)
  }
</style>
