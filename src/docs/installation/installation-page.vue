<template lang="pug">
  .my-installation-page
    docs-nav(active-tab='installation')
    section.section
      .container
        b-message(type='is-info')
          | Note: This live demo and the app you are about to clone/install 
          strong are almost identical 
          | . Because this live demo runs on GitHub Pages, it uses route hashing and most routes
          | are turned on as public instead of private.

        .title.is-4 Install

        .content
          | (Don't have Node/NPM yet? Thinking about Node 8? See  
          router-link(:to="{ name: 'node'}") this part of the tutorial 
          | first.)

        pre.block
          code.bash
            span.is-unselectable $ 
            :highlight(lang='bash')
              git clone git@github.com:prograhammer/vue-example-project.git   # Clone the repo.
            br
            span.is-unselectable $ 
            :highlight(lang='bash')
              cd vue-example-project
            br
            span.is-unselectable $ 
            :highlight(lang='bash')
              npm install   # Install dependencies.
            br
            span.is-unselectable $ 
            :highlight(lang='bash')
              npm run dev   # Start dev server at http://localhost:8080.

        .title.is-4 Remove Docs and Examples

        .title.is-6 Remove Folders

        .content
          | The project conveniently includes the Documentation pages and Examples so you have them
          | with you in the same project as you get started. Your own work will reside in the  
          code /features
          |  folder. You can delete the  
          code /docs
          |  and 
          code /examples
          |  folders:


        .content 
          ul 
            li 
              code /features
              |  This is where all of your pages/components and their supporting code will go.
            li
              code /docs
              span.my-italic  <-- remove
            li
              code /examples
              span.my-italic  <-- remove

        .title.is-6 Remove Routes

        .content
          | Inside the 
          code router/routes.js 
          | you need to remove the docs and examples import and export so that your updated routes file looks like this:

        strong.my-italic src/router/routes.js
        pre.block
          code.hljs.javascript
            :highlight(lang='javascript')
              // import docs from '@/docs/routes';                 <-- remove
              // import examples from '@/examples/routes';         <-- remove

              const routes = [

                // ...

              ]

              // export default [...routes, ...docs, ...examples]  <-- remove
              export default routes


        .title.is-6 Remove Packages

        .content
          | Inside the 
          code package.json 
          | file you can remove any packages you don't want that are used by the Docs and Examples:  


        .content
          | Docs Packages
          ul
            li 
              code "highlight.js": "^9.12.0"
              .my-italic  For highlighting code snippets.
            li  
              code "jstransformer-highlight": "^1.0.1",
              .my-italic  Highlight.js 
                a(href='https://www.npmjs.com/browse/keyword/jstransformer') jstransformer 
                | used as a 
                a(href='https://pugjs.org/language/filters.html') Pug Filter.

        .content
          | Examples Packages
          ul
            li 
              span.my-italic There are no extra packages currently used (more examples to be added soon though).

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
