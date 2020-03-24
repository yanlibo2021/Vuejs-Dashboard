"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const HOST = process.env.npm_config_host;
const PORT = process.env.npm_config_port && Number(process.env.npm_config_port);

const path = require("path");
const csslist = [
  // "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
  // "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"
];
const devJslist = [
  // "https://cdn.bootcss.com/vue/2.6.10/vue.js",
  // "https://cdn.bootcss.com/vue-router/2.7.0/vue-router.min.js",
  // "https://cdn.bootcss.com/axios/0.18.0/axios.min.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/index.js",
  // "https://cdn.bootcss.com/vuex/3.1.1/vuex.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/locale/zh-CN.min.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/locale/en.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/locale/es.js",
  // "https://cdn.bootcss.com/jsPlumb/2.9.2/js/jsplumb.js",
  // "https://cdn.bootcss.com/lodash.js/4.17.15/lodash.js",
  // "https://cdn.bootcss.com/moment.js/2.24.0/moment.js",
  // "./static/js/vendor.dll.js"
];

const productjslist = [
  // "https://cdn.bootcss.com/vue/2.6.10/vue.min.js",
  // "https://cdn.bootcss.com/vue-router/2.7.0/vue-router.min.js",
  // "https://cdn.bootcss.com/axios/0.18.0/axios.min.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/index.js",
  // "https://cdn.bootcss.com/vuex/3.3.1/vuex.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/locale/zh-CN.min.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/locale/en.js",
  // "https://cdn.bootcss.com/element-ui/2.12.0/locale/es.js",
  // "https://cdn.bootcss.com/jsPlumb/2.9.2/js/jsplumb.min.js",
  // "https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js",
  // "https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"
  // "./static/js/vendor.dll.js"
  "./static/fonts/element-icons.535877f.woff",
  "./static/fonts/element-icons.732389d.ttf",
  "./static/fonts/element-icons.535877f.woff",
  "./static/fonts/iconfont.3a5ead1.ttf",
  "./static/fonts/iconfont.324bb3e.woff",
  "./static/fonts/iconfont.e88cd9c.eot",
  "./static/img/iconfont.f7c16c7.svg"
];

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    //依据参数 baseenv 确定代理环境
    proxyTable: {
      "/mock/": {
        target: `http://${HOST ? HOST : "localhost"}:7000`,
        //changeOrigin: false,
        pathRewrite: {
          "^/mock": ""
        }
      },
      "/api/": {
        target: `http://${HOST ? HOST : "localhost"}:7000`,
        //changeOrigin: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    },

    // Various Dev Server settings
    host: HOST || "localhost", // can be overwritten by process.env.HOST
    port: PORT || 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,


    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
    // 直接通过link标签或script标签加载的CDN文件链接
    cdn: {
      css: csslist,
      js: devJslist
    }
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "./",

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    // 直接通过link标签或script标签加载的CDN文件链接
    cdn: {
      css: csslist,
      js: productjslist
    }
  }
};
