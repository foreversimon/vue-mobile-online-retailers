import {
  SET_USER_INFO,
  GET_USER_INFO,
  ADD_ITEM,
  SUB_ITEM,
  DEL_ITEM,
  CHANGE_SELECT,
  SELECT_ALL,
  CANCEL_ALL,
  DEL_SELECT_ITEM,
  PUSH_CATEGORY
} from './mutations-type'

export default {
  [SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
    window.localStorage.setItem('userInfo', userInfo)
  },
  [GET_USER_INFO] (state) {
    const getItem = window.localStorage.getItem('userInfo')
    if (getItem) {
      state.userInfo = getItem
    }
  },
  [ADD_ITEM] (state, itemInfo) {
    const temp = state.cart.some((val) => {
      return val.id === itemInfo.id
    })
    if (temp) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === itemInfo.id) {
          state.cart[i].num++
          return
        }
      }
    } else {
      itemInfo.num = 1
      state.cart.push(itemInfo)
    }
  },
  [SUB_ITEM] (state, index) {
    state.cart[index].num -= 1
  },
  [DEL_ITEM] (state, index) {
    state.cart.splice(index, 1)
  },
  [CHANGE_SELECT] (state, index) {
    state.cart[index].isSelect = !state.cart[index].isSelect
  },
  [SELECT_ALL] (state) {
    state.cart.forEach((item) => {
      item.isSelect = true
    })
  },
  [CANCEL_ALL] (state) {
    state.cart.forEach((item) => {
      item.isSelect = false
    })
  },
  [DEL_SELECT_ITEM] (state) {
    const temp = state.cart.filter((item) => {
      return item.isSelect !== true
    })
    state.cart = temp
  },
  [PUSH_CATEGORY] (state, index) {
    state.category = index
  }
}
