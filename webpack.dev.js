const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 4000,
        hot: true,
        historyApiFallback: true,
        open: true,
    },
});
