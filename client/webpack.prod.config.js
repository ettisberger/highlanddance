const webpack = require('webpack');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.common.config');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin(Object.assign(require('./src/config/config.json'))),
    //  new CompressionPlugin(),
    //  new BundleAnalyzerPlugin()
    new Dotenv({
      path: './.env.production',
    }),
  ],
});
