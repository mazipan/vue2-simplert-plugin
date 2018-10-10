const webpack = require('webpack')
const path = require('path')
const npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  entry: {
    app: './src/simplert-plugin.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'vue2-simplert-plugin.js',
    library: 'Simplert',
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
  externals: {
    "vue": "Vue"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "vue2-simplert-plugin.css"
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
    new webpack.BannerPlugin({
      banner: `Vue2-Simplert v.${npm.version}`
    }),
    // new BundleAnalyzerPlugin()
  ]
});