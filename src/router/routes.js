/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */

export default [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/components/login/login-page.vue'),
    isPublic: true
  },
  {
    name: 'dashboard',
    path: '/',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/dashboard-page.vue'),
    isPublic: false
  }
]
