const path = require('path');
const webpack = require('webpack');
//引入webpack-merge插件进行合并
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const devConfig = merge(baseConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        host: '0.0.0.0',
        port: 3000,
        open: true,
    },
    devtool: 'source-map',
    plugins: [
        //定义全局变量
        new webpack.DefinePlugin({
            //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
            ENV: JSON.stringify('dev')
        })
    ]
});

module.exports =  devConfig;