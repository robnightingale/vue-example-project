import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import auth from './'

const LOGIN_URL = '/auth'

// const CLIENT_SECRET = 'ZGVtb2FwcDpkZW1vcGFzcw==' // Base64(client_id:client_secret) "demoapp:demopass"

export default {
  URLSearchParams (obj) {
    var params = new URLSearchParams()

    for (var [key, value] of Object.entries(obj)) params.append(key, value)

    return params
  },

  login (creds, redirect, callback) {
    return Vue.http({
      method: 'post',
      url: LOGIN_URL,
      // headers: {
      //  'Authorization': 'Basic ' + CLIENT_SECRET,
      //  'Content-Type': 'application/x-www-form-urlencoded'
      // },
      data: this.URLSearchParams({
        grant_type: 'password',
        client_id: 'demoapp',
        client_secret: 'demopass',
        username: creds.username,
        password: creds.password
      })
    })
    .then((response) => {
      auth.storeToken(response)

      if (redirect) router.push({ name: redirect })
      if (callback) callback({ isSuccess: true, data: {}, errorMessage: null })
    })
    .catch((error) => {
      if (!callback) return

      let errorMessage = null

      if (error.response) errorMessage = error.response.status
      else if (error.request) errorMessage = 'no response from server'
      else errorMessage = error.message

      callback({
        isSuccess: false,
        data: {},
        errorMessage: errorMessage
      })
    })
  },

  logout () {
    store.commit('CLEAR_ALL_DATA')
    router.push({ name: 'login' })
  },

  fakeLogin (creds, redirect, callback) {
    setTimeout(() => {
      auth.storeToken({data: { accessToken: '123456789', refreshToken: '77777777' }})
      if (redirect) router.push({ name: redirect })
    }, 500)
  },

  get (url, params, callback) {
    Vue.auth.get({url, params})

    .then((response) => {
      if (!callback) return

      callback({
        isSuccess: true,
        data: response.data,
        errorMessage: null
      })
    })

    .catch((error) => {
      if (!callback) return

      let errorMessage = null

      if (error.response) errorMessage = error.response.status
      else if (error.request) errorMessage = 'no response from server'
      else errorMessage = error.message

      callback({
        isSuccess: false,
        data: {},
        errorMessage: errorMessage
      })
    })
  }
}
