const webpack = require('webpack');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    IS_PRODUCTION_ENVIRONMENT: false
  }),
];

module.exports = require('./webpack.base')({
  mode: 'development',
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins,
  devtool: 'source-map',
});
