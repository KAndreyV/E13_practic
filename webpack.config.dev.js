const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',

    devServer: {
      static: './dist',
      hot: true,
      port: 3001
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],

    output: {
      filename: 'main-dev.js',
    },
  };