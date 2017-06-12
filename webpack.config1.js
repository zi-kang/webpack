/**
 * Created by huzikang on 17/6/12.
 */
var path = require( 'path' ),
    webpack = require( 'webpack' ),
    webpackMerge = require( 'webpack-merge' );
var baseConfig = {
    target: 'async-node',
    entry: {
        entry: './test/6-12-2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist-test'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'inline',
            filename: 'inline.js',
            minChunks: Infinity
        }),
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 5000,
            maxSize: 10000
        }),
    ]
};
let targets= ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main' ].map((target) => {
        let base = webpackMerge( baseConfig,{
            target: target,
            output: {
                path: path.resolve(__dirname,'dist-test/' + target ),
                filename: '[name].'+ target + '.js'
            }
        } );
        return base;
    });

module.exports = targets;