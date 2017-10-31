<template lang="pug">
  .my-installation

    v-tabs(dark)
      v-tabs-bar
        v-tabs-slider(color='accent')
        v-tabs-item(:to="{ name: 'intro' }" ripple) Intro     
        v-tabs-item(:to="{ name: 'installation' }" ripple) Install     
        v-tabs-item(:to="{ name: 'overview' }" ripple) Tutorial     
        v-tabs-item(:to="{ name: 'more-resources' }" ripple) More Resources

    v-container(fluid fill-height)
      v-layout(row wrap style="width: 100%; max-width: 100%;")
        v-flex(d-flex xs12 lg6)
          .app-content
            v-alert(color='info' icon='info' value='true')     
              | Note: This live demo and the app you are about to clone/install 
              strong are almost identical 
              | . Because this live demo runs on GitHub Pages, it uses route hashing and most routes
              | are turned on as public instead of private.

        v-flex(d-flex xs12)
          .app-content.display-1 Install

        v-flex(d-flex xs12)
          .app-content
            | (Don't have Node/NPM yet? Thinking about Node 8? See  
            router-link(:to="{ name: 'node'}") this part of the tutorial 
            | first.)
        
        v-flex(d-flex xs12)
          .app-content
            pre
              code.hljs.bash
                :highlight(lang='bash')
                  $ git clone git@github.com:prograhammer/vue-example-project.git   # Clone the repo.
                  $ cd vue-example-project
                  $ npm install   # Install dependencies.
                  $ npm run dev   # Start dev server at http://localhost:8080.


</template>

<script>
export default {
  name: 'intro',

  mounted () {
    this.$store.commit('UPDATE_APPBAR', Object.assign(this.$store.state.appbar, {
      title: 'Documentation',
      elevation: false
    }))
  },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>

<style lang="stylus" scoped>

</style>
