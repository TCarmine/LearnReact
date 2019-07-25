var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config  = {

  entry: "./index.js",
  mode:'development',
  output: {
    filename: 'appbundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  //plugins: [new HtmlWebpackPlugin({filename:'cat.html'})],  
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