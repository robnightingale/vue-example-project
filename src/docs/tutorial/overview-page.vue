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
                      router-link(v-bind:to="{ name: 'folders-and-files', query: { title: 'Breakdown of all the Folders' }}")  
                        | Breakdown of all the Folders
                    li
                      router-link(v-bind:to="{ name: 'folders-and-files', query: { title: 'Component and Page Folder Structure' }}")  
                        | Component and Page Folder Structure
                    li
                      router-link(v-bind:to="{ name: 'folders-and-files', query: { title: 'Configure For Your Site\\'s Root Subfolder' }}")  
                        | Configure For Your Site's Root Subfolder

                li 
                  router-link(v-bind:to="{ name: 'pwa-configuration' }") PWA Configuration
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'Understanding PWA' }}")  
                        | Understanding PWA
                    li
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'The Manifest' }}")  
                        | The Manifest
                    li
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'The Service Worker' }}")  
                        | The Service Worker
                    li
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'The View Port' }}")  
                        | The View Port
                    li
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'Setting Up HTTPS' }}")  
                        | Setting Up HTTPS
                    li
                      router-link(v-bind:to="{ name: 'pwa-configuration', query: { title: 'Install Banners and Add to Home Screen' }}")  
                        | Install Banners and Add to Home Screen

                li 
                  router-link(v-bind:to="{ name: 'styles' }") Styles
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'styles', query: { title: 'Install Sass and Stylus' }}")  
                        | Install Sass and Stylus
                    li
                      router-link(v-bind:to="{ name: 'styles', query: { title: 'Load Variables and Functions to All Components' }}")  
                        | Load Variables and Functions to All Components
                    li
                      router-link(v-bind:to="{ name: 'styles', query: { title: 'Overriding Styles in Vendor Components' }}")  
                        | Overriding Styles in Vendor Components
                    li
                      router-link(v-bind:to="{ name: 'styles', query: { title: 'Sass Folder Structure' }}")  
                        | Sass Folder Structure
                    li
                      router-link(v-bind:to="{ name: 'styles', query: { title: 'Stylus Folder Structure' }}")  
                        | Stylus Folder Structure
                    li
                      router-link(v-bind:to="{ name: 'styles', query: { title: 'BEM Methodology' }}")  
                        | BEM Methodology
                    li
                      router-link(v-bind:to="{ name: 'styles', query: { title: 'Use BEM with Scoped in .Vue Files' }}")  
                        | Use BEM with Scoped in .Vue Files

                li 
                  router-link(v-bind:to="{ name: 'pug' }") Pug
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'pug', query: { title: 'Understanding PWA' }}")  
                        | Install Pug

                li 
                  router-link(v-bind:to="{ name: 'global' }") Understanding Global
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'global', query: { title: 'Webpack Evaluates Modules Only Once' }}")  
                        | Webpack Evaluates Modules Only Once
                    li
                      router-link(v-bind:to="{ name: 'global', query: { title: 'DefinePlugin' }}")  
                        | DefinePlugin
                    li
                      router-link(v-bind:to="{ name: 'global', query: { title: 'ProvidePlugin' }}")  
                        | ProvidePlugin
                    li
                      router-link(v-bind:to="{ name: 'global', query: { title: 'The Global Window Object' }}")  
                        | The Global Window Object

                li 
                  router-link(v-bind:to="{ name: 'ui-frameworks' }") UI Frameworks
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'ui-frameworks', query: { title: 'Buefy and Bulma' }}")  
                        | Buefy and Bulma
                    li
                      router-link(v-bind:to="{ name: 'ui-frameworks', query: { title: 'Twitter Bootstrap 4 and jQuery' }}")  
                        | Twitter Bootstrap 4 and jQuery
                    li
                      router-link(v-bind:to="{ name: 'ui-frameworks', query: { title: 'Some Other Great Choices' }}")  
                        | Some Other Great Choices
                       
                li 
                  router-link(v-bind:to="{ name: 'main-entry' }") Entry and Polyfills
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'main-entry', query: { title: 'What\\'s in the Main Entry?' }}")  
                        | What's in the Main Entry?
                    li
                      router-link(v-bind:to="{ name: 'main-entry', query: { title: 'Polyfills' }}")  
                        | Polyfills

                li 
                  router-link(v-bind:to="{ name: 'http-client' }") Making API Requests
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'http-client', query: { title: 'Install Axios HTTP Client' }}")  
                        | Install Axios HTTP Client
                    li
                      router-link(v-bind:to="{ name: 'http-client', query: { title: 'Create Vue Plugin' }}")  
                        | Create Vue Plugin
                    li
                      router-link(v-bind:to="{ name: 'http-client', query: { title: 'Organizing Requests to Backend Server API' }}")  
                        | Organizing Requests to Backend Server API
                    li
                      router-link(v-bind:to="{ name: 'http-client', query: { title: 'Proxy Api Calls in the Dev ServerI' }}")  
                        | Proxy Api Calls in the Dev Server
                    li
                      router-link(v-bind:to="{ name: 'http-client', query: { title: 'Proxy Api Calls in Nginx Production Server' }}")  
                        | Proxy Api Calls in Nginx Production Server

                li 
                  router-link(v-bind:to="{ name: 'routing' }") Routing
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'routing', query: { title: 'Install VueRouter' }}")  
                        | Install VueRouter
                    li
                      router-link(v-bind:to="{ name: 'routing', query: { title: 'Setup Routing' }}")  
                        | Setup Routing
                    li
                      router-link(v-bind:to="{ name: 'routing', query: { title: 'Webpack 3 Chunk Naming' }}")  
                        | Webpack 3 Chunk Naming

                li 
                  router-link(v-bind:to="{ name: 'vuex' }") Vuex
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'vuex', query: { title: 'Install Vuex' }}")  
                        | Install Vuex
                    li
                      router-link(v-bind:to="{ name: 'vuex', query: { title: 'State' }}")  
                        | State
                    li
                      router-link(v-bind:to="{ name: 'vuex', query: { title: 'Mutations, Getters, and Actions' }}")  
                        | Mutations, Getters, and Actions
                    li
                      router-link(v-bind:to="{ name: 'vuex', query: { title: 'Plugins' }}")  
                        | Plugins
                    li
                      router-link(v-bind:to="{ name: 'vuex', query: { title: 'The Index' }}")  
                        | The Index

                li 
                  router-link(v-bind:to="{ name: 'authentication' }") Authentication
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'authentication', query: { title: 'Auth Plugin' }}")  
                        | Auth Plugin
                    li
                      router-link(v-bind:to="{ name: 'authentication', query: { title: 'Auth Helpers' }}")  
                        | Auth Helpers

                li 
                  router-link(v-bind:to="{ name: 'testing' }") Testing
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'testing', query: { title: 'Unit Testing' }}")  
                        |  Unit Testing
                    li 
                      router-link(v-bind:to="{ name: 'testing', query: { title: 'End-to-End Testing with Nightwatch and Selenium server' }}")  
                        | End-to-End Testing with Nightwatch and Selenium server
                    li
                      router-link(v-bind:to="{ name: 'authentication', query: { title: 'Running the Tests' }}")  
                        | Running the Tests
                li 
                  router-link(v-bind:to="{ name: 'dev-tools' }") Dev Tools
                  ul
                    li 
                      router-link(v-bind:to="{ name: 'dev-tools', query: { title: 'Dev Server' }}")  
                        |  Dev Server
                    li 
                      router-link(v-bind:to="{ name: 'dev-tools', query: { title: 'Vue Dev Tools' }}")  
                        | Vue Dev Tools
                    li
                      router-link(v-bind:to="{ name: 'dev-tools', query: { title: 'Profiling' }}")  
                        | Profiling
                
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
