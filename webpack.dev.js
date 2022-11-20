/* eslint-disable import/no-extraneous-dependencies */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
    },
    compress: true,
  },
  optimization: {
    minimize: true,
  },
  plugins: [new CleanWebpackPlugin()],
});
