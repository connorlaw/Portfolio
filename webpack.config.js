const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  entry: './js/script.js',
  module: {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  ]
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'script.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new HtmlMinimizerPlugin(),
    ],
  },
};