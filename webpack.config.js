var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader' }
      // { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
      //   options: { plugins: ['transform-runtime'], presets: ["env", "react"] } }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};