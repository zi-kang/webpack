/**
 * Created by huzikang on 17/6/12.
 */
var devServer = require( 'webpack-dev-server' ),
    path = require( 'path' ),
    webpack = require( 'webpack' );

devServer: {
    contentBase: pathjoin( __dirname, "dist612" ),
        compress: true,
        port: 9900
}