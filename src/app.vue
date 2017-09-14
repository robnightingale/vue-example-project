<template lang="pug">
  #app
    router-view
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus">
  #app
    > div
      display: flex
      min-height: 100vh
      flex-direction: column
    
    main
      // background-color: whitesmoke
      flex: 1
</style>