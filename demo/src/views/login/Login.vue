<template>
  <div class="login">
    <div class="window">
      <img :src="pandaUrl"
           alt=""
           class="panda">
      <span class="close"
            @click="goBack">X</span>
      <div class="user">
        <van-tabs background="transparent">
          <van-tab title="登陆" name="a">
            <div>
              <van-field v-model="tel"
                         type="tel"
                         label="*手机号"
                         placeholder="请输入手机号"
                         class="backColor"
                         @focus="focusTel"
                         @blur="blur" />
            </div>
            <div>
              <van-field v-model="password"
                         type="password"
                         label="*密码"
                         placeholder="请输入密码"
                         class="backColor"
                         @focus="focusPw"
                         @blur="blur" />
            </div>
            <div class="code">
              <van-field class="codeInput backColor"
                         v-model="code"
                         placeholder="请输入验证码" />
              <img src="http://demo.itlike.com/web/xlmc/api/captcha"
                   alt=""
                   class="codeImg"
                   ref="codeImg"
                   @click="changeCode">
            </div>
            <div class="btn">
              <van-button type="info" @click.prevent="goToLogin">登陆</van-button>
            </div>
          </van-tab>

          <van-tab title="注册" name="b">
            <div>
              <van-field v-model="tel"
                         type="tel"
                         label="*手机号"
                         placeholder="请输入手机号"
                         class="backColor"
                         @focus="focusTel"
                         @blur="blur" />
            </div>
            <div>
              <van-field v-model="password"
                         type="password"
                         label="*密码"
                         placeholder="请输入密码(不少于6位)"
                         class="backColor"
                         @focus="focusPw"
                         @blur="blur" />
            </div>
            <div class="btn">
              <van-button type="info" @click.prevent="goToRegister">注册</van-button>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      changePanda: 0,
      pandaUrl: require('../../images/login/normal.png'),
      tel: null,
      password: null,
      code: null
    }
  },
  methods: {
    focusTel () {
      this.changePanda = 1
      this.pandaImg()
    },
    focusPw () {
      this.changePanda = 2
      this.pandaImg()
    },
    blur () {
      this.changePanda = 0
      this.pandaImg()
    },
    pandaImg () {
      switch (this.changePanda) {
        case 0:
          this.pandaUrl = require('../../images/login/normal.png')
          break
        case 1:
          this.pandaUrl = require('../../images/login/greeting.png')
          break
        case 2:
          this.pandaUrl = require('../../images/login/blindfold.png')
          break
      }
    },
    goBack () {
      this.$router.back()
    },
    changeCode () {
      const codeImg = this.$refs.codeImg
      this.$set(codeImg, 'src', 'http://demo.itlike.com/web/xlmc/api/captcha?time=' + new Date())
    },
    goToLogin () {
      this.$store.dispatch('USER_LOGIN', {
        tel: this.tel,
        pw: this.password,
        code: this.code
      })
        .then((res) => {
          if (res) {
            this.$router.back()
          }
        })
    },
    goToRegister () {
      this.$store.dispatch('USER_REGISTER', {
        tel: this.tel,
        pw: this.password
      })
    }
  },
  computed: {
  }
}
</script>

<style scoped>
  .login {
    position: relative;
    height: 100vh;
    width: 100vw;
    background: url('../../images/login/back2.jpg') no-repeat;
    background-size: 100vw 100vh;
  }
  .window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    background-color: rgba(255, 255, 255, 0.9)
  }
  .user {
    padding: 2rem 1rem 1rem 1rem;
  }
  .code {
    display: flex;
  }
  .code .codeInput {
    flex: 0 0 50%;
  }
  .code .codeImg {
    flex: 0 0 50%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .btn button {
    width: 100%;
    height: 3rem;
  }
  .backColor {
    background-color: transparent;
  }
  .panda {
    position: absolute;
    display: inline-block;
    left: 50%;
    top: -2.25rem;
    transform: translateX(-50%);
    width: 5rem;
    height: 4.5rem;
  }
  .close {
    position: absolute;
    display: block;
    right: 1rem;
    top: 0.5rem;
    height: 1rem;
    width: 1rem;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 50%;
    border: 0.5px solid black;
  }
</style>
