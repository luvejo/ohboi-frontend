import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ohboi-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
  },

  fontawesome: {
    icons: {
      solid: ['faAngleLeft', 'faAngleRight', 'faBars', 'faTimes'],
      brands: ['faGoogle'],
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'home_page',
          path: '/',
          component: resolve(__dirname, 'pages/page/_page.vue'),
        },
        {
          name: 'my_story_page',
          path: '/my-stories',
          component: resolve(__dirname, 'pages/my-stories/page/_page.vue'),
        }
      )
    },
  },

  generate: {
    crawler: false,
    routes() {
      const baseURL = process.env.API_BASE_URL
      return axios.get(`${baseURL}/api/stories`).then((res) => {
        const routes = []
        const total = res.data.pages.total

        for (let i = 1; i < total; i++) {
          routes.push(`/page/${i}`)
        }

        return routes
      })
    },
  },
}
