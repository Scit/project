const config = require('./webpack.base.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = Object.assign({}, config, {
    module: Object.assign({}, config.module, {
        rules: config.module.rules.concat([{
            test: /\.css$/,
            use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
        }])
    }),

    plugins: config.plugins.concat([
        new ExtractTextPlugin("[name].[chunkhash].css")
    ])
});
