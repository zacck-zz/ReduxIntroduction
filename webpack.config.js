var webpack = require('webpack');
var path = require('path');

module.exports =  {
  //find this file and start from there
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    //where all this needs to happen
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      Main: 'app/components/Main.jsx'
    },
    //files we want to process
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        //name of loader
        loader: 'babel-loader',
        query: { //parse the files through react
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/, //regex for .jsx extension
        exclude: /(node_modules|bower_components)/ //set up folders to be ignored
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
