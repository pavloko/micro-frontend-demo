const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
    }),
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remote.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: Object.keys(packageJson.dependencies),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
