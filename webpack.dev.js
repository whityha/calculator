const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 4000,
        hot: true,
        historyApiFallback: true,
        open: true,
    },
});
