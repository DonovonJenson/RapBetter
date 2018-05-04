const path = require('path');
const _src = path.join(__dirname, 'src');
const _public = path.join(__dirname, 'www');
const _modules = path.join(__dirname, 'node_modules');

 
module.exports = {
  entry: `${_src}/main.js`,
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['css-loader', 'style-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: '25000'
       }
      }
    ],
  },
  resolve: {
    modules: [_modules]
  }
};