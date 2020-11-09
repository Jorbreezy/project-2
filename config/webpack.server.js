const path = require('path');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');

module.exports = {
  target: 'node',
  externals: nodeExternals(),
  entry: path.resolve(__dirname, '../server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)?$/,
        exclude: /node_modules/,
        use: ['isomorphic-style-loader', { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
};
