const path = require('path');
const _modules = path.join(__dirname, 'node_modules');
const _public = path.join(__dirname, 'client/public');
const _src = path.join(__dirname, 'client/src');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

 
module.exports = {
  entry: `${_src}/index.js`,
  output: {
    path: _public,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(s*)css$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: '25000'
       }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'})
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx"],
    modules: [_modules]
  }
};