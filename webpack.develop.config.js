let webpack = require('webpack');
let path = require('path');
module.exports = {
    mode:'development',
    devServer: {
       port:9001,
       inline:true,
       host:'localhost',
       hot:true,
       overlay:true,
       hotOnly:true
    },
    devtool: 'source-map',
    plugins:[
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NamedModulesPlugin()
    ]
}