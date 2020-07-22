import {
  USER_LOGIN,
  USER_REGISTER
} from './mutations-type'

import { toLogin, toRegister } from '../serve/http'

export default {
  [USER_LOGIN] ({ commit }, userInfo) {
    return new Promise(resolve => {
      toLogin(userInfo.tel, userInfo.pw, userInfo.code)
        .then((res) => {
          commit('SET_USER_INFO', res.data)
          resolve(true)
        })
    })
  },
  [USER_REGISTER] ({ commit }, userInfo) {
    return new Promise(resolve => {
      toRegister(userInfo.tel, userInfo.pw)
        .then((res) => {
          commit('SET_USER_INFO', res.data)
          resolve(true)
        })
    })
  }
}
