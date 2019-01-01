const isProduction = process.env.NODE_ENV === 'production'
const cdn = {
  css: [
    'https://cdn.jsdelivr.net/npm/element-ui@2.4.11/lib/theme-chalk/index.css'
  ],
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.0.2/dist/vue-router.min.js',
    'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js',
    'https://cdn.jsdelivr.net/npm/element-ui@2.4.11/lib/index.js'
  ]
}
module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (isProduction) {
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
        lodash: '_'
      }
    }
  },
  chainWebpack: config => {
    if (isProduction) {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
    }
  }
}
