<template lang="pug">
  v-toolbar.main-toolbar(color="primary" dark app :class="{ 'elevation-0': !$store.state.appbar.elevation }")
    v-toolbar-side-icon(v-show="!$store.state.appbar.showBackButton" @click.stop="toggleSidebar()")
    v-btn(icon v-show="$store.state.appbar.showBackButton" @click.stop="$router.back()")
      v-icon arrow_back
    v-toolbar-title {{ $store.state.appbar.title }}
</template>

<script>
export default {
  name: 'MainToolbar',

  methods: {
    toggleSidebar () {
      console.log(this.$store.state.sidebar)
      this.$store.commit('ACTIVATE_SIDEBAR', !this.$store.state.sidebar)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-toolbar
    z-index: 2
</style>