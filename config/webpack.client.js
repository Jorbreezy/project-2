const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ClientConfig = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/(api|assets|dist)/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|.js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
};

module.exports = ClientConfig;
