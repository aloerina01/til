const path = require('path');

const __MODE__ = process.env.NODE_ENV;
const __DEV__ = __MODE__ === 'development';

const config = {
  mode: __MODE__,
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/webpack'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;