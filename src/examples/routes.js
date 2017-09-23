/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */
export default [
  {
    name: 'examples-login',
    path: '/examples/login',
    component: () => import(/* webpackChunkName: "examples-login" */ '@/examples/login/login-page.vue'),
    isPublic: true
  }
]
