const path = require('path');
const webpack = require('webpack');
// 生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//将css提取到单独的文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 清除build/dist文件夹文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 压缩js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        filename: "js/[name].[hash:6].js",
        publicPath: "/",
        // chunkFilename: 'bundle.[chunkhash:8].min.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {}
                    },
                    { loader: 'sass-loader', options: { sourceMap: true }}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg(\?v=\d+\.\d+\.\d+)?|woff|eot|ttf)$/,
                use: ['url-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: ['json-loader','json5-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:6].min.css'
        }),
    ]
};