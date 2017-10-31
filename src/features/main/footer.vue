<template lang="pug">
  v-footer(v-show="$store.state.auth.isLoggedIn" color="secondary" app)
    span.white--text © 2017
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style lang="stylus">

</style>