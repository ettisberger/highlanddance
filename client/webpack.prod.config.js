const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.common.config');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
        'REACT_APP_API_URL': JSON.stringify('/api/v1/'),
        'REACT_APP_TITLE': JSON.stringify('Highland Dancing Basel'),
        'REACT_APP_BASE_URL': JSON.stringify('http://highlanddance.ettisberger.ch/api/'),
      }
    }),
    //  new CompressionPlugin(),
    //  new BundleAnalyzerPlugin()
  ],
});
