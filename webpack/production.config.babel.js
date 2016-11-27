import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  devtool: 'source-map',

  entry: {
    main: ['./src/index'],
  },

  module: {
    loaders: [{
      test: /\.css$/,
      use: [
        'css-loader?minimize&module&localIdentName=[hash:base64:5]',
        'postcss-loader',
      ],
    }],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),

    new webpack.ProvidePlugin({
      Promise: 'exports?global.Promise!es6-promise',
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
  ],
};
