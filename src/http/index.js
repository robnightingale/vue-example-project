import axios from 'axios'

export default {

  install (Vue, options) {
    Vue.prototype.$http = Vue.http = axios.create()

    this.setDefaults()
    this.addInterceptors()
  },

  setDefaults () {
    // Set any defaults you want here for public requests.
  },

  addInterceptors () {
    // Maybe some logging or whatever on your public requests.
  }
}
