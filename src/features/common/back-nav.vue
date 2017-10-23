<template lang="pug">
  .my-nav
    .container
      nav.navbar
        .navbar-brand
          router-link.navbar-item.my-brand(v-bind:to="{ name: 'overview' }")
            b-icon(icon='arrow_back' type='is-white')
          .navbar-item.subtitle.has-text-white {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },

  data () {
    return {

    }
  },

  mounted () {
    this.$store.commit('SHOW_NAV', false)
  },

  beforeDestroy () {
    this.$store.commit('SHOW_NAV', true)
  },

  methods: {

  }
}

</script>

<style lang="stylus" scoped>
  #app
  
    .my-nav
      background-color: $app-primary
      border-bottom: 1px solid rgba(255, 255, 255, 0.5)

      .navbar
        background-color: $app-primary
        
      .navbar-item:hover > a, 
      .navbar-item:hover > .navbar-link,
      .navbar-item:hover .icon > i
        color: $app-black
</style>