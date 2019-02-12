import webpack from 'webpack'
import merge from 'webpack-merge'
import UglifyPlugin from 'uglifyjs-webpack-plugin'
import common from './webpack.common'

const configuration: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyPlugin({
        sourceMap: true,
        uglifyOptions: {
          output: { comments: false }
        }
      })
    ]
  }
}

export default merge(common, configuration)
