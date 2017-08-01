const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: ['babel-polyfill', './index.js']
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader" },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }
        ]
    },

    resolve: {
        alias: {
            components: __dirname + '/src/components',
            containers: __dirname + '/src/containers',
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
