<template lang="pug">
  .my-overview-page
    main-nav
    main
      docs-nav(active-tab='tutorial')
      section.section
        .container
          .title Table of Contents
          .content
            p
              ul

                li 
                  router-link(v-bind:to="{ name: 'node' }") Node
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'node', query: { title: 'What About Node 8?' }}")  
                        | What About Node 8?
                    li
                      router-link(v-bind:to="{ name: 'node', query: { title: 'Install Node and NPM' }}")  
                        | Install Node and NPM 

                li 
                  router-link(v-bind:to="{ name: 'vue-cli' }") Vue-Cli
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'vue-cli', query: { title: 'Webpack 3 Template' }}")  
                        | Webpack 3 Template
                    li
                      router-link(v-bind:to="{ name: 'vue-cli', query: { title: 'Install Vue Cli and a New PWA Project' }}")  
                        | Install Vue Cli and a New PWA Project 

                li 
                  router-link(v-bind:to="{ name: 'editors' }") Editors
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'editors', query: { title: 'Advantages of VS Code' }}")  
                        | Advantages of VS Code
                    li
                      router-link(v-bind:to="{ name: 'editors', query: { title: 'Setting Up VS Code' }}")  
                        | Setting Up VS Code
                    li
                      router-link(v-bind:to="{ name: 'editors', query: { title: 'Setting Up Sublime Text 3' }}")  
                        | Setting Up Sublime Text 3

                li 
                  router-link(v-bind:to="{ name: 'eslint' }") ESLint
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'eslint', query: { title: 'Configure ESLint' }}")  
                        | Configure ESLint
                    li
                      router-link(v-bind:to="{ name: 'eslint', query: { title: 'ESLint Ignore File' }}")  
                        | ESLint Ignore File

                li 
                  router-link(v-bind:to="{ name: 'folders-and-files' }") Folders and Files
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'folders-and-files', query: { title: 'Understanding PWA' }}")  
                        | Understanding PWA
                    li
                      router-link(v-bind:to="{ name: 'folders-and-files', query: { title: 'ESLint Ignore File' }}")  
                        | ESLint Ignore File

                li 
                  router-link(v-bind:to="{ name: 'pwa-configuration' }") PWA Configuration
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'Understanding PWA' }}")  
                        | Understanding PWA
                    li
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'ESLint Ignore File' }}")  
                        | ESLint Ignore File
                       

    main-footer

</template>

<script>
import DocsNav from '@/docs/nav'

export default {
  name: 'overview',

  components: { DocsNav },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
