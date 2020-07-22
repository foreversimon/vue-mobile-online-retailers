<template>
  <div class="wrapper">
    <div class="bl"></div>
    <div class="out" ref="out">
      <waterfall :col='2'
                :data="waterfallData">
        <div class="item" v-for="(item, index) in waterfallData" :key="index">
          <img v-lazy="item.image" alt="" class="itemImg">
          <div class="title">{{item.name}}</div>
          <div class="footer">
            <img v-lazy="item.author_avatar" alt="" class="footerImg">
            <span class="name">{{item.author_name}}</span>
          </div>
        </div>
      </waterfall>
      <p style="text-align: center;margin-bottom: 6rem;" v-show="active">------已到底------</p>
    </div>
  </div>
</template>

<script>
import { getEatData } from '../../../serve/http'

export default {
  props: {
    id: Number
  },
  data () {
    return {
      waterfallData: [],
      page: 1,
      active: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.loadmore(1)
      this.$nextTick(() => {
        this.$refs.out.addEventListener('scroll', this.listener)
      })
    })
  },
  methods: {
    listener () {
      const tempHeight = this.$refs.out.clientHeight + this.$refs.out.scrollTop + 1
      if (document.getElementById('vueWaterfall').scrollHeight <= tempHeight) {
        this.loadmore()
      }
    },
    loadmore (num = ++this.page) {
      let temp
      if (num < 10) {
        temp = '/lk0' + num
      } else {
        temp = '/lk' + num
      }
      getEatData(temp)
        .then((res) => {
          if (res.success) {
            const tempArray = this.waterfallData
            this.waterfallData = tempArray.concat(res.data.big_recommend.list)
          }
        }).catch((err) => {
          if (err) {
            this.$refs.out.removeEventListener('scroll', this.listener)
            this.active = true
          }
        })
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .bl {
    height: 8rem;
  }
  .out {
    height: calc(100vh - 8rem);
    overflow: scroll;
  }
  /* .wrapper::after {
    content: ' ';
    display: block;
    height: 6rem;
    width: 100%;
    visibility: hidden;
    clear: both;
  } */
  .vue-waterfall {
    -webkit-overflow-scrolling: touch;
  }
  /* .vue-waterfall::after {
    content: ' ';
    display: block;
    height: 6rem;
    width: 100%;
    visibility: hidden;
    clear: both;
  } */
  .item {
    box-sizing: border-box;
    padding: 0.3rem;
    margin-bottom: 0.7rem;
  }
  .itemImg {
    width: 100%;
    border-radius: 1rem;
    background-size: contain;
    background-image: url('../../../images/placeholderImg/product-img-load.png');
  }
  .title {
    padding: 0 0.8rem;
    font-weight: 700;
    font-size: 1rem;
    word-wrap: break-word;
  }
  .footer {
    margin: 0.5rem 0.5rem;
  }
  .footer img {
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
  .name {
    display: inline-block;
    position: absolute;
    margin-left: 0.6rem;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.9rem;
    color: gray;
  }
</style>
