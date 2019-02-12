import merge from 'webpack-merge'
import common from './webpack.common'
import webpack from 'webpack'

const configuration: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    compress: true,
    port: 4444
  }
}

export default merge(common, configuration)
