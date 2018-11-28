const path = require('path');

const __MODE__ = process.env.NODE_ENV || 'development';
const __BUILTINS__ = process.env.BUILT_INS;

const config = {
  mode: __MODE__,
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `${__BUILTINS__}.js`,
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: `./babel.config.${__BUILTINS__}.js`
          }
        }
      }
    ]
  }
};

module.exports = config;