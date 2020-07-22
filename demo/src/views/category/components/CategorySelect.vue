<template>
  <div class="wrapper" ref="wrapper">
    <ul class="select">
      <li v-for="(item, index) in select"
          :key="index"
          @click="onClick(index)"
          :class="{active2: selected === index}"
          ref="select">
        <span class="name"
              :class="{active: selected === index}">{{item.name}}</span>
      </li>
    </ul>
  </div>

</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    select: Array,
    selectNum: Number
  },
  data () {
    return {
      selected: 0
    }
  },
  created () {
    this.scroll()
  },
  methods: {
    scroll () {
      this.$nextTick(() => {
        const wrapper = this.$refs.wrapper
        if (!this.leftScroll) {
          this.leftScroll = new BScroll(wrapper, {
            probeType: 3,
            click: true,
            scrollY: true,
            tap: true,
            mouseWheel: true
          })
        } else {
          this.leftScroll.refresh()
        }
      })
    },
    onClick (val) {
      this.selected = val
      setTimeout(() => {
        const menuLists = this.$refs.select
        const el = menuLists[val]
        this.leftScroll.scrollToElement(el, 500)
      }, 100)
      this.$emit('emitIndex', val)
    }
  },
  watch: {
    selectNum (val, oldVal) {
      this.selected = val
    }
  }
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    overflow: hidden;
  }
  .select::after {
    content: ' ';
    display: block;
    width: 100%;
    height: 6rem;
    clear: both;
  }
  .select li {
    box-sizing: border-box;
    width: 100%;
    padding: 0.7rem 0;
    font-size: 0.9rem;
    color: #666666;
    border-bottom: 0.5px solid #EEEEEE;
  }
  .name {
    display: block;
    padding: 0.3rem 0.5rem;
  }
  .active {
    font-weight: 700;
    border-left: 0.2rem solid green;
  }
  .active2 {
    background-color: white;
  }
</style>
