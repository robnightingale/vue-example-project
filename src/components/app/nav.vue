<template lang="pug">
  .my-app-nav(v-if="auth.isLoggedIn")
    .container
      nav.navbar
        .navbar-brand
          router-link.navbar-item.my-brand(v-bind:to="{ name: 'dashboard' }")
            img.my-app-nav__logo(src='../../assets/images/logo.svg' alt='Vue Example Project')
          .navbar-item.is-hidden-desktop
            b-dropdown.has-text-dark(position='is-bottom-left')
              img.my-avatar(slot='trigger' src='../../assets/images/profile.jpg')
              b-dropdown-item.has-link
                router-link.navbar-item(v-bind:to="{ name: 'dashboard' }") 
                  b-icon(icon='account_circle' style='padding-right: 20px;')
                  | Account               
              b-dropdown-item.has-link
                router-link.navbar-item(v-bind:to="{ name: 'dashboard' }") 
                  b-icon(icon='supervisor_account' style='padding-right: 20px;')
                  | Orgs   
              b-dropdown-item.has-link
                router-link.navbar-item(v-bind:to="{ name: 'dashboard' }") 
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
              a.navbar-link.is-active(href='/documentation/overview/start/')
                | Dashboards
              .navbar-dropdown
                a.navbar-item(href='/documentation/overview/start/')
                  | Overview
                a.navbar-item(href='http://bulma.io/documentation/modifiers/syntax/')
                  | Modifiers
                a.navbar-item(href='http://bulma.io/documentation/grid/columns/')
                  | Grid
                a.navbar-item(href='http://bulma.io/documentation/form/general/')
                  | Form
                a.navbar-item(href='http://bulma.io/documentation/elements/box/')
                  | Elements
                a.navbar-item.is-active(href='http://bulma.io/documentation/components/breadcrumb/')
                  | Components
                a.navbar-item(href='http://bulma.io/documentation/layout/container/')
                  | Layout
                hr.navbar-divider
                .navbar-item
                  div
                    p.is-size-6-desktop
                      strong.has-text-info 0.5.0
                    small
                      a.view-all-versions(href='/versions') View all versions
            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link.is-active(href='/documentation/overview/start/')
                | Listings
              .navbar-dropdown
                router-link.navbar-item(v-bind:to="{ name: 'dashboard' }") Editor
            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link(href='http://bulma.io/blog/')
                | Tools
              #blogDropdown.navbar-dropdown(data-style='width: 18rem;')
                a.navbar-item(href='/2017/07/24/access-previous-bulma-versions/')
                  .navbar-content
                    p
                      small.has-text-info 24 Jul 2017
                    p Access previous Bulma versions
                a.navbar-item(href='/2017/03/10/new-field-element/')
                  .navbar-content
                    p
                      small.has-text-info 10 Mar 2017
                    p New field element (for better controls)
                a.navbar-item(href='/2016/04/11/metro-ui-css-grid-with-bulma-tiles/')
                  .navbar-content
                    p
                      small.has-text-info 11 Apr 2016
                    p Metro UI CSS grid with Bulma tiles
                a.navbar-item(href='http://bulma.io/blog/')
                  | More posts
                hr.navbar-divider
                .navbar-item
                  .navbar-content
                    .level.is-mobile
                      .level-left
                        .level-item
                          strong Stay up to date!
                      .level-right
                        .level-item
                          a.button.is-rss.is-small(href='http://bulma.io/atom.xml')
                            span.icon.is-small
                              i.fa.fa-rss
                            span Subscribe
            .navbar-item.has-dropdown.is-hoverable
              .navbar-link
                | Reports
              #moreDropdown.navbar-dropdown
                a.navbar-item(href='http://bulma.io/extensions/')
                  .level.is-mobile
                    .level-left
                      .level-item
                        p
                          strong Extensions
                          br
                          small Side projects to enhance Bulma
                    .level-right
                      .level-item
                        span.icon.has-text-info
                          i.fa.fa-plug
            .navbar-item.has-dropdown.is-hoverable
              .navbar-link
                | More
              #moreDropdown.navbar-dropdown
                a.navbar-item(href='http://bulma.io/extensions/')
                  .level.is-mobile
                    .level-left
                      .level-item
                        p
                          strong Extensions
                          br
                          small Side projects to enhance Bulma
                    .level-right
                      .level-item
                        span.icon.has-text-info
                          i.fa.fa-plug
          .navbar-end
            .navbar-item.has-dropdown.is-hoverable
              .navbar-link
                img.my-avatar(src='../../assets/images/profile.jpg')
                | David Graham
              .navbar-dropdown
                router-link.navbar-item(v-bind:to="{ name: 'dashboard' }") Account
                router-link.navbar-item(v-bind:to="{ name: 'dashboard' }") Orgs
                router-link.navbar-item(v-bind:to="{ name: 'dashboard' }") Switch Org
                hr.navbar-divider
                a.navbar-item(@click='logout()')
                  b-icon(icon="exit_to_app", style='padding-right: 10px;')
                  span Logout
</template>

<script>
import Auth from '@/utils/auth'

export default {
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
      Auth.logout()
    },

    itemSelected (name) {
      if (name === 'Logout') Auth.logout()
      if (name === 'Account') this.$router.push({ name: 'account' })
      if (name === 'Org') this.$router.push({ name: 'org' })
    }
  }
}

</script>

<style lang="stylus">
  #app
  
    .my-app-nav
      background-color: $my-primary
      border-bottom: 1px solid rgba(255, 255, 255, 0.5)

      .navbar
        background-color: $my-primary

      .navbar-item img
        max-height: 36px

      .navbar-item > a, 
      .navbar-item > .navbar-link
        color: $my-white

      .navbar-item > .navbar-link::after
        border-color: $my-white

      .navbar-item:hover > a, 
      .navbar-item:hover > .navbar-link
        color: $my-black

      .navbar-item:hover > .navbar-link::after
        border-color: $my-primary
</style>