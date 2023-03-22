export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fractal-music-player',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script:[
      { src: '/js/oauth.js' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss','@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome.js'],

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
    "/":"http://localhost:3000/"
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
