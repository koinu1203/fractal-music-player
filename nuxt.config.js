export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Foxbel Music',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome.js'],
  dev: process.env.NODE_ENV !== 'production',
  env: {
    apiDev: {
      APP_ID : '591104',
      SECRET_KEY:'91919756ed763700109c8954cebf9374',
      BASE_URL:'http://localhost:3000/',
      PROXY:'https://cors-anywhere.herokuapp.com/'
    },
    apiProd:{
      APP_ID : '590364',
      SECRET_KEY:'2539f691a47b796b6e0f9fe8be1006aa',
      BASE_URL:'https://foxbel-music-app.web.app',
      PROXY:'https://cors-anywhere.herokuapp.com/'
    }
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv'
  ],
  axios:{
    proxy:true
  },
  routes: { '/': { prerender: true }, '/*': { cors: true } },
  proxy:{
    "/": process.env.baseURL
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: function (config, {isDev, isClient}) {
        config.node = {
            fs: "empty"
        };
    }
},
}
