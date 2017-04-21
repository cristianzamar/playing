import webpack from 'webpack';
import path from 'path';

module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: []
    }
};
