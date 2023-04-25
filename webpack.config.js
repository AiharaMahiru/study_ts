const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: [
                    // {
                    //     loader: 'babel-loader',
                    //     options: {
                    //         presets: [
                    //             [
                    //                 '@babel/preset-env',
                    //                 {
                    //                     targets: {
                    //                         chrome: '102',
                    //                         ie: '11'
                    //                     },
                    //                     corejs: '3',
                    //                     useBuiltIns: 'usage'
                    //                 }
                    //             ]
                    //         ]
                    //     }
                    // },
                    'ts-loader', 
                ],
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Webpack 5 Typescript',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
}