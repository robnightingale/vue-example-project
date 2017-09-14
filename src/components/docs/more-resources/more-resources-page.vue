<template lang="pug">
  .my-more-resources-page
    main-nav
    main
      docs-nav(active-tab='more-resources')
      section.section
        .container
          | blah blah
    main-footer

</template>

<script>
import DocsNav from '@/components/docs/nav'

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
