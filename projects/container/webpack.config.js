const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products2@http://localhost:8082/remoteEntry.js',
                cart: 'cart@http://localhost:8084/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

