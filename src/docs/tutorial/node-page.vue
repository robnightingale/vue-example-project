<template lang="pug">
  div
    back-nav(title='Node')
    section.section
      .container
        .content
          | In this section of the tutorial we'll discuss Node...

        .title.is-4 What About Node 8?

        .content
          | With Node 8 LTS start date coming in 
          a(href='https://github.com/nodejs/LTS#lts-schedule1') October 2017 
          | , why not update to it now? Well, in short, the reason is it's paired with NPM 5,
          | which is 
          a(href='https://github.com/npm/npm/issues/16991') very buggy at the moment
          | . Better to wait for NPM to mature a little more first.

        .title.is-4 Install Node and NPM

        .content
          | Get the setup script:
        pre.block
          code.hljs.bash
            :highlight(lang='bash')
              $ cd ~
              $ curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh

        .content
          | Inspect that you have the script, then run with
          code sudo
          | :
        pre.block
          code.hljs.bash
            :highlight(lang='bash')
              $ nano nodesource_setup.sh
              $ sudo bash nodesource_setup.sh

        .content
          | Now install Nodejs:

        pre.block
          code.hljs.bash
            :highlight(lang='bash')
              $ sudo apt-get install nodejs

        .content
          | The nodejs package contains the nodejs binary as well as npm, so you don't
          | need to install npm separately. However, in order for some npm packages
          | to work (such as those that require compiling code from source), you will
          | need to install the build-essential package:

        pre.block
          code.hljs.bash
            :highlight(lang='bash')
              $ sudo apt-get install build-essential
    
</template>

<script>
export default {
  name: 'node',

  mounted () {
    // @TODO: You don't have to do this if you are using "history" mode in VueRouter.
    // I'm doing this here because of GitHub Pages "hash" mode requirement/limitation.
    const titles = Array.from(document.getElementsByClassName('title'))
    const title = titles.filter((el) => el.innerHTML === this.$route.query.title)[0]
    if (title) title.scrollIntoView()
  },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
