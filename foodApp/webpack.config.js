/**
 * Created by Fate on 2/21/2017.
 */

var path = require('path');

module.exports = {
    entry: './src/main/js/index.js',
    output : {
        path : './grails-app/assets/javascripts',
        publicPath: '/assets/',
        filename : 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src/main/js'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test:/\.css$/,loader:"style-loader!css-loader"}
        ]
    },
        resolve: {
        extensions:['.js','.jsx','.css'],
    }
};
