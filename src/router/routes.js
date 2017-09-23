import docs from '@/docs/routes'
import examples from '@/examples/routes'

/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */
const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/features/login/login-page.vue'),
    isPublic: true
  },
  {
    name: 'examples-login',
    path: '/examples/login',
    component: () => import(/* webpackChunkName: "examples-login" */ '@/examples/login/login-page.vue'),
    isPublic: true
  }
]

export default [...routes, ...docs, ...examples]
