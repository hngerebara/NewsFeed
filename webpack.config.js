var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('dotenv').config();


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

var globalVariables = {
  FIREBASE_KEY: JSON.stringify(process.env.FIREBASE_KEY),
  AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
  DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
  PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
  STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
  MESSAGE_SENDER_ID: JSON.stringify(process.env.MESSAGE_SENDER_ID)
}

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: babelOptions
      }, 
      
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }, 
       {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new ExtractTextPlugin("app/stylesheets/style.css"),
    new webpack.DefinePlugin(
      globalVariables
    )
  ]
};