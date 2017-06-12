/**
 * Created by huzikang on 17/6/1.
 */
// var  path  = require('path');

/*module.exports = {
  entry: './test/3.js',
    output: {
      path: path.resolve( __dirname, 'dist' ),
        filename: 'my-first-webpack.bundle.js'
    }
};*/
/*var config = {
    entry: {
        app: './test/123.js',
            search: './test/23.js'
    },
    output: {
        filename: '[name].js',
            path: __dirname + '/build'
    }
};*/


/*const config = {
    entry: './test/23.js',
    output: {
        path: path.resolve(__dirname, 'dist1'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    }
};*/

const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
/*const config = {
 entry: './test/3.js',
 output: {
 path: path.resolve(__dirname, 'dist2'),
 filename: 'my-first-webpack.bundle.js'
 },
 module: {
 rules: [
 {test: /\.(js|jsx)$/, use: 'babel-loader'}
 ]
 },
 plugins: [
 new webpack.optimize.UglifyJsPlugin(),
 new HtmlWebpackPlugin({template: './index.html'})
 ]
 };*/

const config = {
    entry: './test/6-12.js',
    output: {
        filename: 'my-6-12-1-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist612')
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template:'./index.html'})
    ]
};





module.exports = config;







