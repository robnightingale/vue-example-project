<template lang="pug">
  .my-node-page
    main
      back-nav(title='Authentication')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at Authentication and OAuth2...

          .title.is-4 Auth Plugin

          strong.my-italic src/auth/index.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                import Vue from 'vue';
                import store from '@/vuex';
                import axios from 'axios';

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


          .title.is-4 Auth Helpers

          .content 
            | We'll need some helpers so we can do things like login, logout, 
            | or make requests to private endpoints easier.

          strong.my-italic src/auth/index.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                import Vue from 'vue';
                import router from '@/router';
                import store from '@/vuex';
                import auth from './';

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


    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'authentication',

  components: { BackNav },

  mounted () {
    // @TODO: You don't have to do this if you are using "history" mode in VueRouter.
    // I'm doing this here because of GitHub Pages "hash" mode requirement/limitation.
    const titles = Array.from(document.getElementsByClassName('title'))
    const title = titles.filter((el) => el.innerHTML === this.$route.query.title)[0]
    if (title) title.scrollIntoView()
    else scroll(0, 0)
  },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
