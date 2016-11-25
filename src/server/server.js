import Express from 'express';
import http from 'http';

// Webpack
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Utils
import render from './utils/render';

// Configs
import webpackConfig from '../../webpack/common.config.babel.js';

const compiler = webpack(webpackConfig);
const app = new Express();
const server = new http.Server(app);
const port = process.env.NODE_ENV === 'development'
  ? 3000
  : 80;

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
}

// Static directory for express
app.use('/static', Express.static(`${__dirname}/../../static/`));
app.use('/dist', Express.static(`${__dirname}/../../dist/`));

app.get(/.*/, (req, res) => {
  const domain = req.get('host').replace(/\:.*/, '');
  res.end(render('', port, domain));
});

server.listen(port, () => {
  const host = server.address().address;

  console.log('Server is listening on http://%s:%s', host, port);
});
