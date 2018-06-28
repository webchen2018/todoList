
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        // 入口
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js?rd=[hash]'    
    },
    module: {
        rules: [{
                test: /\.(less|css)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new webpack.NamedModulesPlugin(),   
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,  // 模块热替换
    }
}
// 