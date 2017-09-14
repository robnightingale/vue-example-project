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
    name: 'intro',
    path: '/',
    component: () => import(/* webpackChunkName: "intro" */ '@/components/docs/intro/intro-page.vue'),
    isPublic: false
  },
  {
    name: 'installation',
    path: '/installation',
    component: () => import(/* webpackChunkName: "installation" */ '@/components/docs/installation/installation-page.vue'),
    isPublic: false
  },
  {
    name: 'overview',
    path: '/tutorial/overview',
    component: () => import(/* webpackChunkName: "overview" */ '@/components/docs/tutorial/overview-page.vue'),
    isPublic: true
  },
  {
    name: 'more-resources',
    path: '/more-resources',
    component: () => import(/* webpackChunkName: "more-resources" */ '@/components/docs/more-resources/more-resources-page.vue'),
    isPublic: true
  },
  {
    name: 'node',
    path: '/tutorial/node',
    component: () => import(/* webpackChunkName: "node" */ '@/components/docs/tutorial/node-page.vue'),
    isPublic: true
  },
  {
    name: 'vue-cli',
    path: '/tutorial/vue-cli',
    component: () => import(/* webpackChunkName: "vue-cli" */ '@/components/docs/tutorial/vue-cli-page.vue'),
    isPublic: true
  },
  {
    name: 'editors',
    path: '/tutorial/editors',
    component: () => import(/* webpackChunkName: "editors" */ '@/components/docs/tutorial/editors-page.vue'),
    isPublic: true
  },
  {
    name: 'eslint',
    path: '/tutorial/eslint',
    component: () => import(/* webpackChunkName: "eslint" */ '@/components/docs/tutorial/eslint-page.vue'),
    isPublic: true
  },
  {
    name: 'folders-and-files',
    path: '/tutorial/folders-and-files',
    component: () => import(/* webpackChunkName: "folders-and-files" */ '@/components/docs/tutorial/folders-and-files-page.vue'),
    isPublic: true
  },
  {
    name: 'pwa-configuration',
    path: '/tutorial/eslint',
    component: () => import(/* webpackChunkName: "eslint" */ '@/components/docs/tutorial/pwa-configuration-page.vue'),
    isPublic: true
  }
]
