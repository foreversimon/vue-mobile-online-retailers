<template>
  <div class="title">
    购物车
    <span class="del" v-if="getCartActive.length" @click.stop="del">
      删除
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    del () {
      this.$dialog.confirm({
        title: '删除',
        message: '是否要删除'
      }).then(() => {
        this.$store.commit('DEL_SELECT_ITEM')
      }).catch(() => {
      })
    }
  },
  computed: {
    getCartActive () {
      return this.$store.state.cart
    }
  }
}
</script>

<style scoped>
  .title {
    position: sticky;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background-color: white;
  }
  .del {
    position: absolute;
    right: 0.5rem;
    font-size: 0.8rem;
    color: green;
  }
</style>
