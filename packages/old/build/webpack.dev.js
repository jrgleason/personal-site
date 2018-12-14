const webpack = require("webpack");
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
module.exports = function () {
  return webpackMerge(commonConfig, {
    module: {
      rules: [
        {
          test: /\.ts$/,
          enforce: "pre",
          loader: "tslint-loader"
        }
      ],
    },
    devtool: 'inline-source-map',
  })
};
