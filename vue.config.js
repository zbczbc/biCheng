const path = require("path");
const webpack = require("webpack")

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.bgysmartcity.com/",
        //target: "http://120.77.220.34/",
        // target: "http://tiyan.gbei.com",
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/admin'
        }
      },
      "/apix": {
        target: "https://www.v2ex.com/api",
        // target: "http://test.gbei.com",
        // target: "http://tiyan.gbei.com",
        // ws: true,
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    // config.entry('main').add('babel-polyfill');
    config.entry.app = ["babel-polyfill", "./src/main.js"];
    config.resolve.alias
      .set("@", resolve("src"))
      .set("base", resolve("src/base"))
      .set("common", resolve("src/common"))
      .set("assets", resolve("src/assets"));
  },
  css: {
    loaderOptions: {
      stylus: {
        import: resolve("src/common/stylus/mixin.styl")
      },
    }
  },
  configureWebpack:  {
    externals: {
      "BMap": "BMap",
      "BMap_Symbol_SHAPE_POINT": "BMap_Symbol_SHAPE_POINT"
    }
  }
};
