const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ['/organizations', '/formsubmit'],
    createProxyMiddleware({
      target: "http://localhost:5000"
    })
  );
};
