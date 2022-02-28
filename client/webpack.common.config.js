/*
    ./webpack.common.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/client/js/index.js',
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                   "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(jpg|png|ttf|svg)$/,
                exclude: /node_modules/,
                use: "url-loader?limit=25000",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            minify: {
                minifyCSS: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
            },
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'src/client/assets/', to: 'assets/' },
                ]
            }
        )
    ]
};
