/**
 * Created by huzikang on 17/6/14.
 */
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    }
};