<template>
  <div>
    <!-- 吃什么头部 -->
    <eat-header></eat-header>
    <!-- 吃什么标题 -->
    <eat-title></eat-title>
    <!-- 吃什么菜单 -->
    <eat-menu :menuData="menuData" @emitEatMenuIndex="sendIndex"></eat-menu>
    <!-- 吃什么内容 -->
    <eat-water-fall :id="id"></eat-water-fall>
  </div>
</template>

<script>
import EatHeader from './components/EatHeader'
import EatMenu from './components/EatMenu'
import EatTitle from './components/EatTitle'
import EatWaterFall from './components/EatWaterFall'

import { getEatMenuData } from '../../serve/http'

export default {
  components: {
    EatHeader,
    EatMenu,
    EatTitle,
    EatWaterFall
  },
  data () {
    return {
      menuData: [],
      id: 1
    }
  },
  mounted () {
    this.$nextTick(() => {
      getEatMenuData
        .then((res) => {
          this.menuData = res.data.list
        })
    })
  },
  methods: {
    sendIndex (val) {
      this.id = val
    }
  }
}
</script>

<style scoped>

</style>
