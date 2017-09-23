import Vue from 'vue'
import router from './router'
import store from './vuex'
import { sync } from 'vuex-router-sync'
import http from './http'
import auth from './auth'
import Buefy from 'buefy'
import URLSearchParams from 'url-search-params'
import App from './app'
import MainNav from './features/common/main/nav'
import MainFooter from './features/common/main/footer'

Vue.config.productionTip = false

// Polyfills
global.URLSearchParams = URLSearchParams

// Sync router to store, as `store.state.route`.
sync(store, router)

// Http and Auth plugins
Vue.use(http)
Vue.use(auth)

// Buefy/Bulma UI Framework.
Vue.use(Buefy)

// Styles
require('./styles/scss/main.scss')
require('./styles/stylus/main.styl')

// Global Components
Vue.component('main-nav', MainNav)
Vue.component('main-footer', MainFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
