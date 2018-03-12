const path = require("path");
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  resolve: {
    modules: [path.join(__dirname, "frontend"), "node_modules"]
  },
  entry: {
    vendor: ["actioncable", "loco-js"],
    application: "./frontend/packs/application.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: "css-loader" }, { loader: "postcss-loader" }]
        })
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["app/assets/assets"], {
      exclude: [],
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // The order of this array matters
      names: ["common", "vendor"],
      minChunks: 2
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "app/assets/assets")
  }
};
