<template lang="pug">
  #app
    app-nav
    main
      router-view
    app-footer
</template>

<script>
import AppNav from '@/features/common/nav'
import AppFooter from '@/features/common/footer'

export default {
  name: 'App',
  components: { AppNav, AppFooter }
}
</script>

<style lang="stylus">
  #app
    display: flex
    min-height: 100vh
    flex-direction: column
    
    main
      // background-color: whitesmoke
      flex: 1
</style>