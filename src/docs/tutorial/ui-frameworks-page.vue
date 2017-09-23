<template lang="pug">
  .my-node-page
    main
      back-nav(title='UI Frameworks')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at some UI Frameworks that will give us a starting set of
            | of components to use in our app...

          .title.is-4 Buefy and Bulma

          .content
            | Buefy: 
            a(href='https://buefy.github.io') https://buefy.github.io  
            br
            | Bulma: 
            a(href='http://bulma.io') http://bulma.io


          .content
            | I went with Buefy for this project's repo. Buefy is a lightweight set of Vue 2.x components built on 
            | the Bulma CSS-only framework. Here's some benefits:  
            
            ul
              li Buefy ships with Bulma, which is great because you have a CSS-only framework for you to customize and easily style more of your own components with.  
              li Buefy/Bulma has a more complete set of elements and components to get your UI kickstarted as opposed to Twitter's Bootstrap 4 (currently still in beta).  
              li 
                strong No jQuery
                | and the CSS is nicely seperated from the JS concerns.  
              li 
                | Icons. With Buefy, you can easily choose between icons from Material Design (default)
                | or Font-Awesome ([Bootstrap has removed icons](https://getbootstrap.com/docs/4.0/extend/icons/)). With Bulma, you also have a good CSS framework to fallback to and use with whatever icons you want. You can use Buefy's icon component when desired and switch to your own icons with Bulma CSS (or copy/decorate Buefy's icon component and update with more props to cover additional icon needs).
              li The Vue components in Buefy are easy to understand and not over-engineered.  
              li There's a Datepicker included.  

          .content Let's install it:

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                npm install buefy --save-dev


          b-message(type='is-info')
            | NOTE:  if you look in your 
            code /src/node_modules
            |  folder you'll notice Buefy installed Bulma for you.   

          .title.is-4 Twitter Bootstrap 4 and jQuery

          .content
            a(href='https://getbootstrap.com') https://getbootstrap.com  

          .content
            | Let's install it and its peers:  

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                npm install bootstrap@4.0.0-beta jquery-slim popper.js 

          .content
            | You'll need to use Webpack's 
            a(href='https://webpack.js.org/plugins/provide-plugin/') ProvidePlugin
            |  to make Bootstraps peer dependencies available as a global variable (whenever referenced).
            | In other words, you don't need to explicitly 
            code import jquery
            | anywhere.  Just use the identifier (
            code $
            | ) set in the ProvidePlugin and Webpack will automatically load the export of the module.
            |  Add the plugin to the plugins section in both your dev and prod build config files:

          strong.my-italic build/webpack.dev.conf.js
          strong.my-italic build/webpack.prod.conf.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                plugins: [
                  // ...
                    new webpack.ProvidePlugin({
                      $: 'jquery',
                      jQuery: 'jquery',
                      'window.jQuery': 'jquery',
                      Popper: ['popper.js', 'default'],
                      // ...
                    })
                  // ...
                ]

          .content
            | You'll need to let your Linter know about this global or it will complain. Add the 
            code globals
            |  field:  

          strong.my-italic eslintrc.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                module.exports = {

                  // ...
                  
                  globals: {
                    '$': true,
                    'jQuery': true,
                    'Popper': true
                  },
                  
                  // ... 
                }
  
          .content
            | Now just import Bootstrap into your main entry:  

          strong.my-italic src/main.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                import 'bootstrap'

          .content
            | Then import the styles (note: 
            code ~
            |  is shorthand for the 
            code node_modules
            |  directory):  

          pre.block
            code.hljs.sass
              :highlight(lang='sass')
                i@import "~bootstrap/scss/bootstrap"

          .title.is-4 Some Other Great Choices 

          .content
            ul
              li
                strong Vuetify
                | : 
                a(href='https://vuetifyjs.com') https://vuetifyjs.com
                | If you want something built closest to Material Design spec, then look no other place.
                | I can confirm the author is super talented (I had the honor of doing a few commits in the past).
                | He's been hard at work with each iteration, keeping it lean, fast, and up-to-spec. 
              li
                strong Boostrap Vue 
                a(href='https://bootstrap-vue.js.org/') https://bootstrap-vue.js.org/
                | Bootstrap 4 with Vue instead of the jQuery. Has some cool bonus stuff too,
                | like the filterable/etc. table/data-grid component.  

    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'ui-frameworks',

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
