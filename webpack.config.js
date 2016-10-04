var webpack = require("webpack");
var path = require("path");
var glob = require('glob-all');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
var scripts = glob.sync([
  './src/**/*.js'
]);
var markup = glob.sync([
  './src/**/*.html',
  './src/**/*.pug'
]);
var styles = glob.sync([
  './src/**/*.styl'
]);
module.exports = {
  context: __dirname, 
  entry: {
    polyfills: './polyfills.js',
    vendor: './deps.js',
    app: scripts.concat(markup),
    styles: styles
  },
  resolve: {
    extensions: ['']
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "public/javascripts")
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" },
      { test: /\.pug$/, loader:"pug" },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-relative-loader'
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
        loader: 'url?limit=500000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['styles', 'app', 'vendor', 'polyfills'],
      minChunks: Infinity
    })
  ] 
}
