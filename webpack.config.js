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
                //loaders: [{
                loader: "file-loader",
                options: {
                            name: './img/[name].[ext]'
                },
            //},
             // "img-loader"
          //  ],
                exclude: /node_modules/
         },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader"
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