
'use strict';

const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);


module.exports = {
  devtool: 'eval',
  entry: {
    home: 'app/web/page/ssr/entry.jsx', // 服务端渲染
    spa: 'app/web/page/spa/index.jsx' // 客户端渲染，单页面应用
  },
  module:{
    rules:[
      {
        less: true
      }
    ]
  },
  loaders: {
    babel: {
      include: [resolve('app/web'), resolve('node_modules')]
    },
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#00b96b',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        }
      }
    }
  },
  done() {
    console.log('---webpack compile finish---');
  }
};
