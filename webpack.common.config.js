let merge = require('webpack-merge');
let path = require('path');
let webpack = require('webpack');
let productionConfig = require('./webpack.product.config.js');
let developmentConfig = require('./webpack.develop.config.js');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const genarationConfig = env => {
    return {
        entry: {
            app: './src/index.js',
            vender: ['lodash', 'jquery']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]-build.js',
            publicPath: '',
            chunkFilename: '[name].chunk.js'
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.js'
            }
        },
        // optimization: {
        //     splitChunks: {
        //         cacheGroups: {
        //             common: {
        //                 name:'common',
        //                 minChunks:2,
        //                 minSize:0,
        //                 priority:10,
        //                 chunks:'all'
        //             }
        //         },
        //         chunks:'initial',
        //     },
        //     runtimeChunk: {
        //         name:'manifest'
        //     }
        // },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: {
                            loader: 'style-loader'
                        },
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')(),
                                    require('postcss-cssnext')
                                ]
                            }
                        }
                        ]
                    })
                },
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        },
                        {
                            loader: 'eslint-loader',
                            options: {
                                formatter: require('eslint-friendly-formatter')
                            }
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'ts-loader'
                    }
                },
                {
                    test: /\.(jpg|png|gif|jpeg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                outputPath: '',
                                publicPath: './img',
                                useRelativePath: true,
                                limit: 9000
                            }
                        },
                        {
                            loader: 'img-loader',
                            options: {
                                plugins: [
                                    require('imagemin-jpegtran')({
                                        quality: '80'
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                attrs: ['img:src']
                            }
                        }
                    ]
                }
            ]
        },

        plugins: [
            new VueLoaderPlugin(),
            new ExtractTextWebpackPlugin({
                filename: 'app.min.css'
            }),
            new OptimizeCssAssetPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {discardComments: {removeAll: true}},
                caPrint: true
            }),
            new webpack.ProvidePlugin({
                $: 'jquery'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
                chunks: ['app'],
                minify: {
                    collapseWhitespace: true
                }
            })
        ]
    };
};

module.exports = env => {
    let config = env === 'production' ? productionConfig : developmentConfig;
    console.log(config);
    return merge(genarationConfig(env), config);
};
