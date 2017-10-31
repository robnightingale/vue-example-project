/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */
export default [
  {
    name: 'intro',
    path: '/',
    component: () => import(/* webpackChunkName: "intro" */ '@/docs/intro/intro-page.vue'),
    title: 'Intro',
    isPublic: false
  },
  {
    name: 'installation',
    path: '/installation',
    component: () => import(/* webpackChunkName: "installation" */ '@/docs/installation/installation-page.vue'),
    title: 'Installation',
    isPublic: false
  },
  {
    name: 'overview',
    path: '/tutorial/overview',
    component: () => import(/* webpackChunkName: "overview" */ '@/docs/tutorial/overview-page.vue'),
    title: 'Tutorial',
    isPublic: true
  },
  {
    name: 'more-resources',
    path: '/more-resources',
    component: () => import(/* webpackChunkName: "more-resources" */ '@/docs/more-resources/more-resources-page.vue'),
    title: 'More Resources',
    isPublic: true
  },
  {
    name: 'node',
    path: '/tutorial/node',
    component: () => import(/* webpackChunkName: "node" */ '@/docs/tutorial/node-page.vue'),
    title: 'Node',
    isPublic: true
  },
  {
    name: 'vue-cli',
    path: '/tutorial/vue-cli',
    component: () => import(/* webpackChunkName: "vue-cli" */ '@/docs/tutorial/vue-cli-page.vue'),
    title: 'Vue Cli',
    isPublic: true
  },
  {
    name: 'editors',
    path: '/tutorial/editors',
    component: () => import(/* webpackChunkName: "editors" */ '@/docs/tutorial/editors-page.vue'),
    title: 'Editors',
    isPublic: true
  },
  {
    name: 'eslint',
    path: '/tutorial/eslint',
    component: () => import(/* webpackChunkName: "eslint" */ '@/docs/tutorial/eslint-page.vue'),
    title: 'Eslint',
    isPublic: true
  },
  {
    name: 'folders-and-files',
    path: '/tutorial/folders-and-files',
    component: () => import(/* webpackChunkName: "folders-and-files" */ '@/docs/tutorial/folders-and-files-page.vue'),
    title: 'Folders and Files',
    isPublic: true
  },
  {
    name: 'pwa-configuration',
    path: '/tutorial/eslint',
    component: () => import(/* webpackChunkName: "eslint" */ '@/docs/tutorial/pwa-configuration-page.vue'),
    title: 'PWA Configuration',
    isPublic: true
  },
  {
    name: 'styles',
    path: '/tutorial/styles',
    component: () => import(/* webpackChunkName: "styles" */ '@/docs/tutorial/styles-page.vue'),
    title: 'Styles',
    isPublic: true
  },
  {
    name: 'pug',
    path: '/tutorial/pug',
    component: () => import(/* webpackChunkName: "pug" */ '@/docs/tutorial/pug-page.vue'),
    title: 'Pug',
    isPublic: true
  },
  {
    name: 'global',
    path: '/tutorial/global',
    component: () => import(/* webpackChunkName: "global" */ '@/docs/tutorial/global-page.vue'),
    title: 'Globals',
    isPublic: true
  },
  {
    name: 'ui-frameworks',
    path: '/tutorial/ui-frameworks',
    component: () => import(/* webpackChunkName: "ui-frameworks" */ '@/docs/tutorial/ui-frameworks-page.vue'),
    title: 'UI Frameworks',
    isPublic: true
  },
  {
    name: 'main-entry',
    path: '/tutorial/main-entry',
    component: () => import(/* webpackChunkName: "main-entry" */ '@/docs/tutorial/main-entry-page.vue'),
    title: 'Main Entry',
    isPublic: true
  },
  {
    name: 'routing',
    path: '/tutorial/routing',
    component: () => import(/* webpackChunkName: "routing" */ '@/docs/tutorial/routing-page.vue'),
    title: 'Routing',
    isPublic: true
  },
  {
    name: 'http-client',
    path: '/tutorial/http-client',
    component: () => import(/* webpackChunkName: "http-client" */ '@/docs/tutorial/http-client-page.vue'),
    title: 'Http Client',
    isPublic: true
  },
  {
    name: 'vuex',
    path: '/tutorial/vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '@/docs/tutorial/vuex-page.vue'),
    title: 'Vuex',
    isPublic: true
  },
  {
    name: 'authentication',
    path: '/tutorial/authentication',
    component: () => import(/* webpackChunkName: "authentication" */ '@/docs/tutorial/authentication-page.vue'),
    title: 'Authentication',
    isPublic: true
  },
  {
    name: 'testing',
    path: '/tutorial/testing',
    component: () => import(/* webpackChunkName: "testing" */ '@/docs/tutorial/testing-page.vue'),
    title: 'Testing',
    isPublic: true
  },
  {
    name: 'dev-tools',
    path: '/tutorial/dev-tools',
    component: () => import(/* webpackChunkName: "dev-tools" */ '@/docs/tutorial/dev-tools-page.vue'),
    title: 'Dev Tools',
    isPublic: true
  }
]
