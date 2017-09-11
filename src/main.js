/* Vue */
import Vue from 'vue'
Vue.config.productionTip = false

/* Router */
import router from './router'

/* Central store */
import store from './vuex'
import { sync } from 'vuex-router-sync'
sync(store, router) // <-- Sync router to store, as `store.state.route`.

/* HTTP client */
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* Buefy/Bulma UI Framework */
import Buefy from 'buefy'
Vue.use(Buefy)

/* Styles */
require('./styles/scss/main.scss')
require('./styles/stylus/main.styl')

/* Auth plugin */
import Auth from './utils/auth'
Vue.use(Auth)

import App from './components/app/app'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
