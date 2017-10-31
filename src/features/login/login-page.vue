<template lang="pug">
  v-container.my-login(fluid fill-height)
    v-layout(justify-center align-center)
      v-flex.text-xs-center(xs12 lg6)
        v-layout(row wrap)
          v-flex(xs12)
            .my-login__logo
              img(src='~/@/assets/images/logo.svg' alt='Vue Example Project')
          v-flex(xs12)
            .my-login__subheading.subheading
              | Start your project off with a boost.
          v-flex(xs12)
            v-card.my-login__card      
              v-card-title.my-login__card-title(primary-title)
                img.app-avatar(src='~/@/assets/images/profile.jpg' alt='Avatar')

              v-card-text
                v-form
                  v-text-field(
                    label='E-mail' 
                    v-model='credentials.username' 
                    required
                  )       
                  v-text-field(
                    label='Password' 
                    hint='At least 8 characters'
                    v-model='credentials.password'
                    min='8'
                    :append-icon="passwordHidden ? 'visibility' : 'visibility_off'" 
                    :append-icon-cb='() => (passwordHidden = !passwordHidden)' 
                    :type="passwordHidden ? 'password' : 'text'" 
                    counter=''
                  )

              v-card-actions.my-login__card-actions
                v-btn(
                  :loading="loading"
                  @click="login()"
                  block 
                  color='accent' 
                  dark
                ) Login
</template>

<script>
  import auth from '@/auth/helpers'

  export default {
    name: 'login',

    data () {
      return {
        passwordHidden: true,
        credentials: {
          username: 'demouser',
          password: 'testpass'
        },
        error: '',
        loading: false
      }
    },

    methods: {
      logout () {
        // TODO: remove this.
        auth.logout()
      },

      login () {
        this.loading = true

        const credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }

        // auth.login(credentials, 'intro', ({isSuccess, data, errorMessage}) => {
        auth.fakeLogin(credentials, 'intro', ({isSuccess, data, errorMessage}) => {
          this.loading = false
          if (!isSuccess) { console.log(errorMessage) }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .my-login
    background-color: $app-primary

    &__logo

      img
        max-width: 340px
        width: 100%
      
    &__subheading
      color: white
      padding-top: 10px
      padding-bottom: 20px

    &__card
      max-width: 370px
      margin: 0 auto

    &__card-title
      justify-content: center

    &__card-actions
      justify-content: center

</style>