const merge = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
})