const webpack = require('webpack');
const path = require('path');

const config  = {
  context: __dirname + "/src",
  entry: "./index.js",
  mode:'development',
  output: {
    filename: 'appbundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },  
  module: {
    rules: 
    [
      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
            loader: "babel-loader",
         }
       }
    ]
  }
};

  module.exports = config;