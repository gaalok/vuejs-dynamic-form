var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: process.env.NODE_ENV === 'production' ? './src/vue-dynamic-form.js' : './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ? 'vue-dynamic-form.js' : 'build.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'vuejs-datepicker': {
      root: 'vuejsDatepicker',
      commonjs: 'vuejs-datepicker',
      commonjs2: 'vuejs-datepicker',
      amd: 'vuejs-datepicker'
    },
    'vuejs-datepicker/dist/locale': {
      root: 'vuejsDatepickerLanguage',
      commonjs: 'vuejs-datepicker/dist/locale',
      commonjs2: 'vuejs-datepicker/dist/locale',
      amd: 'vuejs-datepicker/dist/locale'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
