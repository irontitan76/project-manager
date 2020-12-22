const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

const productionPlugins = [
  new CleanPlugin.CleanWebpackPlugin()
];

module.exports = {
  devtool: isProd ? 'none' : 'inline-source-map',
  entry: './src/app.ts',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: 'ts-loader',
      }
    ],
  },
  plugins: isProd ? productionPlugins : [],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};