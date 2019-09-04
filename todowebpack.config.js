var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config  = {

  entry: "./src/todo_entry.js",
  mode:'development',
  output: {
    filename: 'appbundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({filename:'todo.html'})],  
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
       },
       {
        test: /\.css/,
        loaders: ['todo', 'css'],
        include: __dirname + '/src'
      }
    ]
  }
};

  module.exports = config;