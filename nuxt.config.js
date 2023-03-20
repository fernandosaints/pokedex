import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/pokedex/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Pokédex',
    title: 'pokedex',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  toast: {
    transition: 'Vue-Toastification__fade',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          bug: '#91BD2B',
          dark: '#595761',
          dragon: '#0D69C7',
          electric: '#F2D94F',
          fairy: '#ED8FE6',
          fighting: '#FAA64D',
          fire: '#D4425E',
          flying: '#A1BAED',
          ghost: '#5E6EBD',
          grass: '#5EBD59',
          ground: '#D97D4D',
          ice: '#75D1C2',
          normal: '#A1A39E',
          poison: '#B863CF',
          psychic: '#FA8582',
          rock: '#C9BA8A',
          steel: '#5794A3',
          water: '#549EDE',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          bug: '#91BD2B',
          dark: '#595761',
          dragon: '#0D69C7',
          electric: '#F2D94F',
          fairy: '#ED8FE6',
          fighting: '#FAA64D',
          fire: '#D4425E',
          flying: '#A1BAED',
          ghost: '#5E6EBD',
          grass: '#5EBD59',
          ground: '#D97D4D',
          ice: '#75D1C2',
          normal: '#A1A39E',
          poison: '#B863CF',
          psychic: '#FA8582',
          rock: '#C9BA8A',
          steel: '#5794A3',
          water: '#549EDE',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
