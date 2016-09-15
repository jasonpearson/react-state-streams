const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(webpackCommon, {
  module: {
    loaders: [
      {
        test: /\.scss$/,        
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
})