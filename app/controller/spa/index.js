
module.exports = app => {
  return class AdminController extends app.Controller {
    async spa() {
      const { ctx } = this;
      //第二个参数不指定， 默认模板位置 'app/web/view/layout.html'
      await ctx.renderClient('spa.js', {});
    }
  };
};