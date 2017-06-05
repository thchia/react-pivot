var path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
