const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'locals',
    'access'
  ];
 

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  };

  exports.reactssr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  
  exports.httpProxy = {
    '/proxy-api/user': {
      changeOrigin: true,
      target: 'http://127.0.0.1:7002',
      pathRewrite: {'^/proxy-api/user' : ''}
    }
  }

  return exports;
};
