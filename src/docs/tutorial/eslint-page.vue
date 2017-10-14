<template lang="pug">
  div
    back-nav(title='ESLint')
    section.section
      .container
        .content
          | In this section of the tutorial we'll discuss linting with ESLint...

        .title.is-4 Configure ESLint

        .content
          | Most projects I've seen prefer the 
          a(href='https://standardjs.com/') Standard
          |  preset (aka "The one without semicolons") so I've selected that for this example project.
          | Vue also has some recommended rules that you can add via the beta 
          code eslint-plugin-vue
          |  , but I did not use this plugin yet because unfortunately Pug templates are not working at the moment (see 
          a(href='https://github.com/vuejs/eslint-plugin-vue/issues/165') issue #165
          | ).
        
        .content
          | Now open up your 
          code eslintrc.js 
          | file and you'll see what Vue cli generated for this project:

        strong.app-italic eslintrc.js 
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

        .content
          ul 
            li 
              | The parser is Babel's ESLint plugin (we'll talk about Babel and its configuration later in this tutorial).
              | We're using the 
              code Standard
              |  preset.
            li 
              code env.browser
              | to true so we can use browser globals (such as 
              code window
              |  or 
              code localStorage
              | ) and the linter will not complain that it is undefined. 
            li 
              | Some small customizations added.

        .title.is-6 ESLint Ignore File
  
        .content
          | You can tell ESLint to 
          a(href='http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories') ignore specific files and directories
          |  by using an 
          code .eslintignore 
          | file in your project’s root directory: 

        strong.app-italic .eslintignore
        pre.block
          code.hljs
            :highlight
              build/*.js
              config/*.js

</template>

<script>
export default {
  name: 'editors',

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
