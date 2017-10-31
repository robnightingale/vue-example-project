<template lang="pug">
  v-navigation-drawer.my-sidebar(
    v-model="isActive"
    persistent 
    enable-resize-watcher
    :mobile-break-point="1904"	
    app
    dark
  )
    v-layout(justify-center wrap)
      img.my-sidebar__logo(src='~/@/assets/images/logo.svg' alt='Vue Example Project')

    v-divider
    
    img.my-sidebar__avatar.app-avatar(src='~/@/assets/images/profile.jpg' alt='Avatar')


    v-list
      v-list-group
        v-list-tile(slot="item" ripple)
          v-list-tile-content
            v-list-tile-title David Graham
          v-list-tile-action
            v-icon(dark) keyboard_arrow_down
        v-list-tile(
          ripple
          :href="{ name: 'intro' }"
        )
          v-list-tile-content
            v-list-tile-title Intro


    v-divider
    v-list
      v-list-tile()
        v-list-tile-action
          v-icon notifications_none
        v-list-tile-content
          v-list-tile-title Notifications

      v-list-group
        v-list-tile(slot="item" ripple)
          v-list-tile-action
            v-icon(dark) library_books
          v-list-tile-content
            v-list-tile-title Documentation
          v-list-tile-action
            v-icon(dark) keyboard_arrow_down
        v-list-tile(
          ripple
          :to="{ name: 'intro' }"
        )
          v-list-tile-content
            v-list-tile-title Intro

      v-list-group
        v-list-tile(slot="item" ripple)
          v-list-tile-action
            v-icon(dark) web
          v-list-tile-content
            v-list-tile-title Examples
          v-list-tile-action
            v-icon(dark) keyboard_arrow_down
        v-list-tile(
          ripple
          :href="{ name: 'examples-login' }"
        )
          v-list-tile-content
            v-list-tile-title Logins

      v-list-tile(@click="logout()")
        v-list-tile-action
          v-icon exit_to_app
        v-list-tile-content
          v-list-tile-title Log out
</template>

<script>
import auth from '@/auth/helpers'

export default {
  name: 'MainSidebar',

  computed: {
    isActive: {
      get () {
        return this.$store.state.sidebar
      },
      set (val) {
        this.$store.commit('ACTIVATE_SIDEBAR', val)
      }
    }
  },

  methods: {
    logout () {
      auth.logout()
    }
  }
}
</script>

<style lang="stylus">
  .my-sidebar

    &__logo
      width: 90%
      padding-right: 10%

    &__avatar
      margin-top: 15px
      margin-left: 15px
      width: 70px
  
</style>