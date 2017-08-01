const config = require('./webpack.base.config');

module.exports = Object.assign({}, config, {
    module: Object.assign({}, config.module, {
        rules: config.module.rules.concat([{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }])
    }),

    watch: true,

    watchOptions: {
        aggregateTimeout: 300,
    },

    devServer: {
        contentBase: __dirname,
        historyApiFallback: true
    }
});
