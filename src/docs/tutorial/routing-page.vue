<template lang="pug">
  .my-node-page
    back-nav(title='Routing')
    section.section
      .container
        .content
          | In this section of the tutorial we'll look at handling routing and using routes to 
          | reduce application load time...

        .title.is-4 Install VueRouter

        .content 
          | VueRouter was installed from the VueCli PWA template, however, if you want to install 
          | it manually you can with:

        pre.block
          code.hljs.bash
            :highlight(lang='bash')
              npm install vue-router --save-dev

        .title.is-4 Setup Routing

        .content
          | Let's create a file that will export a new Router instance and also setup a route guard
          | for authenticated routes:  

        strong.my-italic src/router/index.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              import Vue from 'vue';
              import Router from 'vue-router';
              import routes from './routes';

              Vue.use(Router)

              /**
              * Guard the route from unauthorized users.
              *
              * @param  {Route}    to   The route we want to access.
              * @param  {Route}    from The route from which we are coming from.
              * @param  {Function} next Callback for passing a route to be called next.
              * @return {void}
              */
              function guardRoute (to, from, next) {
                // work-around to get to the Vuex store (as of Vue 2.0)
                const auth = router.app.$options.store.state.auth

                if (!auth.isLoggedIn) {
                  next({path: '/login', query: { redirect: to.fullPath }})
                } else {
                  next()
                }
              }

              /**
              * The Router instance containing all the routes for the application.
              */
              const router = new Router({
                base: '/vue-example-project',
                mode: 'hash',
                routes: routes.map(route => ({
                  name: route.name,
                  path: route.path,
                  component: route.component,
                  beforeEnter: route.isPublic ? null : guardRoute
                }))
              })

              export default router



        .content
          | Now the routes:

        strong.my-italic src/router/routes.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              import docs from '@/docs/routes';
              import examples from '@/examples/routes';

              /**
              * Every route becomes a chunk, loaded only when used.
              * Reduces size of initial App load.
              */
              const routes = [
                {
                  name: 'login',
                  path: '/login',
                  component: () => import(/* webpackChunkName: "login" */ '@/features/login/login-page.vue'),
                  isPublic: true
                },
                {
                  name: 'examples-login',
                  path: '/examples/login',
                  component: () => import(/* webpackChunkName: "examples-login" */ '@/examples/login/login-page.vue'),
                  isPublic: true
                }
              ]

              export default [...routes, ...docs, ...examples]


        .title.is-4 Webpack 3 Chunk Naming

        .content With Webpack 3 we can give names to the chunks created from the routes:  

        strong.my-italic webpack.prod.conf.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              output: {
                path: config.build.assetsRoot,
                filename: utils.assetsPath('js/[name].[chunkhash].js'),
                chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
              },


</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'routing',

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
