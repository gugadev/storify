/**
 * @author Gustavo Garzaki
 * @copyright Pacífico Seguros
 * 
 * On development: starts the dev server.
 * On production: build and put inside dist/
 */
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

/** Output folder */
const distDirectory = path.resolve(__dirname, 'dist')
/** Modules folder */
const modulesDirectory = path.resolve(__dirname, 'node_modules')

const configuration: webpack.Configuration = {
  entry: './packages/index.ts',
  output: {
    path: distDirectory,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  devServer: {
    contentBase: [
      distDirectory,
      modulesDirectory
    ],
    publicPath: '/',
    compress: true,
    port: 4444
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.pcss?$/,
        use: [
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'packages/index.html'
    })
  ]
}

export default configuration
