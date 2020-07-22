<template>
  <div>
    <div class="category" v-if="show">
      <!-- 分类搜索框 -->
      <category-header></category-header>
      <div class="row">
        <!-- 分类左选择栏 -->
        <category-select class="left" :select="select" :selectNum="selectNum" @emitIndex="getItem"></category-select>
        <div class="right">
          <!-- 分类内容头部菜单 -->
          <category-menu :cateData="cateData" @emitGoToIndex="setNum"></category-menu>
          <!-- 分类内容 -->
          <category-content :cateData="cateData" :num="num"></category-content>
        </div>
      </div>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import { getCategoryDetailData, getCategoryData } from '../../serve/http'

import CategoryHeader from './components/CategoryHeader'
import CategorySelect from './components/CategorySelect'
import CategoryMenu from './components/CategoryMenu'
import CategoryContent from './components/CategoryContent'

export default {
  components: {
    CategoryHeader,
    CategorySelect,
    CategoryMenu,
    CategoryContent
  },
  data () {
    return {
      select: [],
      cateData: [],
      num: 0,
      selectNum: 0,
      show: false
    }
  },
  created () {
    getCategoryData
      .then((res) => {
        this.select = res.data.cate
      })
    getCategoryDetailData('/lk001')
      .then((res) => {
        this.cateData = res.data.cate
        this.show = true
      })
  },
  mounted () {
  },
  methods: {
    getItem (index) {
      this.num = 0
      let temp = null
      if (index >= 9) {
        temp = '/lk0' + (index + 1)
      } else {
        temp = '/lk00' + (index + 1)
      }
      getCategoryDetailData(temp)
        .then((res) => {
          this.cateData = res.data.cate
        })
    },
    setNum (index) {
      this.num = index
    }
  },
  computed: {
    getCategoryIndex () {
      return this.$store.state.category
    }
  },
  watch: {
    getCategoryIndex (val, oldVal) {
      this.selectNum = val
      this.getItem(val)
    }
  }
}
</script>

<style scoped>
  .category {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .row {
    display: flex;
    width: 100%;
  }
  .left {
    flex: 0 0 25%;
    width: 100%;
    background-color: #f5f5f5;
  }
  .right {
    flex: 0 0 75%;
    width: 100%;
  }
</style>
