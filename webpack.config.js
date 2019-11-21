const { HotModuleReplacementPlugin, EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: `./index.js`,
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [`babel-loader`]
            }
        ]
    },
    resolve: {
        extensions: [`*`, `.js`, `.jsx`]
    },
    output: {
        path: `${ __dirname }/dist`,
        publicPath: `/`,
        filename: `bundle.js`
    },
    plugins: [
        new HotModuleReplacementPlugin, 
        new HtmlWebpackPlugin({
            template: 'dist/index.html'
        }),
        new EnvironmentPlugin({ 
            "API_KEY": '0a12f622cf73e8bbf38643081189bb9c'
        })
    ], 
    devServer: {
        contentBase: `./dist`, hot: true, historyApiFallback: true
    }
}