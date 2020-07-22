import ajax from './ajax'

const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'

export const getHomeData = ajax.get(BASE_URL + 'homeApi')

export const getCategoryData = ajax.get(BASE_URL + 'homeApi/categories')

export const getCategoryDetailData = (val) => { return ajax.get(BASE_URL + 'homeApi/categoriesdetail' + val) }

export const getEatMenuData = ajax.get(BASE_URL + 'recipe/allScene')

export const getEatData = (val) => { return ajax.get(BASE_URL + 'recipe/menulist' + val) }

export const getLike = ajax.get(BASE_URL + 'cart/youlike')

export const toLogin = (tel, pw, code) => {
  return ajax.post(BASE_URL + 'login_code', {
    userName: tel,
    pwd: pw,
    captcha: code
  })
}

export const toRegister = (tel, pw) => {
  return ajax.post(BASE_URL + 'login_code', {
    phone: tel,
    captcha: pw
  })
}
