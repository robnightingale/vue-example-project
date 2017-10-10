<template lang="pug">
  .my-more-resources-page
    main-nav
    main
      docs-nav(active-tab='more-resources')
      section.section
        .container
          .content
           ul
            li SurviveJs: 
              a(href='https://survivejs.com/webpack/introduction/') https://survivejs.com/webpack/introduction/  
            li Official Webpack Tutorial: 
              a(href='https://webpack.js.org/guides/get-started/') https://webpack.js.org/guides/get-started/  
    main-footer

</template>

<script>
import DocsNav from '@/docs/nav'

export default {
  name: 'more-resources',

  components: { DocsNav },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
