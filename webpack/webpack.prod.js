const webpack = require('webpack');
const path = require('path');

const plugins = [
  new webpack.DefinePlugin({
    IS_PRODUCTION_ENVIRONMENT: true,
  }),
];

module.exports = require('./webpack.base')({
  mode: 'production',
  devServer: {
    port: 3000,
    contentBase: path.join(process.cwd(), 'dist/'),
    historyApiFallback: true,
  },
  devtool: 'none',
  plugins,
});
