import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import common from './webpack.common'

const configuration: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './demo',
    publicPath: '/',
    compress: true,
    port: 4444
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './demo/index.html'
    })
  ]
}

export default merge(common, configuration)
