const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',

    devServer: {
      static: './dist',
      port: 8080
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],

    output: {
      filename: 'main-prod.js',
    },
  };