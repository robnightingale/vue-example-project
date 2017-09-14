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
                router-link(:to='editors') editors section 
                | the the tutorial.
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
                |

          .title.is-4 Component and Page Folder Structure

          .title.is-4 Configure Your Site's Domain Name


    main-footer

</template>

<script>
import BackNav from '@/components/common/back-nav'

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
