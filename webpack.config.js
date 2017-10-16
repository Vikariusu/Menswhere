var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    },
    devtool: 'source-map'
};
