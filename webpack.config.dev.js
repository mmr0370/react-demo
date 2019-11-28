const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');

module.exports={
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        host: '0.0.0.0',
        port: 3000,
        open: true,
    }

};