
module.exports = app => {
  return class AdminController extends app.Controller {
    async home(ctx) {
      const list = ctx.service.mock.getArticleList(); 
      const now =  Date.now()
      await ctx.render('home.js', { ctx, prefix: '/home', url: ctx.url });
      console.log('render耗时-----------------', Date.now() - now)
    }
  };
};