<template>
  <div class="tip">
    <div>
      <i class="icon-airplane"></i>
      <span>最快29分钟内到达</span>
    </div>
    <div>
      <i class="icon-coin-yen"></i>
      <span>0元起送 0配送费</span>
    </div>
    <div>
      <i class="icon-clipboard"></i>
      <span>安心选</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('../../../icons/style.css');
  .tip {
    display: flex;
  }
  .tip div {
    margin: 0.5rem auto;
    font-size: 0.8rem;
    text-align: center;
    color: green;
  }
  .tip div:nth-child(1) {
    width: 35%;
  }
  .tip div:nth-child(2) {
    width: 35%;
  }
  .tip div:nth-child(3) {
    width: 20%;
  }
</style>
