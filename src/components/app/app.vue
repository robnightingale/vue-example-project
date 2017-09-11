<template lang="pug">
  #app.my-app
    app-nav
    .my-app__main
      router-view
    app-footer
</template>

<script>
  import AppNav from './nav'
  import AppFooter from './footer'

  export default {
    name: 'app',

    components: { AppNav, AppFooter }

  }
</script>

<style lang="stylus">
  .my-app
    display: flex
    min-height: 100vh
    flex-direction: column
    
    &__main
      // background-color: whitesmoke
      flex: 1

</style>