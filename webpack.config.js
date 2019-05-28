const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [
      // {
      //   // 用正则去匹配要用该 loader 转换的 CSS 文件
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     // 转换 .css 文件需要使用的 Loader
      //     use: ['css-loader'],
      //   }),
      // },
      {
        test: /\.font\.js/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'webfonts-loader',
            options: {
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      template: path.resolve(__dirname, "./index.html"),
      templateParameters: {
        "title": "",
      }
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
