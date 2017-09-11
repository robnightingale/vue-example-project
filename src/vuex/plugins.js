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
