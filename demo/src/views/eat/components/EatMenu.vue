<template>
  <div class="menu" ref="wrapper">
    <ul ref="menu">
      <li v-for="(item, index) in menuData"
          :key="index"
          @click="toChange(index)"
          :class="{active: index === select}"
          >
          {{item.name}}
      </li>
    </ul>
    <span class="open">全部</span>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    menuData: Array
  },
  data () {
    return {
      select: 0
    }
  },
  mounted () {
    setTimeout(() => {
      if (!this.eatScroll) {
        let tempWidth = 200
        const li = this.$refs.menu.children
        for (let i = 0; i < li.length; i++) {
          tempWidth += li[i].offsetWidth
        }
        this.$refs.menu.style.width = tempWidth + 'px'
        this.eatScroll = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          startX: 0,
          click: true,
          scrollX: true
        })
      } else {
        this.eatScroll.refresh()
      }
    }, 1000)
  },
  methods: {
    scroll () {
    },
    toChange (index) {
      this.select = index
      this.$emit('emitEatMenuIndex', index)
    }
  }
}
</script>

<style scoped>
  .menu {
    z-index: 2;
    position: fixed;
    top: 5.8rem;
    width: 100vw;
    overflow-x: hidden;
    padding-bottom: 0.5rem;
    background-color: white;
  }
  .menu ul {
    white-space: nowrap;
    padding: 0.2rem 0;
  }
  .menu ul li {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.1rem 0.4rem;
    font-size: 0.9rem;
    border-radius: 1rem;
  }
  li {
    border: 0.5px solid gray;
  }
  .open {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    padding: 0 0.8rem;
    height: 100%;
    line-height: 1.6rem;
    font-family: 'icomoon';
    font-size: 0.9rem;
    color: gray;
    background-color: white;
  }
  .active {
    color: green;
    border: 0.5px solid green;
  }
</style>
