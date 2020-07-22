<template>
  <div class="buy">
    <span class="title">限时抢购</span>
    <van-count-down format="HH mm ss"
                    :time="time"
                    class="countDown">
      <template v-slot="timeData">
        <span class="item">{{timeData.hours}}</span>
        <span class="item">{{timeData.minutes}}</span>
        <span class="item">{{timeData.seconds}}</span>
      </template>
    </van-count-down>
    <span style="float:right;
                font-size:0.8rem;
                color:green;">更多</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 30 * 60 * 1000 * 100
    }
  }
}
</script>

<style scoped>
  .buy {
    box-sizing: border-box;
    width: 95%;
    height: 2rem;
    line-height: 2rem;
    margin: 0.5rem auto;
    padding: 0 1rem;
    border-left: 0.2rem solid #4FC173;
  }
  .item {
    display: inline-block;
    width: 22px;
    margin-right: 5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
    border-radius: 2px;
  }
  .countDown {
    position: relative;
    float: left;
    margin-left: 0.5rem;
    top: 50%;
    transform: translateY(-50%)
  }
  .buy::after {
    content: '.';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .title {
    float: left;
    font-size: 1.2rem;
    font-weight: 700;
  }
</style>
