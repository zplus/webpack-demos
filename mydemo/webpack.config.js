var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './main.js',
        vendor: ['jquery']
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss']
    },
    module: { //加载器配置
        loaders: [ // 使用 ! 来链接多个loader
            {test: /\.css$/, loader: 'style-loader!css-loader'}, //.css 文件使用 style-loader 和 css-loader 来处理
            // {test: /\.js$/, loader: 'jsx-loader?harmony'}, //.js 文件使用 jsx-loader 来编译处理
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'}, //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} //图片文件使用 url-loader 来处理，小于8kb的直接转为base64  ? 后边的 query 有两种写法, 可以看下文档: http://webpack.github.io/docs/using-loaders.html#query-parameters
        ]
    },
    plugins: [
        devFlagPlugin, // 环境配置
        new webpack.optimize.CommonsChunkPlugin(/*chunkName=*/'vendor', /*filename=*/'vendor.js'),
        new HtmlwebpackPlugin({
            title: 'webpack-mydemo'
        })
    ],
    externals: {
        appCfg: 'appCfg'
    }
};