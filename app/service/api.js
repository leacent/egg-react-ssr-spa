const egg = require('egg');

module.exports = class ApiService extends egg.Service {
  getUserInfo (userId) {
    console.log('userId', userId);
    return {
      userId,
      name: 'leacent'
    }
  } 
}