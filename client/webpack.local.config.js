const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const Dotenv = require('dotenv-webpack');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval',

    plugins: [
        new webpack.DefinePlugin(Object.assign(require('./src/config/local.config.json'))),
        new Dotenv({
            path: './.env.development'
        })
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