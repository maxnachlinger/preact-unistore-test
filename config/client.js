const path = require('path');

module.exports = {
  publicPath: '/',
  srcPath: path.join(__dirname, '/../src'),
  devJsBundleName: 'bundle.js',
  devCssBundleName: 'bundle.css',
  outputPath: path.join(__dirname, '/../dist'),
  devServerHost: '127.0.0.1',
  devServerPort: 2990,
};
