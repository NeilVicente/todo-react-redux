const common = require('./webpack.config.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(common, {
    plugins: [
      new webpack.DefinePlugin({
        BASENAME: JSON.stringify('/')
      })
    ]
})
