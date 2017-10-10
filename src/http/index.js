import axios from 'axios'

export default {

  install (Vue, options) {
    Vue.prototype.$http = Vue.http = axios.create()
  }
}
