import Express from 'express';
import http from 'http';

const app = new Express();
const server = new http.Server(app);
const port = 3001;
const proxy = require('http-proxy').createProxyServer({});

// Webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// Config
const webpackConfig = require('./webpack/common.config');

global.ssr = true;

(function initWebpack() {
  const compiler = webpack(webpackConfig);

  // Proxy for static folder
  app.use(/\/static\/(.*)/, (req, res) => {
    req.url = req.originalUrl;
    proxy.web(req, res, { target: 'http://localhost:3000' });
  });

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
}());

server.listen(port, () => {
  const host = server.address().address;

  console.log('Server is listening on http://%s:%s', host, port);
});
