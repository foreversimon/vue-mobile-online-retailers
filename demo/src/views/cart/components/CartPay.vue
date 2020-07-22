<template>
  <div class="pay" v-if="getCart.length">
    <div class="select">
      <span class="right"
            @click="changeRight"
            :class="{rightActive: change}"></span>
      <span>   全选</span>
    </div>
    <div class="buy">
      <span>结算</span>
    </div>
    <div class="total">
      <span>合计: </span>
      <span class="totalNum">￥{{getCartItemPrice}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      change: true
    }
  },
  methods: {
    changeRight () {
      this.change = !this.change
      if (this.change) {
        this.$store.commit('SELECT_ALL')
      } else {
        this.$store.commit('CANCEL_ALL')
      }
    }
  },
  computed: {
    getCartItemPrice () {
      const cart = this.$store.state.cart
      let totalPrice = 0
      cart.forEach((item) => {
        if (item.isSelect) {
          totalPrice += (item.price * item.num)
        }
      })
      return totalPrice.toFixed(2)
    },
    getCart () {
      return this.$store.state.cart
    }
  },
  watch: {
    getCart: {
      handler (val, oldVal) {
        for (let i = 0; i < val.length; i++) {
          if (val[i].isSelect) {
            this.change = true
          } else {
            this.change = false
            break
          }
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped>
  .pay {
    position: fixed;
    bottom: 0;
    padding-bottom: 3rem;
    height: 3rem;
    width: 100%;
    background-color: white;
  }
  .pay div {
    display: inline-block;
  }
  .select {
    width: 25%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
  }
  .right {
    display: inline-block;
    background-image: url('../../../images/cart/shop-icon.png');
    background-size: 2.5rem 5rem;
    width: 1rem;
    height: 1rem;
  }
  .rightActive {
    background-position: -1.2rem 0;
  }
  .total {
    float: right;
    height: 3rem;
    line-height: 3rem;
  }
  .total span {
    display: inline-block;
  }
  .totalNum {
    font-size: 0.9rem;
    color: red;
  }
  .buy {
    position: relative;
    float: right;
    width: 30%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: white;
    background-color: red;
  }
</style>
