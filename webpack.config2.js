/**
 * Created by huzikang on 17/6/12.
 */
var path = require('path');
var serverConfig = {
    target: 'node',
    entry: {
        entry: './test/6-12-2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.node.js'
    }
};

var clientConfig = {
    target: 'web', // <=== 默认是 'web'，可省略
    entry: {
        entry: './test/6-12-2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.js'
    }
};

module.exports = [ serverConfig, clientConfig ];