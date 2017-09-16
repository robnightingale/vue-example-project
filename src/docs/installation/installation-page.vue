<template lang="pug">
  .my-installation-page
    main-nav
    main
      docs-nav(active-tab='installation')
      section.section
        .container
          b-message(type='is-info')
            | This live demo and the app you are about to install 
            strong are the same 
            | . Because this live demo runs on GitHub Pages, you'll need to make a few ajustments first before 
            | you start adding your own work (ie. turn on login and authentication, make routes private, 
            | remove any packages/features you don't want, and so on). Follow the steps below to install and 
            | make the adjustments before you begin. Then you can also read more about deploying 
            | to GitHub Pages in the tutorial if that's something you want for your app.

          .title.is-4 Install

          .content
            | (Don't have Node/NPM yet? Thinking about Node 8? See  
            router-link(:to="{ name: 'node'}") this part of the tutorial 
            | first.)

          .title.is-6 Install with Basic Examples

          .content
            | The default install method will not install all the extra examples listed under 
            code Advanced
            |   on the main menu above. This could be more convenient since you don't have to uninstall
            | anything and you can just add what you want:    

          pre.block
            code.bash
              span.is-unselectable $ 
              :highlight(lang='bash')
                git@github.com:prograhammer/the-vue-project.git   # clone the repo
              br
              span.is-unselectable $ 
              :highlight(lang='bash')
                cd the-vue-project
              br
              span.is-unselectable $ 
              :highlight(lang='bash')
                npm install   # install dependencies

          .title.is-6 Install with All Examples (Basic + Advanced)

          .content
            | Use the 
            code with-advanced-examples
            | branch to install all the examples:     

          pre.block
            code.bash
              span.is-unselectable $ 
              :highlight(lang='bash')
                git clone -b with-advanced-examples --single-branch git@github.com:prograhammer/the-vue-project.git  # clone with all examples
              br
              span.is-unselectable $ 
              :highlight(lang='bash')
                cd the-vue-project
              br
              span.is-unselectable $ 
              :highlight(lang='bash')
                npm install   # install dependencies (includes dependencies from the extra examples)

          .content
            | To see a list of all the packages 
            span.my-italic The Vue Project 
            | uses for the examples, see this 
            a(href='#') section of the tutorial
            | . You can remove the ones you don't need. The tutorial also discusses each example in-depth.

          .title.is-4 Before You Begin

          .content
            | Since this app is currently configured to be public and work on GitHub pages, you'll need to adjust 
            | a few things:  

          .title.is-6 Switch to History Mode in VueRouter

          .content
            | Inside the 
            code router/index.js 
            | you need to change the mode from 
            code hash 
            | to 
            code history
            |  so that the router definition looks like this:  

          strong.my-italic src/router/index.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                // ...

                /**
                * The Router instance containing all the routes for the application.
                */
                const router = new Router({
                  base: '/example',
                  mode: 'history',   // <-- changed from 'hash'
                  routes: routes.map(route => ({
                    name: route.name,
                    path: route.path,
                    component: route.component,
                    beforeEnter: route.isPublic ? null : guardRoute
                  }))
                })

          .content
            | The reason for this is because we cannot manipulate GitHub's server rewrite rules, so 
            | every route needs to be a hash to ensure the 
            code index.html
            |  is hit. 

          .title.is-6 Make All The Routes Private (Except Login Page)

          .content
            | For this live demo, I needed pages to be public so no one has to log in to see them. However,
            | the pages in your app will be private. Open up the 
            code routes.js 
            | file and update all the routes to be 
            code isPublic: false
            | except of course the 
            code login page
            |.

          strong.my-italic src/router/routes.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                /**
                * Every route becomes a chunk, loaded only when used.
                * Reduces size of initial App load.
                */

                export default [
                  {
                    name: 'login',
                    path: '/login',
                    component: () => import(/* webpackChunkName: "login" */ '@/components/login/login-page.vue'),
                    isPublic: true
                  },
                  {
                    name: 'intro',
                    path: '/',
                    component: () => import(/* webpackChunkName: "intro" */ '@/components/docs/intro/intro-page.vue'),
                    isPublic: false
                  },
                  {
                    name: 'intro',
                    path: '/intro',
                    component: () => import(/* webpackChunkName: "intro" */ '@/components/docs/intro/intro-page.vue'),
                    isPublic: false
                  },
                  {
                    name: 'installation',
                    path: '/installation',
                    component: () => import(/* webpackChunkName: "installation" */ '@/components/docs/installation/installation-page.vue'),
                    isPublic: false
                  },

                  // ...

          .title.is-4 Run the Dev Server

          pre.block
            code.bash
              span.is-unselectable $ 
              :highlight(lang='bash')
                npm run dev

          .content
            | A new tab should automatically open in your browser at 
            code http://localhost:8080

          .title.is-6 View the app from your phone

          .content
            | Get your ip address from a terminal (if you are on Ubuntu, use ifconfig):  

          pre.block
            code.bash
              :highlight(lang='bash')
                $ ifconfig run dev

          .content
            | Turn Off your phone's Wifi, and then switch it back On. Now open up your phone's browser and go to the ip address 
            | you found above, for example: 
            code http://  192.168.1.66:8080
            | . You should see the login screen. 

          .content Now start reading through the tutorial. It will guide you specifically on how a PWA works (how you 
            | add it to homescreen, what you can adjust, caveats, and so on). Happy coding! 

    main-footer

</template>

<script>
import DocsNav from '@/docs/nav'

export default {
  name: 'installation',

  components: { DocsNav },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
