/**
 * Created by huzikang on 17/6/14.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './main.js',
        vendor: ['jquery'],
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};