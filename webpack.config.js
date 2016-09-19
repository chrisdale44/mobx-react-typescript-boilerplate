const path = require('path');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: __dirname + '/src'
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
};
