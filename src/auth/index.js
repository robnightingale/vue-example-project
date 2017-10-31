import Vue from 'vue'
import store from '@/store'
import axios from 'axios'

const API_BASE_URL = '/api'
const REFRESH_TOKEN_URL = '/auth'

// const CLIENT_SECRET = 'demopass' // Base64(client_id:client_secret) "demoapp:demopass"

export default {

  install (Vue, options) {
    Vue.prototype.$auth = Vue.auth = axios.create()

    this.setDefaults()
    this.addInterceptors()
  },

  setDefaults () {
    Vue.auth.defaults.baseURL = API_BASE_URL
  },

  addInterceptors () {
    // Watch for accessToken changes and update our common Auth header.
    store.watch((state) => {
      return state.auth.accessToken
    }, (accessToken) => {
      Vue.auth.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
      Vue.auth.defaults.transformRequest = [(data, headers) => {
        data.access_token = accessToken
        return data
      }]
      console.log('token set')
    }, {
      deep: true
    })

    // Intercept the response and refresh (one retry) if invalid token.
    Vue.auth.interceptors.response.use(function (response) {
      if (this.isInvalidToken(response)) {
        return this.refreshToken(response.request)
      }
    }, function (error) {
      return Promise.reject(error)
    })
  },

  isInvalidToken (response) {
    const status = response.status
    const error = response.data.error

    // Customize this to your Oauth server.
    return (status === 401 && (error === 'invalid_token' || error === 'expired_token'))
  },

  refreshToken (request) {
    return axios({
      method: 'post',
      url: REFRESH_TOKEN_URL,
      // headers: {'Authorization': 'Basic ' + CLIENT_SECRET},
      data: {
        grant_type: 'refresh_token',
        refresh_token: store.state.auth.refreshToken
      }
    })
    .then((response) => {
      this.storeToken(response)
      return this.retry(request)
    })
    .catch((errorResponse) => {
      if (this.isInvalidToken(errorResponse)) { this.logout() }
      return errorResponse
    })
  },

  storeToken (response) {
    const auth = store.state.auth
    const user = store.state.user

    auth.isLoggedIn = true
    auth.accessToken = response.data.access_token
    auth.refreshToken = response.data.refresh_token
    // TODO: get user's name from response from Oauth server.
    user.name = 'John Smith'

    store.commit('UPDATE_AUTH', auth)
    store.commit('UPDATE_USER', user)
  },

  retry (request) {
    return Vue.auth(request)
      .then((response) => { return response })
      .catch((response) => { return response })
  }
}
