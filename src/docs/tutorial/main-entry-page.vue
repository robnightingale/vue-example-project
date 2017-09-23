<template lang="pug">
  .my-node-page
    main
      back-nav(title='Main Entry')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at the main entry point for the app...

          .content
            | The main entry point for the application:  

          strong.my-italic src/main.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                /* Vue */
                import Vue from 'vue'
                Vue.config.productionTip = false

                /* Router */
                import router from './router'

                /* Central store */
                import store from './vuex'

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
                import Auth from './auth'
                Vue.use(Auth)

                import App from './components/app/app'

                /* eslint-disable no-new */
                new Vue({
                  el: '#app',
                  router,
                  store,
                  render: h => h(App)
                })

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
