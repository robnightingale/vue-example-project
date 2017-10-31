<template lang="pug">
  v-app
    transition(name="slide" mode="out-in")
      router-view
</template>

<script>
export default {
  name: 'LayoutNoAuth'
}
</script>

<style lang="stylus">

</style>