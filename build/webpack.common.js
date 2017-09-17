var webpack = require("webpack");
var glob = require('glob-all');
const helpers = require('./helpers');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var environment = process.env.NODE_ENV || 'development';
const config = {
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
      rules: [
        {
          test: /\.pug$/,
          use: ["apply-loader", "pug-loader"]
        },
        {
          test: /\.ts$/, 
          use: 'ts-loader',
        },
        // First case: someFiles.styl ending with .style
        {
          test: /.*[^\.global]\.styl$/,
          use: ["to-string-loader", "css-loader", "stylus-loader"]
        },
        // Second case: someFiles.global.styl ending with .global.styl
        {
          test: /.*[\.global]\.styl$/,
          use: ["style-loader", "css-loader", "stylus-loader"]
        },
        {
          test: /\.coffee$/,
          use: ["coffee-loader", "coffee-import-loader"]
        },
        {
          test: /\.html$/, 
          use: "html-loader?interpolate=require&-minimize"},
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        // I have to add the regex .*? because some of the files are named like... fontello.woff2?952370
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
          use: 'url-loader?limit=900000'
        }
      ]
    },
};
module.exports = config;
