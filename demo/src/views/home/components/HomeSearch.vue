<template>
  <div class="total" :style="showColor?'backgroundColor:white;':''">
    <!-- 定位框 -->
    <div class="local fl">
      <i class="icon-location1 fl"></i>
      <span></span>
      <i class="icon-ctrl fr"></i>
    </div>
    <!-- 搜索框 -->
    <div class="search fr">
      <i class="icon-search"></i>
      <input type="text" placeholder="输入商品名称">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showColor: false
    }
  },
  created () {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        this.getScroll()
      }, false)
    })
  },
  methods: {
    getScroll () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 100) {
        that.showColor = true
      } else {
        that.showColor = false
      }
    }
  },
  destroyed () {
    const that = this
    window.removeEventListener('scroll', that.getScroll)
  }
}
</script>

<style scoped>
  @import url('../../../icons/style.css');
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .total {
    box-sizing: border-box;
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 3rem;
    padding-top: 0.5rem;
  }
  .local {
    position: relative;
    width: 30%;
    height: 2rem;
    font-size: 1.2rem;
    line-height: 2rem;
    border-radius: 1rem;
    background-color: rgba(60, 60, 60, 0.3)
  }
  .local span {
    display: inline-block;
    height: 2rem;
    width: 3rem;
    overflow: hidden;
  }
  .local i {
    display: inline-block;
    margin: 0 0.2rem;
    height: 2rem;
    width: 1rem;
    line-height: 2rem;
  }
  .icon-ctrl {
    position: relative;
    top: -0.2rem;
  }
  .search {
    position: relative;
    box-sizing: border-box;
    right: 5%;
    width: 50%;
    height: 2rem;
    padding-left: 0.5rem;
    border-radius: 1rem;
    background-color: #f5f5f5;
  }
  .search input {
    margin-left: 0.5rem;
    width: 8rem;
    height: 1.8rem;
    border: none;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .icon-search {
    color: rgb(161, 161, 161)
  }
</style>
