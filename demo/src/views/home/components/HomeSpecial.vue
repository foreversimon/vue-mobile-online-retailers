<template>
  <div>
    <div class="special">
      <div class="title">特色专区</div>
    </div>
    <div class="row">
      <!-- 新品尝鲜 -->
      <div class="border" style="border-left:1px solid gray;
                                 border-top:1px solid gray;">
        <p style="color: orange">{{special.newItemList[0].title}}</p>
        <p class="subtitle">{{special.newItemList[0].subtitle}}</p>
        <div class="inline_row">
          <img :src="special.newItemList[0].imageOne" alt="">
          <img :src="special.newItemList[0].imageTwo" alt="">
        </div>
      </div>
      <!-- 十二月爆款 -->
      <div class="border" style="border-right:1px solid gray;
                                 border-top:1px solid gray;">
        <p style="color: red">{{special.hotItemList[0].title}}</p>
        <p class="subtitle">{{special.hotItemList[0].subtitle}}</p>
        <div class="inline_row">
          <img :src="special.hotItemList[0].imageOne" alt="">
          <img :src="special.hotItemList[0].imageTwo" alt="">
        </div>
      </div>
    </div>
        <div class="row">
      <!-- 会员 -->
      <div class="border" style="border-left:1px solid gray;">
        <p style="color: green">{{special.vipItemList[0].title}}</p>
        <p class="subtitle">{{special.vipItemList[0].subtitle}}</p>
        <div class="inline_row">
          <img :src="special.vipItemList[0].imageOne" alt="">
          <img :src="special.vipItemList[0].imageTwo" alt="">
        </div>
      </div>
      <!-- 吃什么+平价菜场 -->
      <div class="border new_row">
        <div style="border-right:1px solid gray">
          <p style="color: black">{{special.otherItemList[0].title}}</p>
          <p class="subtitle">{{special.otherItemList[0].subtitle}}</p>
          <div class="inline_row smimg">
            <img :src="special.otherItemList[0].image" alt="">
          </div>
        </div>
        <div>
          <p style="color: black">{{special.lowPriceItemList[0].title}}</p>
          <p class="subtitle">{{special.lowPriceItemList[0].subtitle}}</p>
          <div class="inline_row smimg">
            <img :src="special.lowPriceItemList[0].image" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    special: Object
  },
  computed: {
  }
}
</script>

<style scoped>
  .special {
    box-sizing: border-box;
    width: 95%;
    height: 2rem;
    line-height: 2rem;
    margin: 0.5rem auto;
    padding: 0 1rem;
    border-left: 0.2rem solid #4FC173;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 700;
  }
  .row {
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    width: 95%;
  }
  .row div {
    width: 50%;
  }
  .row div p {
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
  .inline_row {
    display: flex;
    width: 100%;
  }
  .inline_row img {
    flex: 0 0 50%;
    width: 80%;
  }
  .subtitle {
    color: gray;
    font-size: 0.4rem;
  }
  .border {
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    padding-left: 0.5rem;
  }
  .new_row {
    display: inline-flex;
  }
  .new_row div {
    margin-left: 0.5rem;
  }
  .smimg img {
    width: 150%;
  }
</style>
