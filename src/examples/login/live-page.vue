<template lang="pug">
  .hero.is-fullheight.is-primary
    .hero-body
      .container.has-text-centered
        .columns.is-centered
          .column.is-one-third
            img.my-logo(src='~/@/assets/images/logo.svg' alt='Vue Example Project')
            .is-clearfix
            .my-subtitle(style='padding-top: 15px; padding-bottom: 15px;') Start your project off with a boost.
            .card
              .card-content.has-text-left
                h1.title.has-text-dark.has-text-centered
                  img.app-avatar(src='~/@/assets/images/profile.jpg' alt='Avatar')
                  
                b-field(label='Email')
                  // Update below to type='email' for email validation
                  b-input(type='text' v-model='credentials.username' icon="email" @click.native='logout()')
                b-field(label='Password')
                  b-input(type='password' v-model='credentials.password' icon='vpn_key' password-reveal)
                a.button.is-secondary.is-fullwidth(:class="{ 'is-loading': isLoading }" @click="submit")
                  |Sign In
</template>

<script>
  import auth from '@/auth/helpers'

  export default {
    name: 'login',

    data () {
      return {
        credentials: {
          username: 'demouser',
          password: 'testpass'
        },
        error: '',
        isLoading: false
      }
    },

    methods: {
      logout () {
        // TODO: remove this.
        auth.logout()
      },

      submit () {
        this.isLoading = true

        const credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }

        auth.login(credentials, 'intro', ({isSuccess, data, errorMessage}) => {
          if (!isSuccess) { console.log(errorMessage) }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #app

    .my-logo
      max-width: 300px

</style>