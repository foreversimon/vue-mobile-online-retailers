<template>
  <div>
    <!-- 标签栏 -->
    <van-tabbar v-model="active" class="wrapper">
      <van-tabbar-item v-for="(item, index) in tabbars"
                       :key="index"
                       @click="onChange(item.name)"
                       :info="item.name=='cart'?infoNum:''">
        <span>{{item.title}}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>

    <!-- 显示缓存或者显示不缓存的路由 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tabbars: [{
        name: 'home',
        title: '首页',
        normal: require('@/images/tabbar/home_default.png'),
        active: require('@/images/tabbar/home_selected.png')
      }, {
        name: 'category',
        title: '分类',
        normal: require('@/images/tabbar/category_default.png'),
        active: require('@/images/tabbar/category_selected.png')
      }, {
        name: 'eat',
        title: '吃什么',
        normal: require('@/images/tabbar/eat_default.png'),
        active: require('@/images/tabbar/eat_selected.png')
      }, {
        name: 'cart',
        title: '购物车',
        normal: require('@/images/tabbar/shoppingcart_default.png'),
        active: require('@/images/tabbar/shoppingcart_selected.png')
      }, {
        name: 'my',
        title: '我的',
        normal: require('@/images/tabbar/mine_default.png'),
        active: require('@/images/tabbar/mine_selected.png')
      }]
    }
  },
  methods: {
    onChange (name) {
      this.checkTabbar(name)
      this.$router.push(name).catch((err) => {
        console.log(err)
      })
    },
    // 设定与路由相对应的图表active
    checkTabbar (item) {
      switch (item) {
        case 'home':
          this.active = 0
          break
        case 'category':
          this.active = 1
          break
        case 'eat':
          this.active = 2
          break
        case 'cart':
          this.active = 3
          break
        case 'my':
          this.active = 4
          break
      }
    }
  },
  created () {
    this.checkTabbar(this.$route.name)
  },
  computed: {
    infoNum () {
      return this.$store.state.cart.length
    }
  },
  watch: {
    // 添加路由监听，防止tabbar显示错误
    $route: {
      handler: function (val, oldVal) {
        this.checkTabbar(val.name)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  .wrapper {
    z-index: 999;
  }
</style>
