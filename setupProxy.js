module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:8180/api',
        changeOrigin: true,
      })
    );
  };