"use strict";
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const precss = require('precss');

let sassLoader = ExtractTextPlugin.extract('style', [
  'css',
  'postcss-loader',
  'sass?precision=3'
].join('!'));

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/router',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx'],
    root: [path.join(__dirname, './src')]
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts-loader'],
      include: path.join(__dirname, 'src')
    },{ 
      test : /\.(scss|css)$/, 
      loader : sassLoader 
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/style")]
  },
  postcss: function () {
      return [precss, autoprefixer];
  },
  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ]
};
