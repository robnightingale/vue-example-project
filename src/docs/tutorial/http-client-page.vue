<template lang="pug">
  .my-node-page
    main
      back-nav(title='Http Client')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at Axios and how to organize ajax calls
            | to our backend server API...

          .title.is-4 Install Axios

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                npm install axios --save-dev


          .title.is-4 Organizing Requests to Backend Server API

          .content
            | Work in progress...


    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'http-client',

  components: { BackNav },

  mounted () {
    // @TODO: You don't have to do this if you are using "history" mode in VueRouter.
    // I'm doing this here because of GitHub Pages "hash" mode requirement/limitation.
    const titles = Array.from(document.getElementsByClassName('title'))
    const title = titles.filter((el) => el.innerHTML === this.$route.query.title)[0]
    if (title) title.scrollIntoView()
    else scroll(0, 0)
  },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
