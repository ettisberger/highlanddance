const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
    mode: 'production',

    /*optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
        },
    },*/

    plugins: [
        new webpack.DefinePlugin(Object.assign(require('./src/config/config.json'))),
        //new CompressionPlugin(),
        //new BundleAnalyzerPlugin()
    ]
});