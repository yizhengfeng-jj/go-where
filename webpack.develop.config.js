let webpack = require('webpack');
module.exports = {
    mode: 'development',
    devServer: {
        port: 9001,
        inline: true,
        host: 'localhost',
        hot: true,
        overlay: true,
        hotOnly: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
