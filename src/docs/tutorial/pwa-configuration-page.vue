<template lang="pug">
  .my-node-page
    main
      back-nav(title='PWA Configuration')
      section.section
        .container
          .content
            | In this section of the tutorial we'll discuss what's involved in a PWA...

          .title.is-4 Understanding PWA

          .content
            | There's lots of information available on the Web about PWA's so I won't try to duplicate that
            | here. Here's some of the links you can take a look at:  

            ul
              li 
                a(href='https://developers.google.com/web/progressive-web-apps/') Google Main Page for PWA
              li 
                a(href='https://developers.google.com/web/progressive-web-apps/checklist') Google's PWA checklist
              li 
               a(href='https://developer.mozilla.org/en-US/Apps/Progressive') PWA on MDN

          .content
            | In summary, a PWA is an app that can easily be added to the homescreen and used without a browser bar.  
            | The app feels and acts like a Native app.  We'll look at how to tackle some things in a PWA 
            | app through different examples later in the Examples section of the Tutorial (ie. offline error handling). 

          .content
            | Let's first look at each piece of a PWA so that you know which adjustments you need to make. Then 
            | we'll need to test it out on your mobile phone...

            ul
              li The Manifest (not to be confused with Webpack's Chunk Manifest): manifest.json
              li The Service Worker: service-worker.js
              li index.html
              li Icon files



              li The Viewport (Meta tag)
              li Install Banners

          .title.is-4 The Manifest

          .content
            | The Manifest file is used to configure your PWA (not to be confused with your 
            | Webpack Chunk Manifest file). The file gets copied from your 
            code static
            | folder this manifest is used to do

          strong.my-italic eslintrc.js 
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                // http://eslint.org/docs/user-guide/configuring

                module.exports = {
                  root: true,
                  parser: 'babel-eslint',
                  parserOptions: {
                    sourceType: 'module'
                  },
                  env: {
                    browser: true,
                  },
                  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
                  extends: 'standard',
                  // required to lint *.vue files
                  plugins: [
                    'html'
                  ],
                  // add your custom rules here
                  'rules': {
                    // allow paren-less arrow functions
                    'arrow-parens': 0,
                    // allow async-await
                    'generator-star-spacing': 0,
                    // allow debugger during development
                    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
                  }
                }


    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'pwa-configuration',

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
