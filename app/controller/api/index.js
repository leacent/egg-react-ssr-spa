
module.exports = app => {
  return class ApiController extends app.Controller {
    async getUserInfo() {
      const { ctx } = this;
      ctx.body = this.service.api.getUserInfo(ctx.query.id)
    }
  
    async home(ctx) {
      const list = ctx.service.mock.getArticleList(); 
      return await ctx.render('home.js', { ctx, prefix: '/home', url: ctx.url });
    }
  };
};