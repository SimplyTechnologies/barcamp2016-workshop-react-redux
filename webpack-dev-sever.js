const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const port = require('./src/config').port;

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
  silent: true,
}).listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:', port);
});
