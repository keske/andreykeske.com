const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    main: ['webpack-hot-middleware/client', './src/index'],
  },

  resolve: {
    unsafeCache: true,
  },

  module: {
    loaders: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?module&localIdentName=[path]__[name]__[local]',
        'postcss-loader',
      ],
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new DashboardPlugin(),
  ],
};
