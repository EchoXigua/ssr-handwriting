const path = require('path')

//减小包体积
const nodeExternals = require('webpack-node-externals')

const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './node-server/src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
  },
  externals: [nodeExternals()]
}