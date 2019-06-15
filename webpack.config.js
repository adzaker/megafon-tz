const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','resolve-url-loader', 'sass-loader']
        })
      },
      {
        test: /\.pug$/,
        loaders: [
          {
            loader: "html-loader?attrs=img:src!pug-html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty":true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template: './src/pug/index.pug'
    }),
    new CopyWebpackPlugin([{
      from: 'src/images/',
      to: 'images',
    }]),
  ],
};