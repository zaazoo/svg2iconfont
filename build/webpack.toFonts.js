const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  entry: path.resolve(rootDir, 'src/toFonts/main.js'),
  output: {
    path: path.resolve(rootDir, '../../src/assets/s2f-iconfont')
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
        test: /\.font\.js/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'webfonts-loader',
            options: {
            },
          }
        ],
      }
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          // 将font.css单独打包
          name: 'font',
          // test: /\.css$/,
          test: /\.font\.js/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['fontDist']
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      template: path.resolve(rootDir, "src/toFonts/index.html"),
      templateParameters: {
        "title": "",
      }
    }),
  ],
  devServer: {
    contentBase: path.join(rootDir, 'dist/fonts'),
    compress: true,
    port: 9000
  }
}
