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
      polyfills: './build/polyfills',
      vendor: './build/deps',
      app: './src/main',
      styles: './src/styles/personal.global'
    },
    resolve: {
      extensions: ['', '.js', '.ts', '.coffee', '.pug', '.styl', '.less', '.css', '.html'],
      modules: ['node_modules']
    },
    output: {
      filename: "[name].js",
      path: helpers.root('public')
    },
    module: {
      loaders: [
        {test: /\.pug$/, loader: "pug-html-loader"},
        {test: /\.ts$/, loader: 'ts-loader'},
        // First case: someFiles.styl ending with .style
        {
          test: /.*[^\.global]\.styl$/,
          loaders: ["to-string", "css", "stylus"]
        },
        // Second case: someFiles.global.styl ending with .global.styl
        {
          test: /.*[\.global]\.styl$/,
          loaders: ["style", "css", "stylus"]
        },
        {
          test: /\.coffee$/,
          loaders: ["coffee-loader", "coffee-import"]
        },
        {test: /\.html$/, loader: "html?interpolate=require&-minimize"},
        {
          test: /\.css$/,
          loaders: ["style", "css"]
        },
        // I have to add the regex .*? because some of the files are named like... fontello.woff2?952370
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
          loader: 'url?limit=900000'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  }
};
