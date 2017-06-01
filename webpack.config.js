/**
 * Created by huzikang on 17/6/1.
 */
var path  = require('path');

/*module.exports = {
  entry: './test/3.js',
    output: {
      path: path.resolve( __dirname, 'dist' ),
        filename: 'my-first-webpack.bundle.js'
    }
};*/
var config = {
    entry: {
        app: './test/123.js',
            search: './test/23.js'
    },
    output: {
        filename: '[name].js',
            path: __dirname + '/build'
    }
};
module.exports = config;







