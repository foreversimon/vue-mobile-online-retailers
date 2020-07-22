<template>
  <div class="login">
    <div class="title">我的</div>
    <div class="content">
      <img :src="avatar()" alt="" class="avatar">
      <div class="btn" @click="goToLogin" v-if="!isLogin">立即登录</div>
      <div class="btn" v-else>{{isLogin.user_name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    },
    avatar () {
      if (this.$store.state.userInfo.token) {
        return require('../../../images/mine/defaultImg.jpeg')
      } else {
        return null
      }
    }
  },
  computed: {
    isLogin () {
      if (this.$store.state.userInfo.token) {
        return this.$store.state.userInfo
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .login {
    padding: 0.5rem 0.5rem;
    background-color: rgb(59, 186, 99);
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: white;
    margin-bottom: 1rem;
  }
  .content {
    width: 100%;
    height: 4rem;
  }
  .content img {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: antiquewhite;
  }
  .content .btn {
    vertical-align: top;
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    color: white;
  }
</style>
