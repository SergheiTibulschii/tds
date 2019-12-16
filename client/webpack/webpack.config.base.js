const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const PATHS = {
    dist: path.join(__dirname, '../dist'),
    src: path.join(__dirname, '../src')
}

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_moduels/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.html`,
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        modules: ['node_modules', 'src']
    }
}