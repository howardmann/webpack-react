module.exports = {
  entry: {
    shared: './src/components/shared/index.js',
    reactCounter: './src/components/reactCounter/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};