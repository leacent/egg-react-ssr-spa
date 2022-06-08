const httpProxy = require('http-proxy');

module.exports = (options={}) => {
  /**
     * defaultOpt通用配置
     * options特殊配置,其中defaultOpt对应proxyTabel的默认配置
     */
  return async function proxy(ctx, next) {
    const { proxyConfig } = ctx.app.config

    try {
      //创建一个代理服务
      const proxy = httpProxy.createProxyServer(
        Object.assign({
          changeOrigin: true,
          secure: false,
          logLevel: 'debug'
        }, proxyConfig)
      );

      //监听代理服务错误
      proxy.on('error', function (err) {
        console.log('监听代理服务错误',err);
      });

      proxy.on('proxyReq', function (proxyReq, req, res, options) {
        // 重写路径
        const rewritedPath = req.url.replace('/V2',''); // can make any rule  
        proxyReq.path = rewritedPath;   
        if (ctx.request.rawBody) {
          //   let bodyData = JSON.stringify(ctx.request.rawBody)
          let bodyData = ctx.request.rawBody
          // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
          //   proxyReq.setHeader('Content-Type', 'application/x-www-form-urlencoded')
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
          // stream the content
          proxyReq.write(bodyData)
        }
      })
      return new Promise((resolve, reject) => {
        console.log('ctx.req', ctx.req.url);
        proxy.web(ctx.req, ctx.res, err => {
          if (err) {
            reject(err)
          } else {
            resolve(next())
          }
        })
      })
    } catch (error) {
      console.log('错误', error)
      ctx.body = {
        code: 403,
        data: '',
        msg: 'http-proxy代理错误'
      };

    }
  }
}
