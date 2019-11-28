const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        filename: "js/[name].[hash:6].js",
        publicPath: "/",
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        host: '0.0.0.0',
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css|scss$/,
                loader: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg(\?v=\d+\.\d+\.\d+)?|woff|eot|ttf)$/,
                use: ['url-loader']
            },
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            title: 'demo',
            inject: 'body',
            minify: {
                minifyCSS: true,
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
};
