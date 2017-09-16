<template lang="pug">
  .my-node-page
    main
      back-nav(title='Vue-Cli')
      section.section
        .container
          .content
            | In this section of the tutorial we'll discuss Vue-Cli...

          .title.is-4 Webpack 3 template

          .content
            | You might consider just cloning or forking this example repo instead of using Vue Cli
            | and the PWA template. I've manually updated the PWA template to Webpack 3
            | (based off the Webpack 3 branch of the 
            a(href='https://github.com/vuejs-templates/webpack/pull/891') official Vue Webpack template 
            | until Vue releases an updated PWA template. 

          .title.is-4 Install Vue Cli and a New PWA Project

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                $ sudo npm install -g vue-cli  # Install vue-cli globally.
                $ vue init pwa example-vue-project # Init a project based on PWA template.

          b-message(type='is-warning')
            | Note: If you've already installed the cli before and when you init a new project
            | you get the message: 
            code A newer version of vue-cli is available
            | , then ctrl+c at the prompt and then: 
            code sudo npm install vue-cli -g
            | to update (re-install) vue-cli to the latest version.
    
    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'vue-cli',

  components: { BackNav },

  mounted () {
    // @TODO: You don't have to do this if you are using "history" mode in VueRouter.
    // I'm doing this here because of GitHub Pages "hash" mode requirement/limitation.
    const titles = Array.from(document.getElementsByClassName('title'))
    const title = titles.filter((el) => el.innerHTML === this.$route.query.title)[0]
    if (title) title.scrollIntoView()
  },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
