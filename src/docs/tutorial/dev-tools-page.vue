<template lang="pug">
  .my-node-page
    back-nav(title='Dev Tools and Profiling')
    section.section
      .container
        .content
          | In this section of the tutorial we'll look at tools for debugging and profiling in the browser...

        .title.is-4 Dev Server

        .content
          | Run the dev server: 

        pre.block
          code.hljs.bash
            :highlight(lang='bash')
              npm run dev

        .content
          | Your browser should automatically open to http://localhost:8080.

        .title.is-4 Vue Dev Tools

        .content
          | Visit the Chrome Web Store to get the 
          a(href='https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd')
            | Vue Dev Tools extension  
          | for helping debug Vue.js applications.
          | Once installed, Open Chrome dev tools and go to the "Vue" tab.

        .title.is-6 Vuex tab

        .content
          | If you click on the "Vuex" tab, you can see all data from the store in the right pane. 
          | Click the 
          code export button
          |  to copy the data to the clipboard. Click the 
          code import button
          |  and paste the clipboard data there.

        .content 
          | For example, you can alter the 
          code accessToken
          |  to something invalid (to simulate an expired 
          code oauth access_token
          |  without waiting on actual expiration) in the pasted data. Then click the 
          code import button
          |  again and the Vuex store will live update. Now you can confirm that the automatic refreshToken interceptor works. 

        .title.is-4 Profiling

        .content
          | Work-in-progress... 

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
