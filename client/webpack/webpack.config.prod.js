const base = require('./webpack.config.base')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: (module) => {
                        const moduleName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                        return `npm.${moduleName.replace('@','')}`
                    }
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/[name].[hash].css`,
            chunkFilename: '[id].[hash].css',
        })
    ]
})