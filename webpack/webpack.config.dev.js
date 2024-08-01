const dirs = require('./paths');
const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  devServer: {
    static: dirs.BUILD,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: dirs.PUBLIC_ENTRY_POINT_HTML,
      publicUrl: ''
    })
  ]
});
