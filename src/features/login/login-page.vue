<template lang="pug">
  .my-login
    .hero.is-fullheight.is-primary
      .hero-body
        .container.has-text-centered
          .columns.is-centered
            .column.is-one-third
              img.my-login__logo(src='../../assets/images/logo.svg' alt='Vue Example Project')
              .is-clearfix
              .my-subtitle(style='padding-top: 15px; padding-bottom: 15px;') Sign in for more sweetness.
              .card
                .card-content.has-text-left
                  h1.title.has-text-dark.has-text-centered
                    img.my-avatar(src='../../assets/images/profile.jpg' alt='Avatar')
                    
                  b-field(label='Email')
                    b-input(type='email', value='demo@email.com', icon="email" @click.native='logout()')
                  b-field(label='Password')
                    b-input(type='password', value='demo', icon='vpn_key', password-reveal)
                  a.button.is-secondary.is-fullwidth(:class="{ 'is-loading': isLoading }", @click="submit")
                    |Sign In
</template>

<script>
  import Auth from '@/utils/auth'

  export default {
    name: 'login',

    data () {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: '',
        isLoading: false
      }
    },

    methods: {
      logout () {
        // TODO: remove this.
        Auth.logout()
      },

      submit () {
        this.isLoading = true

        const credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }

        // Auth.login() returns a promise. A redirect will happen on success.
        // For errors, use .then() to capture the response and the errors will
        // be in the body (response.body.errors).
        Auth.login(credentials, 'intro').then((response) => {
          setTimeout(() => {
            Auth._storeToken({body: {data: { accessToken: '123456789', refreshToken: '77777777' }}})
            this.$router.push({ name: 'intro' })
            this.isLoading = false
          }, 1000)
        })
      }
    }
  }
</script>

<style lang="stylus">
  #app

    .my-login

      &__logo
        max-width: 300px

</style>