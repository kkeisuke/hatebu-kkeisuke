'use strict'

var env
try {
  // ローカル
  env = require('./env')
} catch (error) {
  // heroku
  env = process.env
}

var webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist|tmp)/,
        use: 'babel-loader'
      }
    ]
  },
  entry: {
    index: './src/presentation/index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      HATEB_URL: JSON.stringify(env.HATEB_URL),
      GITHUB_API_TOKEN: JSON.stringify(env.GITHUB_API_TOKEN),
      GITHUB_OWNER: JSON.stringify(env.GITHUB_OWNER),
      GITHUB_REPO: JSON.stringify(env.GITHUB_REPO),
      GITHUB_REF: JSON.stringify(env.GITHUB_REF),
      GITHUB_PATH: JSON.stringify(env.GITHUB_PATH),
      COMMIT_MSG: JSON.stringify(env.COMMIT_MSG)
    }),
    new webpack.IgnorePlugin(/^encoding$/, /node-fetch/)
  ],
  mode: 'production',
  target: 'node'
}
