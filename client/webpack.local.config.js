const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval',

    plugins: [
        new webpack.DefinePlugin(Object.assign(require('./src/config/local.config.json')))
    ],

    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
});