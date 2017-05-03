var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var babelOptions = {
  "presets": [
    "react",
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "es2016",
    'stage-0'
  ]
};

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: babelOptions
      }, {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          "modules": true,
          "localIdentName": '[name]__[local]___[hash:base64:5]'
        }
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};