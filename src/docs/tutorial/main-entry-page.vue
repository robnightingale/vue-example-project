<template lang="pug">
  .my-node-page
    main
      back-nav(title='Entry and Polyfills')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at the main entry point for the app...

          .title.is-4 What's in the Main Entry?  

          .content
            | The main entry point for the application:  

          strong.my-italic src/main.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
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

          .title.is-4 Polyfills

          .content Work-in-progress

    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'main-entry',

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
