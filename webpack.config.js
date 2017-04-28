var webpack = require('webpack');

module.exports = {
    entry: './lib/index.js',
    output: {
        libraryTarget: 'umd',
        library: 'jsbenchmark',
        path: __dirname,
        filename: 'jsbenchmark.umd.js'
    },
    resolve: {
        extensions: ['', '.js'],
    },
    externals: {
        
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        require("webpack-fail-plugin")
    ]
};
