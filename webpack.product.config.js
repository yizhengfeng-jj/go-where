let cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode:'production',

    plugins:[
        new cleanWebpackPlugin('dist')
    ]
}