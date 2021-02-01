const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('dotenv').config();

const babelOptions = {
  presets: [
    'react',
    [
      'es2015',
      {
        modules: false
      }
    ],
    'es2016',
    'stage-0'
  ]
};

const globalconstiables = {
  FIREBASE_KEY: JSON.stringify(process.env.FIREBASE_KEY),
  AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
  DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
  PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
  STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
  MESSAGE_SENDER_ID: JSON.stringify(process.env.MESSAGE_SENDER_ID),
  NEWSAPI_KEY: JSON.stringify(process.env.NEWSAPI_KEY)
};

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
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new ExtractTextPlugin('app/stylesheets/style.css'),
    new webpack.DefinePlugin(globalconstiables)
  ]
};
