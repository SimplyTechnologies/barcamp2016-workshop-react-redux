const Express = require('express');
const webpack = require('webpack');

const config = require('./src/config');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

const port = config.port;

const serverOptions = {
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
};

const app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
