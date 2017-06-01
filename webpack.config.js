const path = require('path');

module.exports = {
  entry: './lib/js/main.js',
  output: {
    filename: './lib/js/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
