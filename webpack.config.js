const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports={
  entry:'./src/app.js',
  target: "electron",
  output:{
    filename:'./bin/app-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['react','es2017','es2016','es2015','stage-2']
        }
      }
    ]
  }
 /* plugins: [
    new UglifyJSPlugin()
  ]*/
}