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
 * Show or hide the main sidebar.
 *
 * @param  {state}    state   The full existing data we have stored in Vuex.
 * @param  {boolean}  active  The active state of the sidebar.
 * @return {void}
 */
export const ACTIVATE_SIDEBAR = (state, active) => {
  state.sidebar = active
}

/**
 * Page settings.
 *
 * @param  {state}   state    The full existing data we have stored in Vuex.
 * @param  {string}  settings The page settings.
 * @return {void}
 */
export const UPDATE_PAGE = (state, settings) => {
  state.page = settings
}

/**
 * Appbar settings.
 *
 * @param  {state}   state    The full existing data we have stored in Vuex.
 * @param  {string}  settings The appbar settings.
 * @return {void}
 */
export const UPDATE_APPBAR = (state, settings) => {
  state.appbar = settings
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

  // Sidebar
  state.sidebar = false

  // Page Settings
  state.page.title = null
  state.page.layout = 'LayoutDefault'

  // Appbar Settings
  state.appbar.title = null
  state.appbar.showBackButton = false
  state.appbar.elevation = true
}
