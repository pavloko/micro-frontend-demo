const HTMLWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
