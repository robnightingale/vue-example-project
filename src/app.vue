<template lang="pug">
  #app
    v-fade-transition(mode="out-in")
      component(:is="component")
        slot
</template>

<script>
  import LayoutDefault from '@/features/layouts/default'
  import LayoutNoAuth from '@/features/layouts/no-auth'

  export default {
    name: 'App',

    components: {
      LayoutDefault,
      LayoutNoAuth
    },

    computed: {
      component () {
        return this.$store.state.page.layout
      }
    }
  }
</script>