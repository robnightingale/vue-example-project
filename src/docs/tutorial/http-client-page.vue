<template lang="pug">
  div
    back-nav(title='Making API Requests')
    section.section
      .container
        .content
          | In this section of the tutorial we'll look at Axios and how to organize ajax calls
          | to our backend server API...

        .title.is-4 Install Axios HTTP Client

        pre.block
          code.hljs.bash
            :highlight(lang='bash')
              npm install axios --save-dev


        .title.is-4 Create Vue Plugin

        .content
          | First let's create a 
          a(href='https://vuejs.org/v2/guide/plugins.html') Vue plugin
          | so we can make 
          code Vue.http
          | or from within components as  
          code this.$http 
          | calls using Axios:

        strong.app-italic http/index.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              import axios from 'axios';

              export default {

                install (Vue, options) {
                  Vue.prototype.$http = Vue.http = axios.create()
                }
              }

        .title.is-4 Organizing Requests to Backend Server API

        .content
          | It's better to abstract API calls to your backend server so that components can add
          | the bits of code that better pertain to its business domain. And it's nice to keep
          | all these API calls together so a clearly visible list of all the API endpoints is established 
          | (similiar to how the routes files collects the external API of your app, this would collects
          | the API to your backend). Let's list all the API endpoint calls in a file.
          | For example, a component may want to make an API call  
          code getFriends
          | :

        strong.app-italic http/api.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              import auth from '@/auth/helpers';

              export default {

                // List out all your API requests here.

                getFriends (callback) { auth.get('/response', {}, callback) }
              }

        .title.is-4 Proxy Api Calls in the Dev Server

        .title.is-6 Setup Proxy on Dev Server

        .content
          | When using Webpack for Hot Reloading, we'll need to tell the webpack dev server
          | that `/api` calls need to be reverse proxied to another server (ie. running on
          | node express, nginx, or some embedded server in your IDE). For production you
          | would just use nginx to do the proxying. The big advantage is we don't have to
          | worry about CORS and also we don't expose the true API endpoints to the client
          | (better protection from DDoS attacks).

        .content
          | Notice in 
          code build/dev-server.js
          | this line:

        strong.app-italic build/dev-server.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              // proxy api requests
              Object.keys(proxyTable).forEach(function (context) {
                var options = proxyTable[context]
                if (typeof options === 'string') {
                  options = { target: options }
                }
                app.use(proxyMiddleware(context, options))
              })

        .content
          | In this setup we are using: https://github.com/chimurai/http-proxy-middleware (you can
          | see examples there). So let's add options to our config to make this work:

        .content
          | In 
          code config/index.js
          | , update the 
          strong proxyTable 
          | object to look like this:

        strong.app-italic config/index.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              dev:  {

                  // ...
                  
                  proxyTable: {
                    '/auth': {
                      // @TODO: You need to replace this with your own backend API.
                      // Demo OAuth2 server https://github.com/bshaffer/oauth2-demo-php.
                      target: 'http://brentertainment.com/oauth2/lockdin/token',
                      changeOrigin: true,
                      ws: true,
                      pathRewrite: {
                        '^/auth': ''
                      },
                      router: {
                      }
                    },
                    '/api': {
                      target: 'http://brentertainment.com/oauth2',  // <-- Api server.
                      changeOrigin: true,                           // <-- For virtual hosted sites.
                      ws: true,                                     // <-- Proxy websockets.
                      pathRewrite: {
                      // Rewrite path localhost:8080/api to http://brentertainment.com/oauth2/lockdin.
                        '^/api': '/lockdin'
                      },
                      router: {
                        // when request.headers.host == 'dev.localhost:3000',
                        // override target 'http://www.example.org' to 'http://localhost:8000'
                        // 'dev.localhost:3000': 'http://localhost:8000'
                      }
                    }
                  },
                  
                  // ...
              }

        .title.is-4 Proxy Api Calls in Nginx Production Server

        .content
          | If you are using nginx on your production server, you can reverse proxy using the following configuration:

        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
                // work in progress...

</template>

<script>
export default {
  name: 'http-client',

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
