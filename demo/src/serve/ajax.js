import axios from 'axios'

class Ajax {
  get (url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data || {}
      })
        .then((res) => {
          resolve(res.data).json()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  post (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then((res) => {
          resolve(res.data).json()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default new Ajax()
