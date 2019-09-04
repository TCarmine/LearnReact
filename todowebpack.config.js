const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config  = {

  entry: "./src/todo_entry.js",
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
         },
         include: __dirname + '/src',
       },
       {
        test: /\.css/,
        use:[ 
          "style-loader",
          MiniCssExtractPlugin.loader,
         "css-loader"
        ]
       }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin ({
        template : 'app/src/todo.html'
    }),
    new MiniCssExtractPlugin({
        filename: "app/src/todo.css"
    }),
]
};

module.exports = config;