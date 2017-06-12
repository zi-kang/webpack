/**
 * Created by huzikang on 17/6/12.
 */
const webpack = require('webpack');
const configuration = require('./webpack.config0.js');

let compiler = webpack( configuration );

compiler.apply( new webpack.ProgressPlugin() );

compiler.run( function(err, stats){
    console.log( '另起一个通test\6-12.js一样的功能的js脚本\n'+stats );
} );