const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/app.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "./js/bundle.js"
    },
    watch: true,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader : "babel-loader",
                exclude: /node_modules/
         },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use : [{  
                        loader : "css-loader",
                        options : {minimize: true}
                    },
                           "autoprefixer"],
                    fallback: "style-loader"
                }),
                exclude: /node_modules/
         },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use : [{  
                            loader : "css-loader",
                            options : {minimize: true}
                        },
                        "less-loader"],
                    fallback: "style-loader"
                }),
                exclude: /node_modules/
         },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    name: './images/[name].[ext]'
                },
                exclude: /node_modules/
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             loader: "url-loader?limit=10000&mimetype=application/font-woff",
             options: {
                 name: './fonts/[name].[ext]'
             }
            },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
             loader: "url-loader",
             options: {
                 name: './fonts/[name].[ext]'
             }
            }
     ]
    },
    plugins: [
        new ngAnnotatePlugin({add: true}),
        new ExtractTextPlugin("./css/styles.css"),
        new UglifyJSPlugin()
  ],
    resolve: {
        extensions: [" ", ".js", ".es6", ".css", ".less"]
    }

};



/*
  pokrece se server webpack-dev-server --inline
  webpack -p --- uglify kode 
  webpack -d --- source map 
*/