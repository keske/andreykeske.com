import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';

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
        {
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: 1,
            importLoaders: 1,
            localIdentName:
              '[folder]_[path]__[name]_[local]__[hash:base64:16]',
          },
        }, {
          loader: 'postcss-loader',
        },
      ],
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new DashboardPlugin(),
  ],
};
