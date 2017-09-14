<template lang="pug">
  .my-features-page
    main-nav
    main
      docs-nav(active-tab='features')
      section.section
        .container
          .title Features
          .content
            p
              ul
                li Vue 2.4+
                li Webpack 3
                li SPA + PWA
                li ESLint
                li Vue-Cli, VueRouter, Vuex, VueResource
                li Stylus + Sass(Scss), Buefy/Bulma (also instructions on Twitter Bootstrap 4)
                li Pug (formely Jade)
                li Authentication usign OAuth2
                li Chunking
                li Various Optimizations
                li Proxying Requests
                li Editor Configurations (VS Code, Sublime)
                li Guidance for Production Environment
                li And more!
          b-message(type='is-warning')
            | This project is built off of a combination of the 
            a(href='https://github.com/vuejs-templates/webpack/pull/891') upcoming official Vue Webpack 3 template
            |  and the 
            a(href='https://github.com/vuejs-templates/pwa') official Vue PWA template
            |.

    main-footer

</template>

<script>
import DocsNav from '@/components/docs/nav'

export default {
  name: 'features',

  components: { DocsNav },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
