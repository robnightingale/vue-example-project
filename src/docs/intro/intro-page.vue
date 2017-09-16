<template lang="pug">
  .my-intro-page
    main-nav
    main
      docs-nav(active-tab='intro')
      section.section
        .container
          .subtitle 
            | This is what you get when you download 
            span.my-italic The Vue Project 
            | . A  
            strong Clean, Scalable and Optimized 
            | starter PWA project, a tutorial, and some examples of things commonly needed in private apps. 
            | It is a 
            strong Client-side app 
            | (as opposed to Server-Side Rendering) built with the latest  
            strong Vue.js 
            | . It's transparent, so if you read through
            | the tutorial you will fully understand how it's configured and optimized from scratch*. 
            | I've also made it clear and easy for you to add what you want or remove what you don't.  
          br

          .title.is-6 Featuring: 

          .content
            ul
              li
                | *Start from scratch? Well almost: you start with 
                strong Vue.js 2.4+, Webpack 3.5+, and the official PWA template 
                | and we build up from there.
              li
                strong Tutorial  
                | . This project is strongly focused on teaching (and learning, because aren't we all
                | in 
                a(href='https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f') the Javascript world
                | ), instead of just giving you the magic.  
              li 
                | 
                strong Client-side 
                | , static Single-Page App so you can take advantage of the more affordable high-traffic
                | static servers. How affordable? Well, this live demo is being served to you free-of-charge
                | from GitHub. That's possible because GitHub pages serves static content (the server isn't rendering anything). 
                | You'll also find many free CDN's who will serve your static content. This project is also focused on the needs  
                | of a private app (accessible via login), where 
                | your SPA/PWA makes async API calls to your backend server (Java, Node, PHP, whatever). 
              li 
                strong Scalable and optimized 
                | (discusses and incorporates approaches like Webpack chunking, named route chunking, 
                | structuring styles, proxying to your backend API server, working in a production environment, and more).
              li
                strong Clean 
                | (organized structure, well documented in tutorial, latest tooling such as Pug/Stylus, and more).
              li
                strong Security: 
                | OAuth2, Cookies and CSRF protection.  
              li
                strong Community opinionated.  
                | Open to PR's, suggestions, questions. 
              li
                | Ships with a helpful set of UI components to get you started thanks to 
                strong Buefy/Bulma  
                | (but we've included a few notes on Twitter Bootstrap setup and jQuery, if you must!).

          b-message(type='is-warning')
            | This project is on version 0.3.0, should I wait to use it? Absolutely Not. 
            | Unlike a big project like 
            a(href='https://nuxtjs.org/') Nuxt.js 
            | (SSR focused), this project is a collection of strategies, practices, and configurations to guide you. 
            | The release numbers serve mainly to indicate that more strategies have been implemented and more examples
            | were added. 


    main-footer

</template>

<script>
import DocsNav from '@/docs/nav'

export default {
  name: 'intro',

  components: { DocsNav },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
