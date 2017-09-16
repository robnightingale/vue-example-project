<template lang="pug">
  section.my-docs-heading.hero.is-primary
    .hero-body
      .container
        .title
          | Documentation
        .subtitle
          | Learn everything you need about this example project.
    .hero-footer
      .container
        .tabs.is-boxed
          ul
            li(:class='{"is-active": activeTab === "intro"}')
              router-link(v-bind:to="{ name: 'intro' }") 
                span Intro
            li(:class='{"is-active": activeTab === "installation"}')
              router-link(v-bind:to="{ name: 'installation' }") 
                span Installation
            li(:class='{"is-active": activeTab === "tutorial"}')
              router-link(v-bind:to="{ name: 'overview' }") 
                span Tutorial
            li(:class='{"is-active": activeTab === "more-resources"}')
              router-link(v-bind:to="{ name: 'more-resources' }") 
                span More Resources
            li
              a
                span Release Notes 
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      default: null
    }
  },

  data () {
    return {

    }
  },

  methods: {

  }
}

</script>
