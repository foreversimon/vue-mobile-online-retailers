<template>
  <div class="cart">
    <!-- 购物车标题 -->
    <cart-title></cart-title>
    <!-- 购物车内容 -->
    <cart-content></cart-content>
    <!-- 购物车猜你喜欢 -->
    <cart-like></cart-like>
    <!-- 购物车结算栏 -->
    <cart-pay></cart-pay>
  </div>
</template>

<script>
import CartTitle from './components/CartTitle'
import CartContent from './components/CartContent'
import CartLike from './components/CartLike'
import CartPay from './components/CartPay'

export default {
  components: {
    CartTitle,
    CartContent,
    CartLike,
    CartPay
  }
}
</script>

<style scoped>
  .cart {
    width: 100%;
    padding-bottom: 5rem;
    background-color: #f5f5f5;
  }
</style>
