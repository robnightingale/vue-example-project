/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */
export default [
  {
    name: 'examples-login',
    path: '/examples/login',
    component: () => import(/* webpackChunkName: "examples-login" */ '@/examples/login/login-page.vue'),
    title: 'Login Example',
    isPublic: true
  },
  {
    name: 'login-live',
    path: '/examples/login-live',
    component: () => import(/* webpackChunkName: "examples-login" */ '@/examples/login/live-page.vue'),
    title: 'Live Login Example',
    isPublic: true
  }
]
