<template>
  <div class="wrapper">
    <div class="order">
      <div class="my"><span class="icon-address-book"></span> 我的订单</div>
      <div class="check">查看全部订单<span class="icon-ctrl1"></span></div>
    </div>
    <div class="iconBtn">
      <div>
        <i class="icon-cart"></i>
        <p>待支付</p>
      </div>
      <div>
        <i class="icon-credit-card"></i>
        <p>待收货</p>
      </div>
      <div>
        <i class="icon-ello"></i>
        <p>待评价</p>
      </div>
      <div>
        <i class="icon-coin-yen"></i>
        <p>售后/退款</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .wrapper {
    margin-bottom: 0.5rem;
    background-color: white;
  }
  .order {
    position: relative;
    padding: 0.5rem 0;
    width: 95vw;
    height: 1rem;
    margin: 0 auto;
  }
  .order div {
    display: inline-block;
  }
  .order .my {
    position: absolute;
    left: 0;
  }
  .order .check {
    position: absolute;
    right: 0;
    color: gray;
  }
  .iconBtn {
    display: flex;
    width: 95vw;
    margin: 2rem auto 1rem auto;
  }
  .iconBtn div {
    flex: 0 0 25%;
    text-align: center;
    font-size: 2rem;
  }
  .iconBtn div p {
    font-size: 0.8rem;
  }
</style>
