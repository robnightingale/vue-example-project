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
    appbar: {
      title: null,
      showBackButton: false,
      elevation: true
    },
    page: {
      title: null,
      layout: 'LayoutDefault'
    }
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
