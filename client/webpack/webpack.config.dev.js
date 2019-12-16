const base = require('./webpack.config.base')
const merge = require('webpack-merge')

module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
})