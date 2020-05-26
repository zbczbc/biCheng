const path = require("path");
const webpack = require("webpack")

const VueSSRServerPlugin = require("vue-server-renderer/server-plugin"); 
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin"); 
const nodeExternals = require("webpack-node-externals"); 
const merge = require("lodash.merge"); 
const TARGET_NODE = process.env.WEBPACK_TARGET === "node"; 
const target = TARGET_NODE ? "server" : "client";

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
  
    config.module 
          .rule("vue") 
          .use("vue-loader") 
          .tap(options => { merge(options, { optimizeSSR: false }); });
  },
  css: {
    loaderOptions: {
      stylus: {
        import: resolve("src/common/stylus/mixin.styl")
      },
    }
  },
  configureWebpack: {
    externals: {
      "BMap": "BMap",
      "BMap_Symbol_SHAPE_POINT": "BMap_Symbol_SHAPE_POINT"
    },
    entry: TARGET_NODE ? `./src/entry-${target}.js` : './src/main.js',
    // 对 bundle renderer 提供 source map 支持 
    devtool: 'source-map',
    target: TARGET_NODE ? "node" : "web",
    node: TARGET_NODE ? undefined : false,
    output: { libraryTarget: TARGET_NODE ? "commonjs2" : undefined },
    // https://github.com/liady/webpack-node-externals // 外置化应用程序依赖模块。可以使服务器构建速度更快， // 并生成较小的 bundle 文件。 
    externals: TARGET_NODE ? nodeExternals({ // 不要外置化 webpack 需要处理的依赖模块。 // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件， // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单 
      whitelist: [/\.css$/]
    }) : undefined,
    optimization: { splitChunks: undefined }, 
    plugins: [
      TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()
    ]
  }
};
