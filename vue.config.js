// 基础路径 注意发布之前要先修改这里
let baseUrl = '/'
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  devServer: {
    disableHostCheck: true,
    //port: '8081',
    // proxy: {
    //   '/llw-back': {
    //     target: 'http://localhost:8080', //API服务器的地址
    //     ws: false,  //代理websockets
    //     changeOrigin: false, // 如果接口跨域，需要进行这个参数配置，为true的话，请求的header将会设置为匹配目标服务器的规则（Access-Control-Allow-Origin）
    //     pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //       '^/llw-back': '/'
    //     }
    //   }
    // }
    port: '80',
    proxy: {
      '/llw-back': {
        target: 'http://123.57.233.164', //API服务器的地址
        ws: false,  //代理websockets
        changeOrigin: false, // 如果接口跨域，需要进行这个参数配置，为true的话，请求的header将会设置为匹配目标服务器的规则（Access-Control-Allow-Origin）
        pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/llw-back': '/llw-back'
        }
      }
    }
  },
  baseUrl: baseUrl, // 根据你的实际情况更改这里
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          // return {
          //     plugins: [
          //         new BundleAnalyzerPlugin()
          //     ]
          // }
        config.plugins.push(new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }))
      }
  },
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
    /* 添加分析工具 */
    if (process.env.NODE_ENV === 'production') {
      config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
      config.plugins.delete('prefetch')
    }
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
    entry
        .add('@/mock')
        .end()
  }
}
