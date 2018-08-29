const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
  srcPath,
  outputPath,
  publicPath,
  devJsBundleName,
  devCssBundleName,
  devServerHost,
  devServerPort,
} = require('./client');

module.exports = {
  context: srcPath,
  entry: {
    app: `${srcPath}/index.jsx`,
  },
  mode: 'development',
  output: {
    path: outputPath,
    publicPath,
    filename: devJsBundleName,
  },
  devtool: 'inline-source-map',
  devServer: {
    port: devServerPort,
    host: devServerHost,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js?x$/,
        include: srcPath,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: devCssBundleName,
    }),
    new HtmlWebpackPlugin({
      title: 'Preact / Unistore Test',
    }),
  ],
};
