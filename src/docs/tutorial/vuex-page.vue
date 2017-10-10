<template lang="pug">
  .my-node-page
    main
      back-nav(title='Vuex')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at central state management with Vuex...

          .title.is-4 Install Vuex

          .content 
            | Let's setup the state of our central data storage. We'll want some state to be available 
            | across browser tabs (and when the app is closed/reopened) so let's sync this state with
            | LocalStorage. When the app bootstraps, we want to first check in the browser's localStorage
            | and retrieve all of our previously stored data. We'll also have other state we can use for
            | to make component-to-component communication easier (for situations where you don't have
            | a simple parent-child communication, but more complex sibling-to-sibling or other component
            | relationships). Let's just add a property for storing the search text and button press on
            | the navbar for demonstration purposes. 

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                npm install vuex --save-dev

          .title.is-4 State

          strong.my-italic src/vuex/state.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                /**
                * Key for local storage.
                *
                * Set the key to use in local storage to hold persistant data. If logged in,
                * you can see this key by going to Chrome > dev tools > application tab,
                * then choosing "Local Storage" and "http://localhost:8080".
                *
                * @type {string}
                */
                export const STORAGE_KEY = 'vue-example-project'

                /**
                * Initialize all the shared app state in Vuex.
                *
                * @return {Object}
                */
                function initializeState () {
                  let syncedState = {
                    auth: {
                      isLoggedIn: false,
                      accessToken: null,
                      refreshToken: null
                    },
                    user: {
                      name: null
                    }
                  }

                  const notSyncedState = {
                    sidebar: false,
                    currentView: null
                  }

                  // Sync with local storage.
                  if (localStorage.getItem(STORAGE_KEY)) {
                    syncedState = JSON.parse(localStorage.getItem(STORAGE_KEY))
                  }

                  return Object.assign(syncedState, notSyncedState)
                }

                /**
                * The shared app state in Vuex.
                *
                * @type {Object}
                */
                export const state = initializeState()


          .title.is-4 Mutations, Getters, and Actions

          .title.is-6 Mutations

          .content Now create a file to hold all the methods that will change the state in our Vuex store:

          strong.my-italic src/vuex/mutations.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                /**
                * Update auth data in Vuex.
                *
                * @param  {state} state  The full existing data we have stored in Vuex.
                * @param  {auth}  auth   The new auth data.
                * @return {void}
                */
                export const UPDATE_AUTH = (state, auth) => {
                  state.auth = auth
                }

                /**
                * Update user data in Vuex.
                *
                * @param  {state} state The full existing data we have stored in Vuex.
                * @param  {user}  user  The new user data.
                * @return {void}
                */
                export const UPDATE_USER = (state, user) => {
                  state.user = user
                }

                /**
                * Open/Close the app sidebar.
                *
                * @param  {state}    state The full existing data we have stored in Vuex.
                * @param  {Boolean}  open  The open/close status.
                * @return {void}
                */
                export const UPDATE_SIDEBAR = (state, open) => {
                  state.sidebar = open
                }

                /**
                * Update the current view (used to navigate back/forth to child pages).
                *
                * @param  {state}    state The full existing data we have stored in Vuex.
                * @param  {Boolean}  open  The open/close status.
                * @return {void}
                */
                export const UPDATE_CURRENT_VIEW = (state, view) => {
                  state.currentView = view
                }

                /**
                * Clear each property, one by one, so reactivity still works.
                *
                * @param  {state} state  The full existing data we have stored in Vuex.
                * @return {void}
                */
                export const CLEAR_ALL_DATA = (state) => {
                  // Auth
                  state.auth.isLoggedIn = false
                  state.auth.accessToken = null
                  state.auth.refreshToken = null

                  // User
                  state.user.name = ''
                }

          .title.is-6 Getters

          .content And some getters (although you can accesss the Vuex state directly as we'll see shortly):

          strong.my-italic src/vuex/getters.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                export const user = state => state.user

          .title.is-4 Plugins

          .content And some getters (although you can accesss the Vuex state directly as we'll see shortly):

          strong.my-italic src/vuex/plugins.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                import { STORAGE_KEY } from './state'

                /**
                * @param  {Vuex}
                * @return {Function}
                */
                const localStoragePlugin = store => {
                  store.subscribe((mutation, state) => {
                    const syncedData = { auth: state.auth, user: state.user }

                    localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))

                    if (mutation.type === 'CLEAR_ALL_DATA') {
                      localStorage.removeItem(STORAGE_KEY)
                    }
                  })
                }

                /**
                * Export an array of all the plugins.
                *
                * @type {array}
                */
                export default [localStoragePlugin]

          .title.is-4 The Index

          .content And bring it all together in the index.js file:

          strong.my-italic src/vuex/plugins.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                import Vue from 'vue'
                import Vuex from 'vuex'
                import { state } from './state'
                import * as getters from './getters'
                import * as actions from './actions'
                import * as mutations from './mutations'
                import plugins from './plugins'

                Vue.use(Vuex)

                /**
                * All the parts we need to implement shared state across our app with Vuex.
                *
                * @type {Vuex}
                */
                const store = new Vuex.Store({
                  state,
                  getters,
                  actions,
                  mutations,
                  plugins
                })

                /**
                * Export the store object.
                *
                * @type {Vuex}
                */
                export default store

    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'vuex',

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
