const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(process.cwd(), './src/index.html'),
  }),
];

module.exports = options => ({
  entry: [path.join(process.cwd(), './src/index.js')],
  mode: options.mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: options.devServer,
  devtool: options.devtool,
  plugins: options.plugins.concat(plugins),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
});
