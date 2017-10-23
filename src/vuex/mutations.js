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
 * Show or hide the top app navbar.
 *
 * @param  {state} state The full existing data we have stored in Vuex.
 * @param  {user}  el  The element of the new active side-nav item.
 * @return {void}
 */
export const SHOW_NAV = (state, show) => {
  state.nav = show
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
