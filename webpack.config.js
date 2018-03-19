const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)?/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
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
};