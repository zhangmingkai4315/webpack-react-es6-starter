var path = require('path');
var webpack = require('webpack');
var public_dir='/public/js';
var src_dir='./app/';

module.exports = {
  entry: src_dir+'main.js',
  output: { path: __dirname+public_dir, filename: 'bundle.js' },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    eslint: {
         configFile: '.eslintrc'
    },
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
};
