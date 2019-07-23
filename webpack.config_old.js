const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  context: __dirname + "/src/app2",
  entry: "./index.js",
  mode:'development',
  output: {
    path: "/dist",
    filename: 'appbundle.js',
    publicPath: '/'
  },
  // devtool: setDevTool(),
  module: {
      rules: [
          {
            test: /\.js$/,
            exclude: [
              /node_modules/
            ],
            use: [
              { 
                loader: 'babel-loader',
                query: {
                  "presets": ['env',
                  {
                    "modules": false,
                  }, 'react']
                }
              }  
            ]
          },
          {
              test: /\.html/,
              loader: 'raw-loader'
          },
          {
            test: /\.(sass|scss)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          },
          
      ]
  },
  
  // plugins: [
  //     new HtmlWebpackPlugin({
  //         template: __dirname + "/src/public/index.html",
  //         inject: 'body'
  //     }),
  //     new webpack.DefinePlugin({
  //         API_KEY: JSON.stringify(process.env.API_KEY)
  //     }),
  //   //   new DashboardPlugin()
  // ],
  // devServer: {
  //     contentBase: './src/public',
  //     port: 7700,
  // }
};



module.exports = config;