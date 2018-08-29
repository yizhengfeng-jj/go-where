let webpack = require('webpack');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
        inline: true,
        host: 'localhost',
        hot: true,
        overlay: true,
        hotOnly: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/static/mock'
                },
                logLevel: 'debug'

            }
        }
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
