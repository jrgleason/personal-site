var webpack = require("webpack");
var glob = require('glob-all');
const helpers = require('./helpers');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var environment = process.env.NODE_ENV || 'development';
module.exports = function(options){
  console.log("Running in " + environment+ " mode");
  isProd = options.env === 'production';
  return {
    context: helpers.root(''),
    entry: {
      app: './src/main',
      styles: './src/styles/personal.global'
    },
    resolve: {
      extensions: ['.js', '.ts', '.coffee', '.pug', '.styl', '.less', '.css', '.html'],
      modules: ['node_modules']
    },
    output: {
      filename: "[name].js",
      path: helpers.root('public')
    },
    module: {
      loaders: [
        {
          test: /\.pug$/,
          loaders: ["apply-loader", "pug-loader"]
        },
        {test: /\.ts$/, loader: 'ts-loader'},
        // First case: someFiles.styl ending with .style
        {
          test: /.*[^\.global]\.styl$/,
          loaders: ["to-string-loader", "css-loader", "stylus-loader"]
        },
        // Second case: someFiles.global.styl ending with .global.styl
        {
          test: /.*[\.global]\.styl$/,
          loaders: ["style-loader", "css-loader", "stylus-loader"]
        },
        {
          test: /\.coffee$/,
          loaders: ["coffee-loader", "coffee-import-loader"]
        },
        {test: /\.html$/, loader: "html-loader?interpolate=require&-minimize"},
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
        },
        // I have to add the regex .*? because some of the files are named like... fontello.woff2?952370
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
          loader: 'url-loader?limit=900000'
        }
      ]
    },
  }
};
