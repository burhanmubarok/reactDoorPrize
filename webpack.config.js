const HtmlPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlPlugin({
      title: 'Doorprize',
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      template: __dirname + '/src/template.ejs'
    })
  ]
}

module.exports = config
