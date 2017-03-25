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
        loader: 'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}