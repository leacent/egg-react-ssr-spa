
'use strict';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.redirect('/', '/home');
  app.get('/spa(/.*)?', app.controller.spa.index.spa);
  app.get('/home(/.*)?', app.controller.home.index.home);
  // 
  // app.get('/proxy-api/*', app.middleware.proxy)
  // // reuest service
  // app.get('/proxy-api/*',  createProxyMiddleware({ 
  //   onOpen: function () {
  //     console.log('开启代理------------------');
  //   },
  //   target: 'http://127.0.0.1:7002', 
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '/proxy-api/user' : ''
  //   }
  // }))
};
