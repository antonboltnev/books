const Dotenv = require('dotenv-webpack');


module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/variables.scss";`
      }
    }
  }
};
