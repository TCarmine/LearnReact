var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config  = {

  entry: "./src/cat_entry.js",
  mode:'development',
  output: {
    filename: 'catbundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
//   check utility of this  
//   plugins: [new HtmlWebpackPlugin({filename:'cat.html'})],  
  module: {
    rules: 
    [
      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
            loader: "babel-loader",
         },
         include: __dirname + '/src',
       }
    ]
  }
};

  module.exports = config;