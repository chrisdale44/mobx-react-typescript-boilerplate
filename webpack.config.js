const path = require('path');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
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
        test: /\.scss$/,
        loaders: [
            ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader')
        ]
    }]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
};
