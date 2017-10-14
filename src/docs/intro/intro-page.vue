<template lang="pug">
  div
    docs-nav(active-tab='intro')
    section.section
      .container
        .content 
          | This example Vue.js project is a 
          strong Clean, Scalable, and Optimized 
          | starter PWA project, tutorial, and set of examples. 
          | The tutorial helps you understand how it's configured and optimized. 

        .title.is-6 Featuring: 

        .content
          ul
            li
              strong The Latest in Vue.js. 
              | Vue.js 2.4+, Webpack 3.5+, and the official PWA template 
              | (we build up from the template).
            li
              strong Tutorial.  
              | Walks you through the app to help you fully understand how it's configured and optimized.  
            li 
              | 
              strong Client-side.
              |  Static Single-Page App (SPA) so you can take advantage of the more affordable high-traffic
              | static servers. This project is more focused on the needs  
              | of a private app (accessible via login) where 
              | your SPA makes API calls to your backend server (Java, Node, PHP, etc.). 
            li 
              strong Scalable and Optimized. 
              |  Discusses and incorporates approaches like named route chunking, 
              | structuring styles, proxying to your backend API server, working in a production environment, and more.
            li
              strong Clean.
              |  Organized structure for growing complexity, parts well covered in tutorial, latest tooling such as Pug/Stylus, and more.
            li
              strong Editor Configuration.
              |  Get set up with Visual Studio Code or Sublime Text 3.  
            li
              strong Security.
              |  OAuth2, Cookies and CSRF protection.  
            li
              strong Community Opinionated.  
              |  Open to PR's, suggestions, questions. 
            li
              | The featured UI Framework is  
              strong Buefy/Bulma 
              |  (preferred framework, no jQuery) but instructions for setting up  
              strong Twitter Bootstrap 4 
              |  (for developers who are still transitioning away from jQuery) are included in the tutorial

        b-message(type='is-warning')
          | The project release numbers serve mainly to indicate that more strategies have been implemented 
          | (or updated as Vue.js evolves) and that more examples
          | have been added. 
          strong So clone it and start building your app right away!


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
