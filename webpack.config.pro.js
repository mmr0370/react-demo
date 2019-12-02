const webpack = require('webpack');
const merge = require('webpack-merge');
// css压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'react-demo',
                    test: /\.scss|css$/,
                    chunks: 'all',    // merge all the css chunk to one file
                    enforce: true
                }
            }
        },
        minimizer: [
            // //压缩CSS代码
            new OptimizeCss({
                cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
                cssProcessorOptions: {
                    discardComments: { removeAll: true }
                },
                canPrint: true  //是否将插件信息打印到控制台
            }),
            //压缩js代码
            new UglifyJsPlugin({
                //启用文件缓存
                cache: true,
                //使用多线程并行运行提高构建速度
                parallel: true,
                //使用 SourceMaps 将错误信息的位置映射到模块
                sourceMap: true
            })
        ]
    },
    plugins:[
        // 使用插件定义全局变量DEV
        new webpack.DefinePlugin({
            ENV:JSON.stringify('production')
        })
    ]
});