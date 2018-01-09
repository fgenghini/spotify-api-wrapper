import { join } from 'path';

const include = join(__dirname, 'src');
const outputPath = join(__dirname, 'dist');

export default {
  entry: './index',
  output: {
    path: outputPath,
    libraryTarget: 'umd',
    library: 'SpotifyAPIWrapper',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include },
    ],
  },
};
