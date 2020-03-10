
module.exports = {
  entry: './www/src/index.js',
  output: {
    filename: './main.js',
    path: __dirname + '/www'
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader?url=false',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  }
};