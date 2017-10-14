<template lang="pug">
  section.section
    .container
      .subtitle 
        | Here's some examples of how to perform an OAuth2 login and authentication with
        | some popular backends. 
      br

      .columns.is-desktop
        .column
          .card
            header.card-header
                p.card-header-title
                    | Dummy/Fake Login
            .card-content
              .content
                | This is the default login set for the App when you first clone/download it.
                | It will perform a setTimeout to simulate processing and then it will add 
                | a fake 
                code access_token
                |  and 
                code refresh_token
                |  so that you can access private routes/pages. Of course, there is no demonstration
                | of access to data
                | from a private backend server since the tokens are fake.
            .card-footer
              .app-v-spacer.is-hidden-touch
              .button.is-white.has-text-primary.app-margin-auto
                router-link(:to="{ name: 'login' }") Check it out 
          br
                      
          .card
            header.card-header
                p.card-header-title
                    | Live Online Demo Login
            .card-content
              .content
                | Connects to a live OAuth2 server here: 
                a(href='http://brentertainment.com/oauth2') http://brentertainment.com/oauth2
            .card-footer
              .app-v-spacer.is-hidden-touch
              .button.is-white.has-text-primary.app-margin-auto
                router-link(:to="{ name: 'login-live' }") Check it out 
          br

          .card
            header.card-header
                p.card-header-title
                    | Express (Node) Login
            .card-content
              .content
                | Work in progess...
            .card-footer
              .app-v-spacer.is-hidden-touch
              .button.is-white.has-text-grey.app-margin-auto(disabled)
                span Check it out

        .column
          .card
            header.card-header
                p.card-header-title
                    | Spring Auth (Java) Login
            .card-content
              .content
                | Work in progess...
            .card-footer
              .app-v-spacer.is-hidden-touch
              .button.is-white.has-text-grey.app-margin-auto(disabled)
                span Check it out
          br

          .card
            header.card-header
                p.card-header-title
                    | Laravel Passport (PHP) Login
            .card-content
              .content
                | Work in progess...
            .card-footer
              .app-v-spacer.is-hidden-touch
              .button.is-white.has-text-grey.app-margin-auto(disabled)
                span Check it out

</template>

<script>
export default {
  name: 'login-page',

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
