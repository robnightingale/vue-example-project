import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import plugins from './plugins'

Vue.use(Vuex)

/**
 * All the parts we need to implement shared state across our app with Vuex.
 *
 * @type {Vuex}
 */
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins
})

/**
 * Export the store object.
 *
 * @type {Vuex}
 */
export default store
