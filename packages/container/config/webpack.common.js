const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
Loader - processes some files while loading them to the browser

babel -- common loader used in projects, which transforms ES5+ code into ES5 syntax
babel/preset-react -- processes JSX
babel/preset-env -- processes ES5+ syntax into ES5 syntax
babel/plugin-transform-runtime -- provides some features, such as async-await, etc
*/

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // file extension ending with /mjs
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
