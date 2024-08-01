const dirs = require('./paths');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: dirs.ENTRY_POINT
  },
  output: {
    path: dirs.BUILD,
    filename: '[name].bundle.[fullhash:8].js',
    chunkFilename: '[name].chunk.[chunkhash:8].js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader')
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
