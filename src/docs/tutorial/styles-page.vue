<template lang="pug">
  .my-node-page
    main
      back-nav(title='Styles')
      section.section
        .container
          .content
            | In this section of the tutorial we'll discuss what's involved in structuring styles...

          .title.is-4 Install Sass and Stylus

          .content
            | Let's install Sass (for working with Vendors) and Stylus (for cleaner syntax in our own styles)
            | and their respective loaders for Webpack: 

          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                $ npm install sass-loader node-sass stylus stylus-loader --save-dev 	

          .title.is-4 Load Variables and Functions to All Components

          .content
            | It's 
            a(href='https://github.com/shama/stylus-loader#using-nib-with-stylus') not well documented
            | ), but you can load all your Stylus variables/functions/mixins to all your Vue components easily.
            | (Because we aren't loading any actual styles here, we won't have any files unnecessarily
            | exported in our final CSS multiple times). Update the following
            code stylus
            | and 
            code styl 
            | properties in the 
            code return 
            | statement here:  

          strong.my-italic build/utils.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                exports.cssLoaders = function (options) {  
                  // ...  

                  return {
                    // ...
                    stylus: generateLoaders('stylus', { import: ['~src/styles/stylus/utils/utils.styl'] }),
                    styl: generateLoaders('stylus', { import: ['~src/styles/stylus/utils/utils.styl'] })
                  }
                }

          .title.is-4 Overriding Styles in Vendor Components

          .content
            | Whenever you need to override some vendor styles (even if the vendor has them scoped in a component),
            | you can just increase the 
            a(href='https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity') specificity
            | of your CSS by adding a document-level 
            code #app
            | to your styles.  This is easily done with Stylus.  You just need to add 
            code #app 
            | to the top of the file.  

          .title.is-4 Sass Folder Structure

          .content
            | Since we're using Stylus, we'll just have a few Sass files to handle vendor variables and imports.
            | Sass (particularly SCSS) is very popular, so it's good to have a folder specifically for loading
            | vendor packages who use this language. You can load them and override any variables here.   

          .content
            | Here's a breakdown of the Sass directory structure found in 
            code src/styles/scss
            | :

          b-table.my-styles-page__table(:data="tableScss" :mobile-cards='true')
            template(scope='props')
              b-table-column.has-text-left(label='File', width='100')
                strong.is-hidden-desktop File
                div {{ props.row.file }}
              b-table-column.has-text-left(label='Description')
                strong.is-hidden-desktop Description
                div(v-html="props.row.description")

          br
          
          .content
            | Collect all your Sass files and arranges them in the correct loading order you want. 
            | (For example, variables would be loaded first):  

          strong.my-italic src/styles/sass/main.scss
          pre.block
            code.hljs.sass
              :highlight(lang='sass')
                @import '_variables';
                @import '_vendor';


          .title.is-4 Stylus Folder Structure

          .content
            | Stylus is the syntax of the future.  Even though this project depends on packages still using SCSS,
            | we can go forward in our own work by using Stylus. Typically I will take the variables in 
            code _variables.scss
            | that are important to me and create equivalents in Stylus. This is a bit redundant but it
            | does create a nice bounded context for you. If vendor Sass variables change, your Stylus files don't
            | need immediate updating since they don't directly depend on the Sass variables.  Whenever you 
            | cross a bridge to newer/improved technology there's usually extra crossover code involved.  


          .content
            | Here's a breakdown of the Stylus directory structure found in 
            code src/styles/stylus
            |  :

          b-table.my-styles-page__table(:data="tableStylus" :mobile-cards='true')
            template(scope='props')
              b-table-column.has-text-left(label='Folder')
                strong.is-hidden-desktop Folder
                div {{ props.row.folder }}
              b-table-column.has-text-left(label='File')
                strong.is-hidden-desktop File
                div {{ props.row.file }}
              b-table-column.has-text-left(label='Description')
                strong.is-hidden-desktop Description
                div(v-html='props.row.description')

          br
          .content
            | Collect all your Stylus files and arranges them in the correct loading order you want. 
            | (For example, variables would be loaded first): 

          strong.my-italic src/styles/stylus/main.styl
          pre.block
            code.hljs.sass
              :highlight(lang='stylus')
                @import 'utils'
                @import 'vendor'
                @import 'base'
                @import 'elements'
                @import 'components'         

          .content
            | Finally, bring these files into your main project entry point:  

          strong.my-italic src/main.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                require('./styles/scss/main.scss')
                require('./styles/stylus/main.styl')


          .title.is-4 BEM Methodology

          .content
            | Read up on BEM. Or just read
            a(href='https://css-tricks.com/bem-101/') this
            | and 
            a(href='https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/') this
            |  .

          .title.is-6 This is BEM   

          strong.my-italic CSS
          pre.block
            code.hljs.css
              :highlight(lang='css')
                /* Block component */
                .btn {}
                
                /* Element that depends upon the block */ 
                .btn__price {}
                
                /* Modifier that changes the style of the block */
                .btn--orange {} 
                .btn--big {}

          strong.my-italic HTML
          pre.block
            code.hljs.html
              :highlight(lang='html')
                <a class="btn btn--big btn--orange" href="http://css-tricks.com">
                  <span class="btn__price">$9.99</span>
                  <span class="btn__text">Subscribe</span>
                </a>

          .title.is-6 Example With Stylus and Pug

          strong.my-italic Stylus
          pre.block
            code.hljs.stylus
              :highlight(lang='stylus')
                // The component (with project namespace "my-").
                .my-list
                    padding: 40px 0
                  background-color: white
                  color: black
                  
                  // A list variation. A dark list.	
                  &--dark
                    background-color: black
                  color: white
                  
                    // A list element.
                  &__item
                      text-align: center
                      height: 50px
                      
                      // A list item variation.
                      &--nav
                        cursor: pointer

                      // A list item variation, but one that is from a general set
                      // typically used by Javascript (ie. active, disabled, etc.).
                      // Demonstrates that BEM is a guide, not law.  
                    .my-active
                      cursor: auto
                      background-color: grey
                    
                    // Another list element (even though it's underneath .my-list__item)
                    &--avatar
                      border-radius: 50%

          strong.my-italic Pug
          pre.block
            code.hljs.stylus
              :highlight(lang='stylus')
                // Pug template
                #app
                  .my-list.my-list--dark
                    .my-list__item.my-list--nav.my-active Home
                    .my-list__item.my-list--nav About
                    .my-list__item.my-list--nav Contact Us
                      img.my-list__avatar(src='/images/phone.png')

          .title.is-6 Don't do this

          strong.my-italic CSS
          pre.block
            code.hljs.stylus
              :highlight(lang='stylus')
                .nav .nav__list-item .btn--orange {
                  background-color: green;
                }

          .title.is-6 Prefer classes over generic HTML elements

          .content
            | Take Bulma as an example, where nothing depends on the HTML element tag.  
            | This doesn't mean you can't or shouldn't use HTML elements, but frees you
            | from that restriction.  It's perfectly fine to use elements in your template
            | or even for selectors underneath scoping BEM classes (and sometimes you have
            | to do to access vendor components) :  

          strong.my-italic Stylus
          pre.block
            code.hljs.stylus
              :highlight(lang='stylus')
                .navbar
                  
                    &__hamburger
                    float: right
                    
                    i
                      font-size: 32px          

          .title.is-4 Use BEM with Scoped in .Vue Files
          
          .content
            | To avoid collisions/confusion from vendor styles, your own global styles, 
            | or parent/children styles (or even other BEM components, see 
            code /examples/login/login-page
            | and 
            code /features/login/login-page
            | ) in your Vue components, use BEM naming along with Vue-loader's
            | scoped attribute:  
            code &lt; style scoped &gt;
            |  .  If you use BEM in both Vue components and also CSS-only components/elements, 
            | then you have full project consistency!  

          b-message(type='is-info')
            | WIthout a naming methodology like BEM, you're more likely to name stuff in your Vue file that 
            | could collide with vendor CSS rules (or even your own global rules). Imagine a 
            code .btn 
            | in your Vue file's template. Who owns it? Maybe you prefix it, so you have 
            code .my-btn 
            | so you know it's yours. But is that one of your global generic button styles, 
            | or one specific to this component? So you rename it 
            code .my-foo-btn
            | . Hmmm. Look familiar (cough...BEM...cough)?

    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'styles',

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
      tableScss: [
        {
          'file': '_variables.scss',
          'description': 'Add overrides for vendor variables here.  For new variables, use the Stylus folder instead.' +
            "I've added some Buefy/Bulma variables already here.  The underscore denotes that this file is a" +
            "sub-module and would not be loaded directly at the project's entry point."
        },
        {
          'file': '_vendor.scss',
          'description': "Load up your vendor SCSS files here, in the order you want them.  Here's where we" +
            'load up Buefy/Bulma styles.'
        }
      ],
      tableStylus: [
        {
          'folder': 'utils/',
          'file': 'utils.styl',
          'description': 'Entry point for the folder. Contains all files we need to load before any other styles are loaded' +
            "(preprocessor utilities and variables).  We'll also import this into every Vue component."
        },
        {
          'folder': 'utils/',
          'file': 'variables.styl',
          'description': 'Variables (ie. theming).'
        },
        {
          'folder': 'utils/',
          'file': 'functions.styl',
          'description': 'Functions.'
        },
        {
          'folder': 'utils/',
          'file': 'mixins.styl',
          'description': 'Mixins.'
        },
        {
          'folder': 'base/',
          'file': 'base.styl',
          'description': 'Entry point for the folder. Contains all the files for normalizing across browsers, generic HTML tag ' +
            'styling, resets, etc.'
        },
        {
          'folder': 'base/',
          'file': 'generic.styl',
          'description': "Any rules you want to set for generic HTML tags. Since we're using Bulma in this project, " +
            "this is mostly taken care of <a href='https://github.com/jgthms/bulma/blob/master/sass/base/generic.sass'>here</a>."
        },
        {
          'folder': 'base/',
          'file': 'helpers.styl',
          'description': 'Put helper classes here. Add anything you want to add that ' +
            "<a href='https://github.com/jgthms/bulma/blob/master/sass/base/helpers.sass'>Bulma doesn't offer</a>. " +
            'Remember to prefix our own helpers so we can know which is which throughout our app.'
        },
        {
          'folder': 'base/',
          'file': 'reset.styl',
          'description': 'Browser normalization here. Add anything you want to build on top of ' +
            "<a href='https://github.com/jgthms/bulma/blob/master/sass/base/minireset.sass'>Bulma's reset</a>."
        },
        {
          'folder': 'base/',
          'file': 'transitions.styl',
          'description': 'Just a place you can put all your transitions.'
        },
        {
          'folder': 'components/',
          'file': 'components.styl',
          'description': 'Entry point for the folder. Contains all files we need for CSS-only components (Vue component styles' +
            'are placed directly into the <code>.vue</code> files). A card or panel might be an example of a component.'
        },
        {
          'folder': 'elements/',
          'file': 'elements.styl',
          'description': 'Entry point for the folder. Contains all the files we need for CSS-only elements. A link or ' +
            'a button might be an example of an element.'
        },
        {
          'folder': 'vendor/',
          'file': 'vendor.styl',
          'description': 'Entry point file that contains all the style imports from vendor packages.'
        }
      ]
    }
  },

  methods: {
  }
}
</script>


<style lang='stylus'>
  #app
    
    // Some work-around styling for Buefy table "mobile cards".
    // TODO: Report problem to Buefy's Github.
    .my-styles-page

      &__table
      
        tbody td
          &::before
            display: none

          span
            width: 100%

</style>