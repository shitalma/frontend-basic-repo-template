module.exports = {
  components: './src/uiComponents/*.jsx',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
