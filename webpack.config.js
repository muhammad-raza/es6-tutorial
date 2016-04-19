var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/ratefinder.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'ratefinder.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };