/**
 * Created by huzikang on 17/6/14.
 */
require.ensure(['./a'], function(require) {
    var content = require('./a');
    document.open();
    document.write('<h1>' + content + '</h1>');
    document.close();
});