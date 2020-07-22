<template>
  <div>
    <!-- 如果购物车没有东西则显示 -->
    <template v-if="getCartContent.length === 0">
      <div class="cartImg">
        <img src="../../../images/cart/empty.png" alt="">
        <div>购物车空空滴~</div>
        <div class="btn">
          <router-link class="btnbtn"
                       to="/dashboard/home">去逛逛</router-link>
        </div>
      </div>
    </template>
    <!-- 如果购物车有东西则显示以下 -->
    <template v-else>
      <div class="cartItem">
        <div class="cartContent" v-for="(item, index) in getCartContent" :key="index">
          <div class="cartSelect">
               <span :class="{changeSelect: item.isSelect}"
                     @click.stop="changeRight(index)">√</span>
          </div>
          <div class="cartPicture">
            <img :src="item.img" alt="">
          </div>
          <div class="cartDescribe">
            <div class="itemTitle">{{item.name}}</div>
            <div class="itemFooter">
              <span class="itemPrice">￥{{item.price}}</span>
              <div class="itemNum">
                <span class="itemSub" @click.stop="sub(index, item)">-</span>
                <span class="itemNumber">{{item.num}}</span>
                <span class="itemAdd" @click.stop="add(item)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    changeRight (index) {
      this.$store.commit('CHANGE_SELECT', index)
    },
    add (item) {
      this.$store.commit('ADD_ITEM', item)
    },
    sub (index, item) {
      this.$dialog.confirm({
        title: '删除',
        message: '是否要删除'
      }).then(() => {
        if (item.num === 1) {
          this.$store.commit('DEL_ITEM', index)
          return
        }
        this.$store.commit('SUB_ITEM', index)
      }).catch(() => {
      })
    }
  },
  computed: {
    getCartActive () {
      return this.$store.state.cartActive
    },
    getCartContent () {
      const temp = JSON.stringify(this.$store.state.cart)
      const tempJSON = JSON.parse(temp)
      return tempJSON
    }
  },
  watch: {
  }
}
</script>

<style scoped>
  .cartImg {
    width: 100%;
    padding: 1rem 0;
    text-align: center;
  }
  .cartImg img {
    display: inline-block;
    transform: scale(0.8)
  }
  .btn {
    width: 100%;
    margin: 1rem 0;
  }
  .btn .btnbtn {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    border-radius: 1rem;
    color: white;
    background-color: #45C763;
  }
  .cartItem {
    margin: 0.5rem 0 2.5rem 0;
    background-color: white;
  }
  .cartContent {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .cartSelect {
    position: relative;
    flex: 0 0 10%;
  }
  .cartSelect span {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    text-align: center;
    font-size: 0.8rem;
    color: white;
    border: 0.5px solid #ddd;
    border-radius: 50%;
  }
  .changeSelect {
    background-color: #45C763;
  }
  .cartPicture {
    flex: 0 0 35%;
    height: 7rem;
  }
  .cartPicture img {
    width: 100%;
    height: 100%;
  }
  .cartDescribe {
    position: relative;
    flex: 0 0 55%;
  }
  .cartDescribe div {
    display: inline-block;
  }
  .itemTitle {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
  }
  .itemFooter {
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: 1rem;
  }
  .itemPrice {
    position: absolute;
    left: 0.5rem;
  }
  .itemNum {
    position: absolute;
    right: 0.5rem;
  }
  .itemNum .itemNumber {
    display: inline-block;
    margin: 0 0.5rem;
    width: 1.5rem;
    text-align: center;
    padding: 0 0.3rem;
    background-color: #f5f5f5;
  }
</style>
