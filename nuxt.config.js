const pkg = require('./seo')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
      { hid: 'keywords', name: 'keywords', content: pkg.keywords }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true, // Can be also an object with default options
    proxyHeaders: false   // https://axios.nuxtjs.org/
  },
  
  proxy: {
    '/ju/': 'https://www.juzimi.com',
    // '/api2/': 'http://api.another-website.com'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    loader: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
    }],


    extend(config, ctx) {
    }
  }
}
