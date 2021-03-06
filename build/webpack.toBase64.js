const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  entry: path.resolve(rootDir, 'src/toBase64/main.js'),
  output: {
    path: path.resolve(rootDir, '../../src/assets/s2f-base64')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            },
          },
          'css-loader'
        ]
      },
      {
        test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        // options: {
        //   limit: 1024000, // 1 KO
        //   name: 'fdir/[name].[ext]'
        // }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(rootDir, '../../src/assets/s2f-base64')]
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      template: path.resolve(rootDir, "src/toBase64/index.html"),
      templateParameters: {
        "title": "",
      }
    }),
  ],
  devServer: {
    contentBase: path.join(rootDir, 'dist/base64'),
    compress: true,
    port: 9001
  }
}
