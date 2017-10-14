<template lang="pug">
  .my-nav(v-if="auth.isLoggedIn")
    .container
      nav.navbar
        .navbar-brand
          router-link.navbar-item(v-bind:to="{ name: 'installation' }")
            img(src='~/@/assets/images/logo.svg' alt='Vue Example Project')
          .navbar-item.is-hidden-desktop
            b-dropdown.has-text-dark(position='is-bottom-left')
              img.app-avatar(slot='trigger' src='~/@/assets/images/profile.jpg')
              b-dropdown-item.has-link
                router-link.navbar-item(v-bind:to="{ name: 'installation' }") 
                  b-icon(icon='account_circle' style='padding-right: 20px;')
                  | Account               
              b-dropdown-item.has-link
                router-link.navbar-item(v-bind:to="{ name: 'installation' }") 
                  b-icon(icon='supervisor_account' style='padding-right: 20px;')
                  | Orgs   
              b-dropdown-item.has-link
                router-link.navbar-item(v-bind:to="{ name: 'installation' }") 
                  b-icon(icon='compare_arrows' style='padding-right: 20px;')
                  | Switch Org  
              hr.navbar-divider
              b-dropdown-item.has-link(@click='logout()')
                a
                  b-icon(icon="exit_to_app" style='padding-right: 20px;')
                  | Logout
          .navbar-item.is-hidden-desktop(style='margin-left: auto;' data-target='navMenuExample' @click='toggleMenu = !toggleMenu')
            b-icon(icon='menu')
        #navMenuExample.navbar-menu
          .navbar-start
            .navbar-item.has-dropdown.is-hoverable
              router-link.navbar-link.is-active(:to="{ name: 'intro' }")
                | Documentation
              .navbar-dropdown
                router-link.navbar-item(:to="{ name: 'intro' }")
                  | Intro
                router-link.navbar-item(:to="{ name: 'installation' }")
                  | Installation
                router-link.navbar-item(:to="{ name: 'overview' }")
                  | Tutorial
                router-link.navbar-item(:to="{ name: 'more-resources' }")
                  | More Resources
                hr.navbar-divider
                .navbar-item
                  div
                    p.is-size-6-desktop
                      strong.has-text-info 0.5.0
                    small
                      router-link.view-all-versions(:to="{ name: 'more-resources' }") Release Notes
            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link.is-active(href='/documentation/overview/start/')
                | Examples
              .navbar-dropdown
                router-link.navbar-item(v-bind:to="{ name: 'examples-login' }") Logins

          .navbar-end
            .navbar-item.has-dropdown.is-hoverable
              .navbar-link
                img.app-avatar(src='~/@/assets/images/profile.jpg')
                | David Graham
              .navbar-dropdown
                router-link.navbar-item(v-bind:to="{ name: 'intro' }") My Account
                router-link.navbar-item(v-bind:to="{ name: 'intro' }") Support
                hr.navbar-divider
                a.navbar-item(@click='logout()')
                  b-icon(icon="exit_to_app", style='padding-right: 10px;')
                  span Logout

    app-menu(v-model='toggleMenu')
      sub-menu(level='1')
        .menu-label Apple
        sub-menu(level='2' slot='content')
          ul.menu-list
            li
              a Fiji
            li
              a Gala
      sub-menu(level='1')
        .menu-label Peach
        sub-menu(level='2' slot='content')
          ul.menu-list
            li
              a Fuzz
            li
              a Heha
</template>

<script>
import auth from '@/auth/helpers'
import AppMenu from '@/features/common/menu/menu'
import SubMenu from '@/features/common/menu/sub-menu'

export default {
  components: { AppMenu, SubMenu },

  data () {
    return {
      auth: this.$store.state.auth,
      sidebar: false,
      toggleMenu: false,
      items: [
        { name: 'Account', icon: 'account_box' },
        { name: 'Org', icon: 'supervisor_account' },
        { name: 'Logout', icon: 'exit_to_app' }
      ]
    }
  },

  methods: {
    logout () {
      auth.logout()
    },

    itemSelected (name) {
      if (name === 'Logout') auth.logout()
      if (name === 'Account') this.$router.push({ name: 'account' })
      if (name === 'Org') this.$router.push({ name: 'org' })
    }
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

      .navbar-item img
        max-height: 36px

      .navbar-item > a, 
      .navbar-item > .navbar-link
        color: $app-white

      .navbar-item > .navbar-link::after
        border-color: $app-white

      .navbar-item:hover > a, 
      .navbar-item:hover > .navbar-link
        color: $app-black

      .navbar-item:hover > .navbar-link::after
        border-color: $app-primary
</style>