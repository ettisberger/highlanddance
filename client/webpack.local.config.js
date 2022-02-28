const webpack = require('webpack');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'REACT_APP_API_URL': JSON.stringify('/api/v1/'),
                'REACT_APP_TITLE': JSON.stringify('Highland Dancing Basel LOCAL'),
                'REACT_APP_BASE_URL': JSON.stringify('http://localhost:10004/'),
            }
        }),
    ],

    devServer: {
        static: path.resolve(__dirname, '../.'),
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:10004/',
                secure: false
            }
        }
    }
});
