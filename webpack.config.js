const path = require('path');

module.exports = {
  entry: './lib/js/main.jsx',
  output: {
    filename: './bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
