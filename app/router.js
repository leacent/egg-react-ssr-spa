
'use strict';
module.exports = app => {
  app.redirect('/', '/home');
  app.get('/spa(/.*)?', app.controller.spa.index.spa);
  app.get('/home(/.*)?', app.controller.home.index.home);
  // reuest service
  app.get('/api/getUserInfo', app.controller.api.index.getUserInfo);
};
