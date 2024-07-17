const path = require('path');

module.exports = {
  mode: 'production',
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js',
    library: "lib",
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  }
};