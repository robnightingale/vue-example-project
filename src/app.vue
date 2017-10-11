<template lang="pug">
  #app
    main-nav
    main
      router-view
    main-footer
</template>

<script>
  export default {
    name: 'App'
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