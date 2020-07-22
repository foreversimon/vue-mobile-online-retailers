<template>
  <div>
    <div ref="content" class="wrapper">
      <div class="content">
        <div v-for="(totalItem, index) in cateData" :key="index">
          <div class="total" ref="total">{{totalItem.name}}</div>
          <ul>
            <li v-for="(item, id) in totalItem.products" :key="id">
              <img :src="item.small_image" alt="" class="img">
              <div class="item">
                <div class="thistitle">
                  <div class="title">{{item.name}}</div>
                  <div class="subtitle">{{item.spec}}</div>
                </div>
                <span class="price">￥{{item.price}}</span>
                <span class="oldPrice">￥{{item.origin_price}}</span>
                <i class="icon-cart" @click="addItem(item)"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    cateData: Array,
    num: Number
  },
  data () {
    return {
      offset: 0
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      // this.offset = this.$refs.total[0].offsetTop
      // console.log(this.offset + '---')
      if (!this.contentScroll) {
        this.contentScroll = new BScroll(this.$refs.content, {
          probeType: 3,
          click: true,
          scrollY: true,
          tap: true,
          mouesWheel: true
        })
      } else {
        this.contentScroll.refresh()
      }
    })
  },
  methods: {
    goToTitle (val) {
      this.contentScroll.scrollToElement(this.$refs.total[val], 300)
    },
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
  },
  watch: {
    num () {
      this.goToTitle(this.num)
    }
  }
}
</script>

<style scoped>
@import url('../../../icons/style.css');
  .wrapper {
    height: 100vh;
    overflow: hidden;
  }
  .content {
    width: 75vw;
  }
  .content::after {
    content: '.';
    display: block;
    clear: both;
    width: 100%;
    height: 10rem;
    visibility: hidden;
  }
  .content .total {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: gray;
    border-left: 0.2rem solid #D9E3E1;
    background-color: #F5F5F5;
  }
  .content div ul li {
    display: flex;
    width: 100%;
    background-color: white;
    border-bottom: 0.1rem solid #f4f4f4;
  }
  .img {
    display: inline-block;
    height: 6rem;
    width: 5rem;
    flex: 0 0 30%;
  }
  .item {
    display: inline-block;
    position: relative;
    height: 6rem;
    flex: 0 0 70%;
  }
  .item::after {
    content: '.';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .thistitle {
    position: absolute;
    top: 0.1rem;
  }
  .title {
    font-size: 0.75rem;
  }
  .subtitle {
    font-size: 0.7rem;
    color: gray;
  }
  .price {
    position: absolute;
    font-size: 0.9rem;
    bottom: 0.1rem;
    color: red;
  }
  .oldPrice {
    position: absolute;
    bottom: 0.1rem;
    left: 3rem;
    font-size: 0.8rem;
    color: gray;
    text-decoration: line-through;
  }
  .icon-cart {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    right: 1rem;
    width: 1.5rem;
    bottom: 0.2rem;
    height: 1.5rem;
    font-size: 0.8rem;
    background-color: #42BE69;
    padding: 0.3rem 0 0 0.3rem;
    border-radius: 50%;
  }
</style>
