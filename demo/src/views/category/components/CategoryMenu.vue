<template>
  <div class="menu" ref="menu">
    <ul ref="ul">
      <li v-for="(item, index) in cateData"
          :key="index"
          :class="{active: index === actived}"
          @click="onClick(index)">{{item.name}}</li>
    </ul>
</div>

</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    cateData: Array
  },
  data () {
    return {
      actived: 0
    }
  },
  mounted () {
    const menu = this.$refs.menu
    setTimeout(() => {
      let tempWidth = 120
      for (let i = 0; i < this.cateData.length; i++) {
        tempWidth += this.$refs.ul.children[i].offsetWidth
      }
      this.$refs.ul.style.width = tempWidth + 'px'
      if (!this.rightScroll) {
        this.rightScroll = new BScroll(menu, {
          probeType: 3,
          startX: 0,
          click: true,
          scrollX: true,
          mouseWheel: true
        })
      } else {
        this.rightScroll.refresh()
      }
    }, 1000)
  },
  methods: {
    onClick (val) {
      this.actived = val
      setTimeout(() => {
        this.rightScroll.scrollToElement(this.$refs.ul.children[val], 500)
      }, 100)
      this.$emit('emitGoToIndex', val)
    }
  },
  watch: {
    cateData () {
      const menu = this.$refs.menu
      this.actived = 0
      this.$nextTick(() => {
        let tempWidth = 120
        for (let i = 0; i < this.cateData.length; i++) {
          tempWidth += this.$refs.ul.children[i].offsetWidth
        }
        this.$refs.ul.style.width = tempWidth + 'px'
        if (!this.rightScroll) {
          this.rightScroll = new BScroll(menu, {
            probeType: 3,
            startX: 0,
            click: true,
            scrollX: true
          })
        } else {
          this.rightScroll.refresh()
        }
      })
    }
  }
}
</script>

<style scoped>
  .menu {
    overflow: hidden;
    width: 100%;
    background-color: white;
  }
  .menu ul {
    white-space: nowrap;
  }
  .menu ul li {
    display: inline-block;
    font-size: 0.8rem;
    padding: 1.05rem 1rem;
  }
  .active {
    color: green;
  }
</style>
