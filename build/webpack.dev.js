const webpack = require("webpack");
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
module.exports = function () {
  return webpackMerge(commonConfig({env: ENV}), {
    module: {
      preLoaders: [
        {
          test: /\.ts$/,
          loader: "tslint"
        }
      ],
      postLoaders: [
        {
          test: /^((?!\.spec\.ts).)*.ts$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'istanbul-instrumenter'
        }
      ]
    },
    tslint: {},
    devtool: 'inline-source-map',
  })
};