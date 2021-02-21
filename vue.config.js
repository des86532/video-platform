module.exports = {
  publicPath: '/video-platform/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/variables.scss";`
      },
    }
  }
};