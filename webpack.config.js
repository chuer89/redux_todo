
var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.commonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/js/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('development'),
          }
        }),
    ],
    module: {
        loaders: [
            // { test: /(\.jsx|\.js)$/, loader: 'babel', exclude: /node_modules/ }
            { test: /\.js|jsx$/, loaders: ['babel'] }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}