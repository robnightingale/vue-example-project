<template lang="pug">
  .my-node-page
    back-nav(title='Understanding Global')
    section.section
      .container
        .content
          | Before advancing on in this tutorial, it's important to understand the different ways
          | we can use code globally in Webpack...

        .title.is-4 Webpack Evaluates Modules Only Once

        .content
          | Webpack evaluates modules only once, so your instance remains global and carries changes
          | through from module to module. So if you create something like a `globals.js` and export
          | an object of all your globals then you can `import './globals'` and read/write to these
          | globals. You can import into one module, make changes to the object from a function and
          | import into another module and read those changes in a function. Also remember the order
          | things happen. Webpack will first take all the imports and load them up in order starting 
          | in your entry point `main.js`. Then it will execute `main.js`. So where you read/write to
          | globals is important. Is it from the root scope of a module or in a function called later?

        .title.is-4 DefinePlugin

        .content
          | If you just want to use const with string values for your globals, 
          | then you can use Webpack's 
          a(href='https://webpack.js.org/plugins/define-plugin/') DefinePlugin
          |  . Add this plugin to your list of Webpack plugins:

        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(true),
                VERSION: JSON.stringify("5fa3b9"),
                BROWSER_SUPPORTS_HTML5: true,
                TWO: "1+1",
                "typeof window": JSON.stringify("object")
              })

        .content Use it like:

        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              console.log("Running App version " + VERSION);
              if(!BROWSER_SUPPORTS_HTML5) require("html5shiv");


        .title.is-4 ProvidePlugin

        .content
          | Here's how you can do it using 
          a(href='https://webpack.js.org/plugins/provide-plugin/') Webpack's ProvidePlugin
          | ( which makes a module available as a variable in every module and only those modules
          | where you actually use it). This is useful when you don't want to keep typing
          code import Bar from 'foo'
          |  again and again. Or you can bring in a package like 
          code jQuery
          |  or 
          code lodash
          |  as global here. 

        .content
          | Create any module (for example, a global set of utilities would be handy):

        strong.my-italic utils.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              module.exports = {

                sayHello () {
                  alert("hello")
                }
              }

        .content
          | Then alias the module and add to ProvidePlugin:

        strong.my-italic webpack.config.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              var webpack = require("webpack");
              var path = require("path");

              // ...

              module.exports = {

                // ...

                resolve: {
                  extensions: ['', '.js'],
                  alias: {
                    'utils': path.resolve(__dirname, './utils')  // <-- When you build or restart dev-server, you'll get an error if path is incorrect.
                  }
                },

                plugins: [

                  // ...

                  new webpack.ProvidePlugin({
                    'utils': 'utils'
                  })
                ]  

              }

        .content
          | Now just call 
          code utils.sayHello()
          |  in any js file and it should work. Make sure you restart your dev-server if you are using that with Webpack.  


        b-message(type='is-warning')
          | Note: Don't forget to tell your linter about the global, so it won't complain. 
          | See section on ESLint.

        .title.is-4 The Global Window Object

        .content 
          | Since this example app is focused on running from a browser environment, we can also use the browser's
          | global Window object:
        
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              window.Promise = Bluebird

        .content
          | You could also use Node's global object which Webpack 
          a(href='https://webpack.js.org/configuration/node/') will automatically convert
          |  to window if your project is targeted for web (default): 

        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              global.Promise = Bluebird

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'global',

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
