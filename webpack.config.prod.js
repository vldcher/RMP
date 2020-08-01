const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ]
})