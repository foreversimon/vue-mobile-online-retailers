<template>
  <div class="mine">
    <!-- 登陆头 -->
    <my-login></my-login>
    <!-- 我的订单 -->
    <my-order></my-order>
    <!-- 我的信息 -->
    <my-info></my-info>
    <!-- 我的VIP -->
    <my-vip></my-vip>
    <!-- 其他东西 -->
    <my-other></my-other>
  </div>
</template>

<script>
import MyLogin from './components/MyLogin'
import MyOrder from './components/MyOrder'
import MyInfo from './components/MyInfo'
import MyVip from './components/MyVip'
import MyOther from './components/MyOther'

export default {
  components: {
    MyLogin,
    MyOrder,
    MyInfo,
    MyVip,
    MyOther
  }
}
</script>

<style>
@import url('../../icons/style.css');
  .mine {
    height: 100vh;
    background-color: #f5f5f5;
  }
</style>
