const dirs = require('./paths');
const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const { homepage } = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  output: {
    publicPath: homepage
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: dirs.PUBLIC_ENTRY_POINT_HTML,
      publicUrl: homepage
    })
  ]
});
