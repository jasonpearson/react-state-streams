const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = webpackMerge(webpackCommon, {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]  
})