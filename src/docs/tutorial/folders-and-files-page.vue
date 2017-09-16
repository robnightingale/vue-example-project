<template lang="pug">
  .my-node-page
    main
      back-nav(title='Folders and Files')
      section.section
        .container
          .content
            | In this section of the tutorial we'll discuss the folder structure and how to configure things for your
            | site's domain...

          .title.is-4 Breakdown of all the Folders

          .content
            ul
              li
                strong .vscode 
                | - This is where all your VS Code editor settings live for a project. These are discussed in the 
                router-link(:to="{ name: 'editors' }") Editors
                |  the the tutorial.
              li
                strong build 
                | - Where all the Webpack files live. 
              li
                strong config
                | - The configuration settings for Webpack in each environment (dev, production, ...).
              li
                strong dist
                | - When you 
                code npm run build 
                | , this folder is created/recreated and holds all the built files (tranpiled, chunked, minified, hashed, etc.)
                | that will need to be deployed to your production environment.
              li
                strong node_modules
                | Where all your locally installed packages live.  
              li
                strong src/assets 
                | Assets like images or fonts can be stored here. Webpack can process these (ie. fingerprinting).  
              li
                strong src/docs
                | All docs (pages/components, mixins and other supporting js) go here.
              li
                strong src/examples
                | All examples (pages/components, mixins and other supporting js) are here. 
              li
                strong src/features
                | All of your features you want to add (pages/components, mixins and other supporting js) go here.   
              li
                strong src/router
                | The VueRouter router settings and routes.  
              li
                strong src/styles
                | All css/scss/stylus styles for your app go here. 
              li
                strong utils  
                | Any cross-cutting js code (ie. authentication, js helper functions) go here.
              li 
                strong vuex
                | Hold all files for configuring your Vuex central state management. (Named  
                code Vuex
                | instead of 
                code store 
                | in order to avoid any confusion in projects who have some sort of store/shopping code involved
                | in their buisiness domain).
              li
                strong static
                | Files that you don't need processed through Webpack.
              li
                strong test
                | Where all your test cases live. 


          .title.is-4 Component and Page Folder Structure

          .content
            | In some projects you'll see a 
            code /pages
            | folder and a 
            code /components 
            | folder. However, I suggest bringing these together and arranging vertically based on your buisiness domain instead
            | horizontally by  
            | file type. You don't have to be perfect on your grouping at first, but over time you will adjust as your buisiness 
            | domain will mature. As it matures you will better organize and slice it. Ultimately, you end up with 
            | a project that is easier
            | to split up into separate projects (think microservices?) if you feel the project has become too large
            | and complex. Also, consider how much nicer it is to keep context in your head looking at a folder like this: 
            
          .content
            strong.my-italic Folder structure with more "vertical slicing"
          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                features/
                  dashboard/        
                    dashboard-page.vue   # The dashboard or maybe "index" page.
                    settings-page.vue  # The dashboard settings page.
                    grid.vue  # A supporting component.
                    grid-item.vue
                    sorter.js  # Some supporting js.
                    sample.json  # Some data.
                  profile/
                    profile-page.vue  # Page components are always suffixed "-page".
                    billing-page.vue
                    payment-option-modal.vue
                    helpers.js   #  Features can depend on other features, ie. dashboard could use this.
                    no-avatar.svg  # Some images can be here instead of in src/assets.

          .title.is-6 Routing independent of buisiness domain/features

          .content
            | This type of structure lives individually from your routing. Your routes (external api) can change
            | seperately from your (internal api) buisiness domain organized in the
            code features/
            | folder.

          .title.is-4 Configure For Your Site's Root Subfolder 

          .content
            | If you are viewing this app via the live demo on Github, you will notice the domain name and subfolder: 
            code https://www.prograhammer.com/vue-example-project
            |  . The "vue-example-project" part of the URL must be configured in a few places. 
            | You'll need to update these places with your own subfolder (or "/" if at the root of your domain name):

          .title.is-6 Router Base 

          .content
            | Update the base of your router:  

          strong.my-italic src/router/index.js
          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                // ...

                /**
                * The Router instance containing all the routes for the application.
                */
                const router = new Router({
                  base: '/the-vue-project',  # <-- update here
                  mode: 'history',
                  routes: routes.map(route => ({
                    name: route.name,
                    path: route.path,
                    component: route.component,
                    beforeEnter: route.isPublic ? null : guardRoute
                  }))
                })


    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'folders-and-files',

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
