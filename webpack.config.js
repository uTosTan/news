const path = require('path');
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
    }],
  },
};
