const webpack = require('webpack');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['uuid'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            compact: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: require.resolve('file-loader'),
          options: {
            outputPath: 'client/public',
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
};
